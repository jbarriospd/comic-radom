import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/jbarriospd/comic-random`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getUserOne() {
    return apiClient.get('/users/1')
  }
}

