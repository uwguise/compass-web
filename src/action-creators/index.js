/* eslint max-len: 0 */
import * as ReduxActions from 'redux-actions';
import * as C from '../constants';

export const fetchTickers = ReduxActions.createAction(C.TickerActions.FETCH, (query) => ({ query }))
export const saveTickers = ReduxActions.createAction(C.TickerActions.SAVE, (tickers) => ({ tickers }))
