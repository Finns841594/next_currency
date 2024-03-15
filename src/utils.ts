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

import { writeFile } from 'fs/promises';
import path from 'path';

export async function cacheData(data: any, filename: string): Promise<void> {
  const filePath = path.join(process.cwd(), 'cache', filename);
  const jsonData = JSON.stringify(data, null, 2);
  await writeFile(filePath, jsonData, 'utf8');
}
