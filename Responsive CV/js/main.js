/*==================MENU SHOW / HIDDEN================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle= document.getElementById('nav-toggle'),
        navClose= document.getElementById('nav-close')
    
        if(navToggle){
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
            })
        }
        if(navClose){
            navClose.addEventListener('click', () => {
             navMenu.classList.remove('show-menu')
            })
        }

        /*=====================REMOVE MENU===============*/
        const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ============SKILLS==========*/
const skillsContent = document.getElementsByClassName('skills__content'),
          skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}    

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*========================SERVICES MODAL========================= */
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
            modalViews[modalClick].classList.add('active-modal')
 }

 modalBtns.forEach((modalBtn, i) => {
     modalBtn.addEventListener('click',  () => {
         modal(i)
     })
 })
 modalCloses.forEach((modalClose) => {
     modalClose.addEventListener('click', () => {
         modalViews.forEach((modalView) => {
             modalView.classList.remove('active-modal')
         })
     })
 })
 /* ====================PORTFOLIO SWIPER============================*/

 let swiper = new Swiper('.portfolio__container', {
   cssMode: true,
   loop: true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 });

 /*======================SCROLL SECTION LINK=========================*/
 const sections = document.querySelectorAll('section[id]')

 function scrollActive() {
     const scrollY = window.pageYOffset

     sections.forEach(current => {
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector(' .nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
         }else{
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
         }
     })
 }
 window.addEventListener('scroll', scrollActive)

 /* ================CHANGE BACKGROUND HEADER=================*/
 function scrollHeader (){
     const nav = document.getElementById('header')

     if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
 }
 window.addEventListener('scroll' , scrollHeader)

 /* ==================SCROLL SHOW====================*/
 function scrollUp(){
     const scrollUp = document.getElementById('scroll-up');

     if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
 }
 window.addEventListener('scroll', scrollUp)

 /* ======================DARK / LIGHT MODE==============================*/
 const modeButton = document.getElementById('mode-button')
 const darkMode = 'dark-mode'
 const iconMode = 'uil-sun'
// Previously selected mode
 const selectedMode = localStorage.getItem('selected-mode')
 const selectedIcon= localStorage.getItem('selected-icon')

 const getCurrentMode = () => document.body.classList.contains(darkMode) ? 'dark' : 'light'
 const getCurrentIcon = () => modeButton.classList.contains(iconMode) ? 'uil-moon' : 'uil-sun'

 if (selectedMode){
     document.body.classList[selectedMode === 'dark' ? 'add' : 'remove'](darkMode)
     modeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconMode)
 }

 modeButton.addEventListener('click', () => {
     document.body.classList.toggle(darkMode)
     modeButton.classList.toggle(iconMode)
     
     localStorage.setItem('selected-mode', getCurrentIcon())
     localStorage.setItem('selected-icon', getCurrentIcon())

 })



