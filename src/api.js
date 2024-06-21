const API_URL = 'https://backend-challenge-api-3k5h.onrender.com'

export function getSubmit(data) {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}