import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import moment, { Moment as MomentTypes } from "moment";

import './Calendar.scss';

interface Props {
  date: MomentTypes
  changeDate: Function
}
function Calendar(props: Props) {
  console.log(props);
  return (
    <div className="Calendar">
      <Head date={props.date} changeDate={props.changeDate} />
      <Body date={props.date} changeDate={props.changeDate} />
    </div>
  )
}
function Head(props: Props) {
  return (
    <div className="Head">
      <button onClick={() => props.changeDate(props.date.clone().subtract(1, 'month'))}><MdChevronLeft /></button>
      <span className="title" onClick={() => props.changeDate(moment())}>{props.date.format('MMMM YYYY')}</span>
      <button onClick={() => props.changeDate(props.date.clone().add(1, 'month'))}><MdChevronRight /></button>
    </div>
  )
}
function Body(props: Props) {

  function generate() {
    const startWeek = props.date.clone().startOf('month').week();
    const endWeek = props.date.clone().endOf('month').week() === 1 ? 53 : props.date.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = props.date.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = props.date.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isToday = moment().format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
              let isGrayed = current.format('MM') === props.date.format('MM') ? '' : 'grayed';
              return (
                <div className={`box`} key={i} onClick={() => props.changeDate(current)}>
                  <span className={`text ${isSelected} ${isGrayed} ${isToday}`}>{current.format('D')}</span>
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
    <div className="Body">
      <div className="row">
        <div className="box"><span className="text">SUN</span></div>
        <div className="box"><span className="text">MON</span></div>
        <div className="box"><span className="text">TUE</span></div>
        <div className="box"><span className="text">WED</span></div>
        <div className="box"><span className="text">THU</span></div>
        <div className="box"><span className="text">FRI</span></div>
        <div className="box"><span className="text">SAT</span></div>
      </div>
      {generate()}
    </div>
  )
}

export default Calendar;