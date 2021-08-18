import { refs } from './refs';
import apiService from './apiService';
import itemCardsImage from '../templates/image-card.hbs'
import LoadMoreBtn from './load-more-btn';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const newApiService = new apiService();


refs.searchForm.addEventListener('submit', onSearchImages);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);


function onSearchImages(e) {
    e.preventDefault();
   
newApiService.query = e.currentTarget.elements.query.value;
if(newApiService.query === '') {
    loadMoreBtn.show();
    loadMoreBtn.disable();
    return error({
        text: 'Enter data to search for pictures. For example <cat>'
    });  
}
    loadMoreBtn.show();
    newApiService.resetPage();
    clearInput()
    fetchArticles();
};


function fetchArticles() {
    loadMoreBtn.disable();
       newApiService.fetchArticles().then(hits => {
        appendArticlesMarkup(hits);
        loadMoreBtn.enable();
    });
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




