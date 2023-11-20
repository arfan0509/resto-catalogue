import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`, // Perubahan untuk mendapatkan daftar restoran
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`, // Perubahan untuk mendapatkan detail restoran
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`, // Perubahan untuk pencarian restoran
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`, // Perubahan untuk menambahkan review pada restoran
  IMAGE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/${pictureId}`, // Perubahan untuk mendapatkan gambar restoran
};

export default API_ENDPOINT;
