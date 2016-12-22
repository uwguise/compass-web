import React, { PropTypes } from 'react'
import * as I from 'immutable'
import { connect } from 'react-redux'
import * as ActionCreators from '../../action-creators'
import * as EquityFinderSelectors from '../../selectors/equity-finder'
import Styles from './styles.scss'

import Searchbar from '../../components/searchbar'
import CompanyCard from '../../components/company-card'
import PriceGraph from '../../components/price-graph'

const EquityFinder = ({
  dispatch,
  priceData,
  company,
  tickerSuggestions,
  isFetchingTickerSuggestions,
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
        isSearching={isFetchingTickerSuggestions}
        suggestions={tickerSuggestions}
        onSearch={(ticker) => {
          dispatch(ActionCreators.fetchCompany(ticker))
          dispatch(ActionCreators.selectCompany(ticker))
          dispatch(ActionCreators.fetchPricesForCompany(ticker))
        }}
        onUpdate={(query) => dispatch(ActionCreators.fetchTickers(query))}/>
      <PriceGraph priceData={priceData}/>
      {$company}
    </div>
  )
}

EquityFinder.propTypes = {
  company: PropTypes.instanceOf(I.Map).isRequired,
  priceData: PropTypes.arrayOf(PropTypes.object).isRequired,
  stockPrice: PropTypes.object,
  tickerSuggestions: PropTypes.instanceOf(I.List).isRequired,
  isFetchingTickerSuggestions: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(
  (state) => {
    return {
      company: EquityFinderSelectors.getSelectedCompany(state),
      priceData: EquityFinderSelectors.getSelectedCompanyPrices(state),
      tickerSuggestions: state.equityFinder.get('tickerSuggestions', I.List()),
      isFetchingTickerSuggestions: state.equityFinder.get('isFetchingTickerSuggestions', false),
    }
  },
)(EquityFinder)
