
import { createAction, handleActions } from 'redux-actions';
import moment, { Moment as MomentTypes } from 'moment';
import produce from "immer"

const DATE_CHANGE = 'calendar/DATE_CHANGE';
export const changeDate = createAction(DATE_CHANGE);


export interface CalendarState {
  date: MomentTypes
}
const initialState: CalendarState = {
  date: moment(),
}


export default handleActions({
  [DATE_CHANGE]: (state, action: any) => {
    console.log(action);
    return produce(state, draft => {
      draft.date = action.payload
    })
  }
}, initialState)