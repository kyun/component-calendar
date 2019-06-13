import React from 'react';
import Calendar from 'components/Calendar';
import CalendarContainer from 'containers/CalendarContainer';

const App: React.FC = (props: any) => {
  console.log(props);
  return (
    <div className="App">
      <CalendarContainer />
    </div>
  );
}

export default App;
