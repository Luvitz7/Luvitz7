//
// addEventListener('resize', event => console.log(event));

// Menu button function
let clicked = false

const viewMenu = () => {
    const menu = document.getElementById('navMenu');
    if (clicked === false) {
        menu.classList.remove('navbar-menu-hidden');
        clicked = true;
    } else {
        menu.classList.add('navbar-menu-hidden');
        clicked = false;
    }
}

// Animations 

// Scroll anitions page

const header = document.querySelector('.header');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    window.scrollY >= 60 ? header.classList.add('header-visible') : header.classList.remove('header-visible');
    window.scrollY >= 60 ? footer.classList.add('header-visible') : footer.classList.remove('header-visible');
});


// const containerSkillsLeft = document.getElementById('container-Skills-Left');
// const containerSkillsRight = document.getElementById('container-Skills-Right');

// window.addEventListener('scroll', () => {
//     const positionOBJ = containerSkillsLeft.getBoundingClientRect().top;
//     if (positionOBJ <= 450 ) {
//         containerSkillsLeft.style.animation = 'skillsMoveLeft ease-in-out 2s'
//         containerSkillsRight.style.animation = 'skillsMoveRight ease-in-out 2s'
//     }

// })

// const skillSection = window.location.hash;

// Porfolio cicle