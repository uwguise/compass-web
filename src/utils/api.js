/* eslint max-len: 0 */

const API_URL = 'https://api.intrinio.com'

export function get(url) {
  return fetch(`${API_URL}/${url}`, {
    headers: {
      Authorization: 'Basic MDlhMmFjM2NlOWFlYzliYjAwNDkyOWMyMDJjNzViYTM6OGEyNWVkMGE5ZmQzMDMwNDg3MGRiZWY5ZDc0M2M0OWI=',
    },
  })
}
