import * as C from '../constants'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as API from '../utils/api'
import * as ActionCreators from '../action-creators'
import moment from 'moment'

export default function* root() {
  yield [
    takeEvery(C.TickerActions.FETCH, fetchTickers),
    takeEvery(C.CompanyActions.FETCH, fetchCompany),
    takeEvery(C.CompanyActions.FETCH_PRICES, fetchPricesForCompany),
  ]
}

function* fetchTickers(action) {
  const { query } = action.payload
  yield put(ActionCreators.toggleIsFetchingTickerSuggestions())
  try {
    const response = yield call(API.get, `companies?query=${query}&page_size=20`)
    const { data } = yield response.json()
    yield put(ActionCreators.saveTickers(data.map(ticker => ticker.ticker)))
  } finally {
    yield put(ActionCreators.toggleIsFetchingTickerSuggestions())
  }
}

function* fetchCompany(action) {
  const { ticker } = action.payload
  const response = yield call(API.get, `companies?identifier=${ticker}`)
  const data = yield response.json()
  yield put(ActionCreators.saveCompany(data))
}

function* fetchPricesForCompany(action) {
  const { ticker } = action.payload
  yield put(ActionCreators.toggleIsFetchingPrices())
  try {
    const startDate = moment().subtract(1, 'years').format('YYYY-MM-DD')
    const URL = `prices?identifier=${ticker}&frequency=daily&start_date=${startDate}`
    const response = yield call(API.get, URL)
    const { data: prices } = yield response.json()
    yield put(ActionCreators.savePricesForCompany(ticker, prices))
  } finally {
    yield put(ActionCreators.toggleIsFetchingPrices())
  }
}
