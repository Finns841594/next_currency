import React, { useContext, useMemo } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  CircularProgress,
} from '@nextui-org/react';
import { AppContext } from '@/AppContext';
import { listDatesBetween } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRate } from '@/fetchingTools';

const ResultTable = () => {
  const { currencyCode, startDate, endDate } = useContext(AppContext);
  const filteredDates = listDatesBetween(startDate!, endDate!).reverse();
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 14;

  const queryKey = [currencyCode];
  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchExchangeRate(currencyCode),
  });

  const pages = Math.ceil(filteredDates.length / rowsPerPage);

  const pagenatedDates = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredDates.slice(start, end);
  }, [page, filteredDates]);

  if (isLoading) {
    return (
      <CircularProgress color="default" size="lg" aria-label="Loading..." />
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <Table
        className="w-[360px]"
        aria-label="Exchange rates table"
        isStriped
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="default"
              page={page}
              total={pages}
              onChange={page => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Rate</TableColumn>
        </TableHeader>
        <TableBody emptyContent={'No rows to display.'}>
          {pagenatedDates.map(date => (
            <TableRow key={date}>
              <TableCell>{date}</TableCell>
              <TableCell>
                {data['Time Series FX (Daily)'][date] ? (
                  data['Time Series FX (Daily)'][date]['4. close']
                ) : (
                  <p className="font-thin text-xs">No data</p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultTable;
