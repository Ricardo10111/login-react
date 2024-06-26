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

export function createUser(data) {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export function getUsers() {
  return fetch(`${API_URL}/users/id`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
