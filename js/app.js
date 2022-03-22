const menu = document.querySelector('.menu-group');
const img = document.querySelector('.menu-group img');
const navbar = document.querySelector('nav #navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  let a  = navbar.classList.toggle('active');
  if(a){
    img.src="./img/Group.png"
  }else{
    img.src="./img/Group x.svg"
  }
}

//  loader 


window.addEventListener('DOMContentLoaded' , ()=>{
  const loader  =  document.querySelector('.loader');
  setTimeout(()=>{
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none'
    }, 1000);
  }, 2500)
})