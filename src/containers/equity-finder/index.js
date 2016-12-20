import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const EquityFinder = ({
}) => {
  return (
    <h1>Sup Ladies</h1>
  );
};

EquityFinder.propTypes = {
  company: PropTypes.object,
  stockPrice: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  finalThread: PropTypes.string,
};

export default connect(
  () => {
    return {
      company: {},
      stockPrice: {},
    };
  },
)(EquityFinder);
