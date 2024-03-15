import React, { Key, useContext } from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { currencies } from './../data';
import { AppContext } from '@/AppContext';

function SearchBar() {
  const { currencyCode, setCurrencyCode } = useContext(AppContext);

  const onselectionchange = (value: Key) => {
    if (typeof value === 'string') {
      setCurrencyCode(value);
    }
  };
  return (
    <div>
      <Autocomplete
        label="Type a currency code"
        className="max-w-s"
        defaultSelectedKey={currencyCode}
        onSelectionChange={onselectionchange}
      >
        {currencies.map(currency => (
          <AutocompleteItem key={currency} value={currency}>
            {currency}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}

export default SearchBar;
