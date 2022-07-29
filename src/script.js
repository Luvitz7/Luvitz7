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