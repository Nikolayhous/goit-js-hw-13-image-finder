import getPictures from '../services//fetch-api';
import { refs } from './refs';
import itemCardsImage from '../templates/image-card.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';



const state = {
    page: 1,
    value: ''
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

refs.loadMoreBtn.style.visibility = 'hidden';

refs.searchForm.addEventListener('submit', onSearchPictures);
refs.loadMoreBtn.addEventListener('click', onLoaderBtn);
refs.galleryList.addEventListener('click', onOpenBasicLightbox);


async function onSearchPictures(e) {
  e.preventDefault();
  refs.loadMoreBtn.style.visibility = 'hidden';

  
if(!e.currentTarget.elements.query.value.trim()) {
    clearInput()
    refs.loadMoreBtn.style.visibility = 'visible';
    return error({
        text: 'Введите коректные данные для поиска картинок. Например, <кот>',
        delay: 2000,
    });  
}

  try {
    state.value = e.currentTarget.elements.query.value;
    const pictures = await getPictures(state.value, state.page);
    // refs.galleryList.insertAdjacentHTML('beforeend', itemCardsImage(pictures));//как вставлять рaзметку через InnerHTML
    refs.galleryList.innerHTML = itemCardsImage(pictures); 
    if (pictures.length > 11){
        refs.loadMoreBtn.style.visibility = 'visible';
        refs.input.value = '';
            } 

            else if(!pictures.length) {
         alert({
            text: 'Введите коректные данные для поиска картинок. Например, <кот>',
            delay: 2000
        });  
    }

} catch (error) {
      console.log(error.message);
  }
}


function clearInput() {
    refs.galleryList.innerHTML = ''; 
}


// ==Scroll==

async function onLoaderBtn() {
    state.page += 1;
    const pictures = await getPictures(state.value, state.page);
    refs.galleryList.insertAdjacentHTML('beforeend', itemCardsImage(pictures))
    if(state.page === 2) {     
            const observer = new IntersectionObserver(onLoaderBtn, options);
            observer.observe(refs.loadMoreBtn)
    } 
}

// ==basicLightbox==

function onOpenBasicLightbox(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG') {
   return;
    } 
        
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `)
    instance.show();
    window.addEventListener('keydown', e => {
        if(e.code === 'Escape') {
            instance.close();
        }
    });
    }

