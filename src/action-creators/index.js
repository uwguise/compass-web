/* eslint max-len: 0 */
import * as ReduxActions from 'redux-actions'
import * as C from '../constants'

export const fetchTickers = ReduxActions.createAction(C.TickerActions.FETCH, (query) => ({ query }))
export const saveTickers = ReduxActions.createAction(C.TickerActions.SAVE, (tickers) => ({ tickers }))

export const fetchCompany = ReduxActions.createAction(C.CompanyActions.FETCH, (ticker) => ({ ticker }))
export const saveCompany = ReduxActions.createAction(C.CompanyActions.SAVE, (company) => ({ company }))

export const selectCompany = ReduxActions.createAction(C.EquityFinderActions.SELECT_COMPANY, (ticker) => ({ ticker }))
