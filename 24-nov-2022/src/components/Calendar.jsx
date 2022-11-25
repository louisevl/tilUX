import { useState } from 'react';
import Calendar from 'react-calendar';

function App2() {
  const [date, setDate] = useState(new Date())


  return (
      <div className="app2">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} id="kalender" />
        </div>
      </div>
  );
}

export default Calendar;