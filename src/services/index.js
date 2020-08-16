import axios from 'axios';
// const axios = require('axios');

const BASE_URL = 'http://localhost:4444';

function getAllAuthors() {
    return axios.get(`${BASE_URL}/authors`).then(res => res.data);
}
function addAuthor(author) {
    return axios.post(`${BASE_URL}/authors`, author).then(res => res.data);
}

// getAllAuthors().then(res => {
//     console.log(res);
// });

export { getAllAuthors, addAuthor }
