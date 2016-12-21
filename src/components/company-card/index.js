import React, { PropTypes } from 'react'
import * as I from 'immutable'
import Styles from './styles.scss'

const CompanyCard = ({
  company,
}) => {
  const logoStyle = {
    backgroundImage: `url('${company.get('logoUrl')}')`,
  }
  return (
    <div className={Styles.companyCard + ' fade-in'}>
      <div className={Styles.logo} style={logoStyle}/>
      <h2 className={Styles.name}>{company.get('name')}</h2>
      <div className={Styles.description}>{company.get('short_description')}</div>
    </div>
  )
}

CompanyCard.propTypes = {
  company: PropTypes.instanceOf(I.Map).isRequired,
}

export default CompanyCard
