export const TickerActions = createActions('TickerActions', [
  'FETCH',
  'SAVE',
])

export const CompanyActions = createActions('CompanyActions', [
  'FETCH',
  'SAVE',
  'FETCH_PRICES',
  'SAVE_PRICES',
])

export const EquityFinderActions = createActions('EquityFinderActions', [
  'SELECT_COMPANY',
  'TOGGLE_IS_FETCHING_PRICES',
  'TOGGLE_IS_FETCHING_TICKER_SUGGESTIONS',
])


function createActions(ns, actions) {
  return Object.freeze(actions.reduce((map, action) => {
    map[action] = `@@${ns}/${action}`
    return map
  }, {}))
}
