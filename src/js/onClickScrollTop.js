import { refs } from './refs';


window.addEventListener('scroll', onVisibleBtn);
refs.btnToTop.addEventListener('click', onClickScrollTop);


function onVisibleBtn () {
    const scroll = window.pageYOffset;
    const height = document.documentElement.clientHeight;
    if(scroll > height) {
        refs.btnToTop.classList.remove('is-hidden');
    } if (scroll < height) {
        refs.btnToTop.classList.add('is-hidden');
    }
    };

  function onClickScrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

 }
