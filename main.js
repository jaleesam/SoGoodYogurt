const nav = document.querySelector('#navvie');
const navTop = nav.offsetTop;

function stickyNavigation() { 
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
  }
  
  window.addEventListener('scroll', stickyNavigation);