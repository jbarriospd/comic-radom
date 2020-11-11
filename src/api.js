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

/* 
function getCurrentComic() {
  return fetch(`${url}/info.0.json`)
    .then(res => res.json())
    .then(res => res.data);
}

function getRandomComic(currentComic) {
  return Math.floor(Math.random() * (currentComic - 0 + 1) + 0);
}
 */
export default {
  getComic
};
