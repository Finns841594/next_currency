'use client';
import { NextUIProvider } from '@nextui-org/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppContext } from './AppContext';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export function Providers({ children }: { children: React.ReactNode }) {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [currencyCode, setCurrencyCode] = useState<string>('SEK');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppContext.Provider
        value={{
          startDate,
          setStartDate,
          endDate,
          setEndDate,
          currencyCode,
          setCurrencyCode,
        }}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </AppContext.Provider>
    </LocalizationProvider>
  );
}
