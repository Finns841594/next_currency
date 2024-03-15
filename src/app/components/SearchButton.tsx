import { AppContext } from '@/AppContext';
import { fetchExchangeRate } from '@/fetchingTools';
import { Button } from '@nextui-org/react';
import React, { useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const SearchButton = () => {
  const { currencyCode, startDate, endDate } = useContext(AppContext);
  const queryClient = useQueryClient();

  const handleSearch = () => {
    queryClient.fetchQuery({
      queryKey: [`${currencyCode}_${dayjs().format('YYYY-MM-DD')}`],
      queryFn: () => fetchExchangeRate(currencyCode),
    });
    console.log(
      'searching: ',
      `${currencyCode}_${dayjs().format('YYYY-MM-DD')}`
    );
  };

  return <Button onClick={handleSearch}>Search Rate</Button>;
};

export default SearchButton;
