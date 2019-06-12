import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import moment from 'moment';
import './Calendar.scss';

function Calendar() {
  return (
    <div className="Calendar">
      <CalendarHeader />
      <CalendarBody />
    </div>
  )
}

function CalendarHeader() {
  return (
    <div className="CalendarHeader">
      <button>
        <MdChevronLeft />
      </button>
      <span className="title">JUNE 2019</span>
      <button>
        <MdChevronRight />
      </button>
    </div>
  )
}

function CalendarBody() {

  function generate() {
    const today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day');
              return (
                <div className="box" key={i}>
                  <span className="txt">{current.format('D')}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
    return calendar;

  }
  return (
    <div className="CalendarBody">
      <div className="row">
        <div className="box">
          <span className="txt">S</span>
        </div>
        <div className="box">
          <span className="txt">M</span>
        </div>
        <div className="box">
          <span className="txt">T</span>
        </div>
        <div className="box">
          <span className="txt">W</span>
        </div>
        <div className="box">
          <span className="txt">T</span>
        </div>
        <div className="box">
          <span className="txt">F</span>
        </div>
        <div className="box">
          <span className="txt">S</span>
        </div>
      </div>
      {generate()}
    </div>
  )
}

export default Calendar;