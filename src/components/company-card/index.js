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
      <div className={Styles.infoWrapper}>
        <div className={Styles.generalInfo}>
          <div className={Styles.logo} style={logoStyle}/>
          <div>
            <p className={Styles.ceoLabel}>CEO:</p>
            <p className={Styles.ceoData}>{company.get('ceo')}</p>
          </div>
          <div>
            <p className={Styles.employeesLabel}>Employees:</p>
            <p className={Styles.employeesData}>{company.get('employees')}</p>
          </div>
          <div>
            <p className={Styles.sectorLabel}>Sector:</p>
            <p className={Styles.sectorData}>{company.get('sector')}</p>
          </div>
          <a className={Styles.companyWebsite} href={company.get('company_url')}>
            {company.get('company_url')}
          </a>
        </div>
      </div>
      <div className={Styles.companyDescription}>
        <h2 className={Styles.name}>{company.get('name')}</h2>
        <div className={Styles.description}>{company.get('long_description')}</div>
      </div>
    </div>
  )
}

CompanyCard.propTypes = {
  company: PropTypes.instanceOf(I.Map).isRequired,
}

export default CompanyCard
