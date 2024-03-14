import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { eurToUsd } from '../devDataExchangeRateDaily';

function ResultTable() {
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Rate</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>2024-03-14</TableCell>
            <TableCell>
              {eurToUsd['Time Series FX (Daily)']['2024-03-14']['4. close']}
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>2024-03-13</TableCell>
            <TableCell>
              {eurToUsd['Time Series FX (Daily)']['2024-03-13']['4. close']}
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>2024-03-12</TableCell>
            <TableCell>
              {eurToUsd['Time Series FX (Daily)']['2024-03-12']['4. close']}
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>2024-03-11</TableCell>
            <TableCell>
              {eurToUsd['Time Series FX (Daily)']['2024-03-11']['4. close']}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ResultTable;
