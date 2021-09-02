import { refs } from './refs';
import apiService from './apiService';
import itemCardsImage from '../templates/image-card.hbs'
import LoadMoreBtn from './load-more-btn';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const newApiService = new apiService();


refs.searchForm.addEventListener('submit', onSearchImages);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);
loadMoreBtn.refs.button.addEventListener('click', scroll);
refs.galleryList.addEventListener('click', onClickBasicLightbox);


function onSearchImages(e) {
    e.preventDefault();
   
newApiService.query = e.currentTarget.elements.query.value;

if(newApiService.query === '') {
    loadMoreBtn.show();
    loadMoreBtn.disable();
    return error({
        text: 'Enter data to search for pictures. For example <cat>',
        delay: 2000,
    });  
} 

loadMoreBtn.show();
loadMoreBtn.disable();
clearInput()
fetchArticles()

refs.input.value = '';
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

function scroll() {
    try {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          block: 'end',
          behavior: 'smooth',
        });
      }, 500);
      fetchImg();
    } catch (error) {
    }
}


function onClickBasicLightbox(e) {
    e.preventDefault();
    if(e.currentTarget.nodeName === 'IMG') {
   return 
    } else {
        
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `)
    instance.show();
    }
    };
