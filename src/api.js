import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/jbarriospd/comic-random`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
function getComic(idComic) {
  return apiClient.get(`/comics/${idComic}`);
}

function getRandomComic() {
  return Math.floor(Math.random() * (15 - 1 + 1) + 1);
}

export { getComic, getRandomComic };
