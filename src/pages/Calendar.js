// import React from 'react';
import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import Header from '../components/Header.js'; 
import './Calendar.css';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const formatMonth = () => {
    const dateFormat = 'MMMM yyyy'; // Format: Month Year
    return format(currentMonth, dateFormat);
  };  

  const renderDaysOfWeek = () => {
    const dateFormat = 'eee'; // or 'EEEE' for the full name of the day
    const days = [];
  
    let startDate = startOfWeek(currentMonth);
  
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
  
    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
  
    const dateFormat = 'd';
    const rows = [];
  
    let days = [];
    let day = startDate;
    let formattedDate = "";
  
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const dayKey = format(day, 'yyyy-MM-dd');
        days.push(
          <div
            className={`column cell ${
              !isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, new Date()) ? "selected" : ""
            }`}
            key={day}
          >
            {/* <span className="number">{isSameMonth(day, monthStart) ? formattedDate : ""}</span> */}
            <span className="bg">{isSameMonth(day, monthStart) ? formattedDate : ""}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    // Handle the click event on a day cell
  };
  
  return (
    <div className="calendar-page">
    <Header title="Calendar" />
    <div className="month-header">{formatMonth()}</div> {/* Month Header */}
    <div className="calendar">
      {renderDaysOfWeek()}
      {renderCells()}
      <div className="calendar-navigation">
        <button onClick={prevMonth}>{"<"}</button>
        <button onClick={nextMonth}>{">"}</button>
      </div>
    </div>
  </div>
  );
};

export default Calendar;