import { refs } from './refs';
import apiService from './apiService';
import itemCardsImage from '../templates/image-card.hbs'


const newApiService = new apiService()

refs.searchForm.addEventListener('submit', onSearchImages);
refs.btnLoad.addEventListener('click', onLoadMore);


function onSearchImages(e) {
    e.preventDefault();
    newApiService.query = e.currentTarget.elements.query.value;
    newApiService.resetPage();
    newApiService.fetchArticles().then(appendArticlesMarkup);
    
};

function onLoadMore() {
    newApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(hits) {
    refs.galleryList.insertAdjacentHTML('beforeend', itemCardsImage(hits));
}


function onInputClear() {
    refs.galleryList.innerHTML = ''; 
}


function FetchError(Error) {
    Error;
  }




