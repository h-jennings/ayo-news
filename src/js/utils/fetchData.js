export default async function fetchData(fnName) {
  return fetch(`/.netlify/functions/${fnName}`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
}
