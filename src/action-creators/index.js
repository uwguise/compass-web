/* eslint max-len: 0 */
import * as ReduxActions from 'redux-actions'
import * as C from '../constants'

/** EquityFinder */
export const fetchTickers = ReduxActions.createAction(C.TickerActions.FETCH, (query) => ({ query }))
export const saveTickers = ReduxActions.createAction(C.TickerActions.SAVE, (tickers) => ({ tickers }))
export const selectCompany = ReduxActions.createAction(C.EquityFinderActions.SELECT_COMPANY, (ticker) => ({ ticker }))
export const toggleIsFetchingTickerSuggestions = ReduxActions.createAction(C.EquityFinderActions.TOGGLE_IS_FETCHING_TICKER_SUGGESTIONS)
export const toggleIsFetchingPrices = ReduxActions.createAction(C.EquityFinderActions.TOGGLE_IS_FETCHING_PRICES)

/** Relations */
export const fetchCompany = ReduxActions.createAction(C.CompanyActions.FETCH, (ticker) => ({ ticker }))
export const saveCompany = ReduxActions.createAction(C.CompanyActions.SAVE, (company) => ({ company }))
export const fetchPricesForCompany = ReduxActions.createAction(C.CompanyActions.FETCH_PRICES, (ticker) => ({ ticker }))
export const savePricesForCompany = ReduxActions.createAction(C.CompanyActions.SAVE_PRICES, (ticker, prices) => ({ ticker, prices }))
