export const TickerActions = createActions('TickerActions', [
  'FETCH',
  'SAVE',
])

export const CompanyActions = createActions('CompanyActions', [
  'FETCH',
  'SAVE',
])

export const EquityFinderActions = createActions('EquityFinderActions', [
  'SELECT_COMPANY',
])


function createActions(ns, actions) {
  return Object.freeze(actions.reduce((map, action) => {
    map[action] = `@@${ns}/${action}`
    return map
  }, {}))
}
