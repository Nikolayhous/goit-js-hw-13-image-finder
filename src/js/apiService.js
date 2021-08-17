export default apiService;

function apiService() {

    const API_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=dog&page=1&per_page=12&key=22607866-39f004f28173cdb15c56bee0e';
     return  fetch(`${API_URL}`).then(response => response.json());
}