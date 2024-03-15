import dayjs, { Dayjs } from 'dayjs';

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
