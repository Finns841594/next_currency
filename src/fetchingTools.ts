import axios from 'axios';
import { data } from './cachedRates/EUR_2024-03-14';

const clientSideVariable = process.env.NEXT_PUBLIC_API_KEY;

export const fetchExchangeRate = async (fromCode: string, toCode = 'USD') => {
  // try {
  //   const res = await axios.get(
  //     `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${fromCode}&to_symbol=${toCode}&apikey=${clientSideVariable}`
  //   );
  //   console.log('fetched data:', res.data);
  //   return res.data;
  // } catch (error) {
  //   console.error(error);
  // }
  try {
    const res = await axios.get(`api?code=${fromCode}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
  console.log('fetched data for:', fromCode);
  return data;
};
