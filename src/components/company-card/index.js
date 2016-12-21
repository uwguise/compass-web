import React, { PropTypes } from 'react'

const CompanyCard = ({
  company,
}) => {
  console.log(company)
  return (
    <div>My Company</div>
  )
}

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired,
}

export default CompanyCard
