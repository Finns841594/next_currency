import React, { Key, useContext } from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { AppContext } from '@/AppContext';
import { currencies } from '@/data';

const SearchBar = () => {
  const { currencyCode, setCurrencyCode } = useContext(AppContext);

  const onselectionchange = (value: Key) => {
    if (typeof value === 'string') {
      setCurrencyCode(value);
    }
  };
  return (
    <div>
      <Autocomplete
        label="Type or select a currency code"
        className="max-w-s"
        defaultSelectedKey={currencyCode}
        onSelectionChange={onselectionchange}
        // for sovling a terminal error
        onKeyDown={(e: any) => e.continuePropagation()}
      >
        {currencies.map(currency => (
          <AutocompleteItem key={currency.code} value={currency.code}>
            {currency.code}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};

export default SearchBar;
