/*видное меню*/
// Возвращает ссылку на элемент по его идентификатору
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*видное меню*/
/* Проверка существует ли константа */
// позволяет добавлять обработчики событий к любому объекту 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*скрытое меню*/
/*позволяет добавлять обработчики событий к любому объекту  */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*движение меню*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    /*
Когда мы нажимаем на каждый nav__link, мы двигаем show-menu class*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*изменение бэкраунд хедера*/
// прокрутка хеадер части(статична)
function scrollHeader(){
    const header = document.getElementById('header')
    /*Когда прокрутка превышает высоту окна просмотра 50, добавьте класс заголовка прокрутки в тег заголовка.*/
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*показ прокрутки*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
     /*Когда прокрутка превышает высоту окна просмотра 200, добавьте класс заголовка прокрутки в тег заголовка.*/
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*прокрутка секции активный active link*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*прокрутка показанной анимации*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)