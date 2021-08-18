export default class apiService {
    constructor() {
this.searchQuery = '';
this.page = 1;
    }

    fetchArticles() {
         
        const API_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=22607866-39f004f28173cdb15c56bee0e`;
        return fetch(API_URL)
        .then(response => response.json())
        .then(({hits}) => {
            this.incrementPage()

            return hits
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





