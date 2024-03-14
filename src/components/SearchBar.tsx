import React, { useContext } from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { currencies } from './../data';
import { AppContext } from '@/AppContext';

function SearchBar() {
  const { currencyCode, setCurrencyCode } = useContext(AppContext);
  return (
    <div>
      <Autocomplete label="Type a currency code" className="max-w-xs">
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
