import React, { PropTypes } from 'react'
import * as I from 'immutable';
import { connect } from 'react-redux'
import * as ActionCreators from '../../action-creators';

import Searchbar from '../../components/searchbar'

const EquityFinder = ({
  dispatch,
  tickerSuggestions,
  fetchingTickerSuggestions,
}) => {
  return (
    <Searchbar
      isSearching={fetchingTickerSuggestions}
      suggestions={tickerSuggestions}
      onSearch={(...args) => console.log('search', ...args)}
      onUpdate={(query) => dispatch(ActionCreators.fetchTickers(query))}/>
  );
};

EquityFinder.propTypes = {
  company: PropTypes.object,
  stockPrice: PropTypes.object,
  tickerSuggestions: PropTypes.instanceOf(I.List).isRequired,
  fetchingTickerSuggestions: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  (state) => {
    return {
      company: {},
      stockPrice: {},
      tickerSuggestions: state.equityFinder.get('tickerSuggestions', I.List()),
      fetchingTickerSuggestions: state.equityFinder.get('fetchingTickerSuggestions', false),
    };
  },
)(EquityFinder);
