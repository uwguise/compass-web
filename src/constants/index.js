export const TickerActions = createActions('TickerActions', [
  'FETCH',
  'SAVE',
])

function createActions(ns, actions) {
  return Object.freeze(actions.reduce((map, action) => {
    map[action] = `@@${ns}/${action}`
    return map
  }, {}))
}
