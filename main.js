//FOR MODAL 
var  modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal(){
  modal.classList.toggle("show-modal");
}

function windowOnClick(event){
  if (event.target === modal) {
    toggleModal();
  }
}
trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
	

//FOR STICKY NAVBAR
// const nav = document.querySelector('#navvie');
// const navTop = nav.offsetTop;

// function stickyNavigation() { 
//     console.log('navTop = ' + navTop);
//     console.log('scrollY = ' + window.scrollY);
//   }
  
//   window.addEventListener('scroll', stickyNavigation);

