import React, { useContext } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { AppContext } from '@/AppContext';
import { listDatesBetween } from '@/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchExchangeRate } from '@/fetchingTools';

const ResultTable = () => {
  const { currencyCode, startDate, endDate } = useContext(AppContext);
  const filteredDates = listDatesBetween(startDate!, endDate!).reverse();

  const queryKey = [currencyCode];
  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchExchangeRate(currencyCode),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
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
