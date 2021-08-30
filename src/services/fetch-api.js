import axios from 'axios';

const API_KEY = '22607866-39f004f28173cdb15c56bee0e';
axios.defaults.baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

async function getPictures(query, page) {
  const {
    data: { hits },
  } = await axios.get(`&q=${query}&page=${page}&per_page=12&key=${API_KEY}
     `);
  return hits;
}

export default getPictures;
