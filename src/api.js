const url = "http://xkcd.com";
const currentComic = 2383;


function getComic() {
  return fetch(`${url}/${randomComic}/info.0.json`)
    .then(res => res.json())
    .then(res => res.data);
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
