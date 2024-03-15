import { AppContext } from '@/AppContext';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext } from 'react';

const customStyle = {
  '& .MuiInputBase-root': {
    backgroundColor: '#F5F5F5',
    borderRadius: '10px',
    ':hover:': { backgroundColor: '#E4E4E7' },
  },
};

const DatePickers = () => {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(AppContext);

  return (
    <>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={setStartDate}
        sx={customStyle}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={newValue => {
          setEndDate(newValue);
        }}
        sx={customStyle}
      />
    </>
  );
};

export default DatePickers;
