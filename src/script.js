// Menu button function
let clicked = false

const viewMenu = () => {
    const menu = document.getElementById('navMenu');
    if (clicked === false) {
        menu.setAttribute('CLASS', 'navbar-menu');
        clicked = true;
    } else {
        menu.setAttribute('CLASS', 'navbar-menu-hidden');
        clicked = false;
    }
}


// Animations 

// Ghost

const ghostVulnerable = () => {
    const ghost = document.getElementById('body-ghost');
    ghost.setAttribute('CLASS', ghost.getAttribute('CLASS') +' vulnerable');
    setTimeout(() =>
        ghost.setAttribute('class', 'body-pacman')
    ,3000)
}

function eyesMove (eye) {
    eye.animate(
        [ { transform: 'translateX(0)'},
          { transform: 'translateX(-10px)'}, 
          { transform: 'translateX(0)'}  ],
          { duration: 1500,
            iterations: 2,
            }
    )
}

function eyesTimer() {
        setTimeout(() => {
            const eyeL = document.getElementById('eyeL');
            const eyeR = document.getElementById('eyeR');
            eyesMove(eyeL);
            eyesMove(eyeR);
            eyesTimer();
        }, 15000 )
}

    
eyesTimer();

// Scroll anitions page

const containerSkillsLeft = document.getElementById('container-Skills-Left');
const containerSkillsRight = document.getElementById('container-Skills-Right');

window.addEventListener('scroll', () => {
    const positionOBJ = containerSkillsLeft.getBoundingClientRect().top;
    console.log(positionOBJ);
    if (positionOBJ <= 450 ) {
        containerSkillsLeft.style.animation = 'skillsMoveLeft ease-in-out 2s'
        containerSkillsRight.style.animation = 'skillsMoveRight ease-in-out 2s'
    }

})

const skillSection = window.location.hash
console.log(skillSection);

// Porfolio cicle