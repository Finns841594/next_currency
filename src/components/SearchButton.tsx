import { AppContext } from '@/AppContext';
import { fetchExchangeRate } from '@/fetchingTools';
import { cacheData } from '@/utils';
import { Button } from '@nextui-org/react';
import React, { useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const SearchButton = () => {
  const { currencyCode, startDate, endDate } = useContext(AppContext);

  const handleSearch = () => {
    // Check the cache
    const data = fetchExchangeRate(currencyCode);
    // cacheData(data, `${currencyCode}_${dayjs().format('YYYY-MM-DD')}`);
  };
  return <Button onClick={handleSearch}>Search Rate</Button>;
};

export default SearchButton;
