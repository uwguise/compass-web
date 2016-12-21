import * as C from '../constants'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as API from '../utils/api'
import * as ActionCreators from '../action-creators'

export default function* root() {
  yield [
    takeEvery(C.TickerActions.FETCH, fetchTickers),
    takeEvery(C.CompanyActions.FETCH, fetchCompany),
  ]
}

function* fetchTickers(action) {
  const { query } = action.payload
  const response = yield call(API.get, `companies?query=${query}&page_size=20`)
  const { data } = yield response.json()
  yield put(ActionCreators.saveTickers(data.map(ticker => ticker.ticker)))
}

function* fetchCompany(action) {
  const { ticker } = action.payload
  const response = yield call(API.get, `companies?identifier=${ticker}`)
  const data = yield response.json()
  yield put(ActionCreators.saveCompany(data))
}
