import React, { useContext } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { data } from '../cachedRates/EUR_2024-03-14';
import { AppContext } from '@/AppContext';
import dayjs from 'dayjs';
import { listDatesBetween } from '@/utils';

const ResultTable = () => {
  const { currencyCode, startDate, endDate } = useContext(AppContext);
  const filteredDates = listDatesBetween(startDate!, endDate!).reverse();

  return (
    <div>
      <p>
        Currency Code:
        {currencyCode}
        Start Date:
        {dayjs(startDate).format('YYYY-MM-DD')}
        End Date:
        {dayjs(endDate).format('YYYY-MM-DD')}
      </p>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Rate</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredDates.map(date => (
            <TableRow key={date}>
              <TableCell>{date}</TableCell>
              <TableCell>
                {data['Time Series FX (Daily)'][date]
                  ? data['Time Series FX (Daily)'][date]['4. close']
                  : 'No data'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultTable;
