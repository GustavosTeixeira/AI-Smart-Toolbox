/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== GSAP ANIMATION ===============*/
gsap.defaults({opacity: 0, duration: 1.4, ease: "power4.out"})

const tl = gsap.timeline()
const splitTitle = SplitText.create('.home__title', {type: 'chars'})

tl.from('.home__box' , {duration: .2}, '.3')
.from('.home__bg' , {scale: .5}, '1.5')
.from('.home__icon' , {y: 900}, '1.8')
.from(splitTitle.chars, {y: 30, autoAlpha: 0, stagger: 0.05}, '2.1')
.from('.home__description' , {y: 90}, '3.3')
.from('.home__button' , {y: 90}, '3.6')
.to('.home__bg', {scale: 1.5, opacity: 1, duration: 8, ease: "power1.inOut", repeat: -1, yoyo: true, tranformOrigin: 'center center'})