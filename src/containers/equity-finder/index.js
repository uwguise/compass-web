import React, { PropTypes } from 'react'
import * as I from 'immutable'
import { connect } from 'react-redux'
import * as ActionCreators from '../../action-creators'
import { getSelectedCompany } from '../../selectors/equity-finder'
// import Styles from './styles.scss'

import Searchbar from '../../components/searchbar'
import CompanyCard from '../../components/company-card'

const EquityFinder = ({
  dispatch,
  company,
  tickerSuggestions,
  fetchingTickerSuggestions,
}) => {
  return (
    <div className="test">
      <Searchbar
        isSearching={fetchingTickerSuggestions}
        suggestions={tickerSuggestions}
        onSearch={(ticker) => {
          dispatch(ActionCreators.fetchCompany(ticker))
          dispatch(ActionCreators.selectCompany(ticker))
        }}
        onUpdate={(query) => dispatch(ActionCreators.fetchTickers(query))}/>

      <CompanyCard
        company={company}/>
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
      tickerSuggestions: state.equityFinder.get('tickerSuggestions', I.List()),
      fetchingTickerSuggestions: state.equityFinder.get('fetchingTickerSuggestions', false),
    }
  },
)(EquityFinder)
