import * as I from 'immutable'
import * as ReduxActions from 'redux-actions'
import * as C from '../constants'

export default ReduxActions.handleActions({
  [C.CompanyActions.SAVE]: (state, action) => {
    const { company } = action.payload
    return state.setIn(['companies', company.ticker], I.fromJS(company))
  },
}, I.Map())
