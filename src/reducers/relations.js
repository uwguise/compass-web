import * as I from 'immutable'
import * as ReduxActions from 'redux-actions'
import * as C from '../constants'
import * as R from 'ramda'

export default ReduxActions.handleActions({
  [C.CompanyActions.SAVE]: (state, action) => {
    const { company } = action.payload
    return state.setIn(['companies', company.ticker], I.fromJS(company))
  },

  [C.CompanyActions.SAVE_PRICES]: (state, action) => {
    const { ticker, prices } = action.payload
    return state.setIn(['prices', ticker], I.fromJS(R.indexBy(R.prop('date'), prices)))
  },
}, I.Map())
