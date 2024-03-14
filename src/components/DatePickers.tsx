import { AppContext } from '@/AppContext';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext } from 'react';
import dayjs from 'dayjs';

const DatePickers = () => {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(AppContext);

  return (
    <>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={newValue => {
          setStartDate(newValue);
          // console.log(dayjs(newValue).format('YYYY-MM-DD '));
        }}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={newValue => {
          setEndDate(newValue);
          // console.log(dayjs(newValue).format('YYYY-MM-DD '));
        }}
      />
    </>
  );
};

export default DatePickers;
