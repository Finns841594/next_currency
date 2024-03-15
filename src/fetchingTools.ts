import axios from 'axios';

const clientSideVariable = process.env.NEXT_PUBLIC_API_KEY;

export const fetchExchangeRate = async (fromCode: string, toCode = 'USD') => {
  try {
    const res = await axios.get(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${fromCode}&to_symbol=${toCode}&apikey=${clientSideVariable}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
