import * as I from 'immutable'
import * as Reselect from 'reselect'

function getSelectedCompanyTicker(state) {
  return state.equityFinder.get('selectedCompany')
}

function getAllCompanies(state) {
  return state.relations.get('companies', I.Map())
}

export const getSelectedCompany = Reselect.createSelector(
  getSelectedCompanyTicker,
  getAllCompanies,
  (ticker, allCompanies) => {
    if (! allCompanies.has(ticker)) return I.Map()
    const company = allCompanies.get(ticker)
    return company.set('logoUrl', `http://logo.clearbit.com/${company.get('company_url')}`)
  }
)

function getAllPrices(state) {
  return state.relations.get('prices', I.Map())
}

export const getSelectedCompanyPrices = Reselect.createSelector(
  getSelectedCompanyTicker,
  getAllPrices,
  (ticker, allPrices) => {
    if (! allPrices.has(ticker)) return []
    return allPrices
      .get(ticker)
      .toList()
      .sortBy((price) => Date.parse(price.get('date')))
      .toJS()
  }
)
