const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();




const mediaQuery = window.matchMedia('(max-width: 768px)')
const mapVisual = document.querySelector('#map')
let burgerIndex = 1;
if (mediaQuery.matches) {
    burger.addEventListener('click', function() {
        burgerIndex++
        if (burgerIndex%2 == 0){
            mapVisual.style.zIndex = "-1";
        } else if (burgerIndex%2 !=0){
                mapVisual.style.zIndex = "100";
        }
    })
    }

