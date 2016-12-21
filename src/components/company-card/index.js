import React, { PropTypes } from 'react'
import * as I from 'immutable'

const CompanyCard = ({
  company,
}) => {
  return (
    <div>{company.get('name')}</div>
  )
}

CompanyCard.propTypes = {
  company: PropTypes.instanceOf(I.Map).isRequired,
}

export default CompanyCard
