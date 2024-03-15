import { Dispatch, SetStateAction, createContext } from 'react';
import { Dayjs } from 'dayjs';

interface AppContextProp {
  currencyCode: string;
  setCurrencyCode: Dispatch<SetStateAction<string>>;
  startDate: Dayjs | null;
  setStartDate: Dispatch<SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: Dispatch<SetStateAction<Dayjs | null>>;
}

export const AppContext = createContext<AppContextProp>({
  currencyCode: '',
  setCurrencyCode: () => {},
  startDate: null,
  setStartDate: () => {},
  endDate: null,
  setEndDate: () => {},
});
