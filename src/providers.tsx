'use client';
import { NextUIProvider } from '@nextui-org/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppContext } from './AppContext';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </NextUIProvider>
      </AppContext.Provider>
    </LocalizationProvider>
  );
}
