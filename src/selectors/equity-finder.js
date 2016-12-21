import * as I from 'immutable'

export function getSelectedCompany(state) {
  const selectedCompany = state.equityFinder.get('selectedCompany')
  const company = state.relations.getIn(['companies', selectedCompany], I.Map())
  if (company.isEmpty()) {
    return company
  }
  return company.set('logoUrl', `http://logo.clearbit.com/${company.get('company_url')}`)
}
