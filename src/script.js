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

const ghostVulnerable = () => {
    const ghost = document.getElementById('body-ghost');
    ghost.setAttribute('CLASS', ghost.getAttribute('CLASS') +' vulnerable');
    console.log(ghost.getAttribute('CLASS'))
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
