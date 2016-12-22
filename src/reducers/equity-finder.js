import * as I from 'immutable'
import * as ReduxActions from 'redux-actions'
import * as C from '../constants'
import * as Ramda from 'ramda'

export default ReduxActions.handleActions({
  [C.TickerActions.TOGGLE_IS_FETCHING_TICKER_SUGGESTIONS]: (state) => {
    return state.update('isFetchingTickerSuggestions', Ramda.not)
  },

  [C.TickerActions.TOGGLE_IS_FETCHING_PRICES]: (state) => {
    return state.update('isFetchingPrices', Ramda.not)
  },

  [C.TickerActions.SAVE]: (state, action) => {
    const { tickers } = action.payload
    return state.set('tickerSuggestions', I.fromJS(tickers))
  },

  [C.EquityFinderActions.SELECT_COMPANY]: (state, action) => {
    const { ticker } = action.payload
    return state.set('selectedCompany', ticker)
  },
}, I.Map())
