import { refs } from './refs';
import apiService from './apiService';
import itemCardsImage from '../templates/image-card.hbs'

import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


const newApiService = new apiService()

refs.searchForm.addEventListener('submit', onSearchImages);
refs.btnLoad.addEventListener('click', onLoadMore);


function onSearchImages(e) {
    e.preventDefault();
    // clearInput()
newApiService.query = e.currentTarget.elements.query.value;
if(newApiService.query === '') {
    return error({
        text: 'Enter data to search for pictures. For example <cat>'
    }); 
}

    newApiService.resetPage();
    newApiService.fetchArticles().then(hits => {
        clearInput()
        appendArticlesMarkup(hits) 
    });
    
};

function onLoadMore() {
    newApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(hits) {
    refs.galleryList.insertAdjacentHTML('beforeend', itemCardsImage(hits));
}


function clearInput() {
    refs.galleryList.innerHTML = ''; 
}


function FetchError(Error) {
    Error;
  }




