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
    const scroll = window.pageYOffset;
    const height = document.documentElement.clientHeight;
    if(scroll > height) {
        
        window.scrollTo(0, 0);
       } 
 }



//  refs.btnToTop.addEventListener('scroll', onClickToScrollTop);

//  async function onClickToScrollTop() {


//   if(document.body.btnToTop > document.documentElement.clientHeight) {
//       window.scrollTo(0, 0);
//       refs.btnToTop.classList.remove('is-hidden');
//      } else {
//       refs.btnToTop.classList.add('is-hidden');
//      }

// }