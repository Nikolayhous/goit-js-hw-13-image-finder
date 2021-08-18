export default class apiService {
    constructor() {
this.searchQuery = '';
this.page = 1;
this.API_KEY = 'key=22607866-39f004f28173cdb15c56bee0e';
    }

    fetchArticles() {
         
        const API_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&${this.API_KEY}`;
        return fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            this.incrementPage()

            return data.hits
        });
    }

    incrementPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1;
    }

get query() {
    return this.searchQuery;
}

set query(newQuery) {
    this.searchQuery = newQuery;
}

}





