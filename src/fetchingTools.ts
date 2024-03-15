import axios from 'axios';

export const fetchExchangeRate = async (code: string) => {
  try {
    const res = await axios.get(`api?code=${code}`);
    console.log('fetching', code);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
