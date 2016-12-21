import React, { PropTypes } from 'react'
import * as I from 'immutable'
import { connect } from 'react-redux'
import * as ActionCreators from '../../action-creators'
import { getSelectedCompany } from '../../selectors/equity-finder'
import Styles from './styles.scss'

import Searchbar from '../../components/searchbar'
import CompanyCard from '../../components/company-card'
import PriceGraph from '../../components/price-graph'

const priceData = [
      { date: '2016-12-1', adj_close: 4000, adj_volume: 2400 },
      { date: '2016-12-2', adj_close: 3000, adj_volume: 1398 },
      { date: '2016-12-3', adj_close: 2000, adj_volume: 9800 },
      { date: '2016-12-4', adj_close: 2780, adj_volume: 3908 },
      { date: '2016-12-5', adj_close: 1890, adj_volume: 4800 },
      { date: '2016-12-6', adj_close: 2390, adj_volume: 3800 },
      { date: '2016-12-7', adj_close: 3490, adj_volume: 4300 },
]

const EquityFinder = ({
  dispatch,
  company,
  tickerSuggestions,
  fetchingTickerSuggestions,
}) => {
  let $company
  if (company.isEmpty()) {
    $company = <h1 className="tc">Please select a company</h1>
  } else {
    $company = <CompanyCard company={company}/>
  }
  return (
    <div className={Styles.equityFinder}>
      <Searchbar
        isSearching={fetchingTickerSuggestions}
        suggestions={tickerSuggestions}
        onSearch={(ticker) => {
          dispatch(ActionCreators.fetchCompany(ticker))
          dispatch(ActionCreators.selectCompany(ticker))
        }}
        onUpdate={(query) => dispatch(ActionCreators.fetchTickers(query))}/>
      <PriceGraph priceData={priceData}/>
      {$company}
    </div>
  )
}

EquityFinder.propTypes = {
  company: PropTypes.instanceOf(I.Map).isRequired,
  stockPrice: PropTypes.object,
  tickerSuggestions: PropTypes.instanceOf(I.List).isRequired,
  fetchingTickerSuggestions: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(
  (state) => {
    return {
      company: getSelectedCompany(state),
      // priceData: getSelectedCompanyPrices(state),
      tickerSuggestions: state.equityFinder.get('tickerSuggestions', I.List()),
      fetchingTickerSuggestions: state.equityFinder.get('fetchingTickerSuggestions', false),
    }
  },
)(EquityFinder)
