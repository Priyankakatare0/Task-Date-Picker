// pages/index.jsx
import { useState } from 'react';
// import '../styles/globals.css';
const DatePicker = () => {
  const [recurrence, setRecurrence] = useState('Daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDates, setSelectedDates] = useState([]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Date Picker</h1>
      <RecurrenceOptions recurrence={recurrence} setRecurrence={setRecurrence} />
      <DateRangePicker 
        startDate={startDate} 
        setStartDate={setStartDate} 
        endDate={endDate} 
        setEndDate={setEndDate} 
      />
      <PreviewCalendar 
        recurrence={recurrence} 
        startDate={startDate} 
        endDate={endDate} 
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
      />
    </div>
  );
};

const RecurrenceOptions = ({ recurrence, setRecurrence }) => {
  const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="mb-4">
      <h2 className="font-semibold text-lg mb-2 text-gray-600">Recurrence Options</h2>
      <select
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div className="mb-4">
      <h2 className="font-semibold text-lg mb-2 text-gray-600">Select Date Range</h2>
      <div className="flex space-x-4">
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
};

const PreviewCalendar = ({ selectedDates }) => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-lg mb-2 text-gray-600">Selected Dates Preview</h2>
      <div className="bg-gray-100 p-4 rounded-md h-32 overflow-y-auto border border-gray-300">
        {selectedDates.length > 0 ? (
          selectedDates.map((date, index) => (
            <div key={index} className="p-1 border-b border-gray-300 last:border-0 text-gray-700">
              {date}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No dates selected</p>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return <DatePicker />;
}
