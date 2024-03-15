import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';

const apikey = process.env.API_KEY;

export async function cacheData(
  data: any,
  currencyCode: string
): Promise<void> {
  const filePath = path.join(
    process.cwd(),
    'src/cachedRates',
    `${currencyCode}_${dayjs().format('YYYY-MM-DD')}.json`
  );
  const jsonData = JSON.stringify(data, null, 2);
  await writeFile(filePath, jsonData, 'utf8');
}

export async function readCachedData(currencyCode: string): Promise<any> {
  const filePath = path.join(
    process.cwd(),
    'src/cachedRates',
    `${currencyCode}_${dayjs().format('YYYY-MM-DD')}.json`
  );
  try {
    const data = await readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}

const testUrl =
  'https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&outputsize=full&apikey=demo';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  try {
    if (code) {
      // Check for cached data
      const cachedData = await readCachedData(code);
      if (cachedData) {
        // Return cached data if it exists
        return new Response(JSON.stringify(cachedData), {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Fetch new data if there's no cached data
      // const res = await axios.get(testUrl);
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${code}&to_symbol=USD&outputsize=full&apikey=${apikey}`
      );
      console.log('fetching from external');
      await cacheData(res.data, code);
      return new Response(JSON.stringify(res.data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
