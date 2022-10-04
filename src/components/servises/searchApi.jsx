import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '29156299-9f5b3ae85970160cb7d7e54e9';

export const pixabayApi = async (search, page = 1) => {
  const respons = await axios.get(
    `?key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&q=${search}&safesearch=true&per_page=8`
  );
  return await respons.data;
};
