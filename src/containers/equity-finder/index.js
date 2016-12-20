import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const EquityFinder = ({
  company,
  stockPrice,
  dispatch,
}) => {
  console.log(company);
  console.log(stockPrice);
  console.log(dispatch);
  return (
    <h1>Sup Ladies</h1>
    // <
    //   subreddit={subreddit}
    //   filter={filter}
    //   threads={threads}
    //   shouldShowImagePreview={shouldShowImagePreview(expandedImagePreviews)}
    //   toggleImagePreview={toggleImagePreview(dispatch, subreddit)}
    //   fetchThreadsOnNextPage={fetchThreadsOnNextPage(dispatch, subreddit, filter, finalThread)}/>
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
