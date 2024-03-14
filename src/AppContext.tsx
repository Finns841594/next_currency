import { Dispatch, SetStateAction, createContext } from 'react';

interface AppContextProp {
  currencyCode: string;
  setCurrencyCode: Dispatch<SetStateAction<string>>;
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
}

export const AppContext = createContext<AppContextProp>({
  currencyCode: '',
  setCurrencyCode: () => {},
  startDate: null,
  setStartDate: () => {},
  endDate: null,
  setEndDate: () => {},
});
