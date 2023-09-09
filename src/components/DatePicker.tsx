import React from "react";

interface DatePickerProps {
  selectedStartDate: string;
  // eslint-disable-next-line no-unused-vars
  onChangeStartDate: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  dateOptions: string[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedStartDate,
  onChangeStartDate,
  dateOptions,
}) => (
  <select
    id="stat"
    value={selectedStartDate}
    onChange={onChangeStartDate}
    className="border text-sm rounded-lg block p-3 cursor-pointer"
  >
    <option value="">Select all data</option>
    {dateOptions.map((date, id) => (
      <option key={id} value={date}>
        {date}
      </option>
    ))}
  </select>
);

export default DatePicker;
