import dayjs, { Dayjs } from 'dayjs';
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

export const listDatesBetween = (
  startDate: Dayjs,
  endDate: Dayjs
): string[] => {
  let dates: string[] = [];

  while (startDate.isBefore(endDate) || startDate.isSame(endDate)) {
    dates.push(startDate.format('YYYY-MM-DD'));
    startDate = startDate.add(1, 'day');
  }
  return dates;
};
