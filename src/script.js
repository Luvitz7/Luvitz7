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

window.addEventListener('scroll', () => {
    window.scrollY >= 60 ? header.classList.add('header-visible') : header.classList.remove('header-visible');
});

// Send form

addEventListener('submit', (e) => {
    e.preventDefault();
    const boxconfirmed = document.querySelector('.mail-send-confirmation');
    const textConfirmed = document.querySelector('.mail-send-confirmation-text');
    const loaderSVG= document.querySelector('.loader-svg');
    const formulario = document.getElementById('formularioContacto');

    loaderSVG.classList.remove('loader-svg-hidden');
    boxconfirmed.setAttribute('style', 'display: inherit');

    fetch("https://formsubmit.co/ajax/6372ad8b415f476c99607e6f0a347ed7", {
    method: "POST",
    body: new FormData(e.target)
})
    .then(response => {response.json()
    })
    .then(data => {
        console.log(data);
        loaderSVG.classList.add('loader-svg-hidden');
        textConfirmed.innerText = 'Tu mensaje se envio con exito';
        textConfirmed.setAttribute('style', 'display: inline-block');
        formulario.reset();
    })
    .catch(error => {
        console.log(error);
        loaderSVG.classList.add('loader-svg-hidden');
        textConfirmed.innerText = 'Error al enviar el formulario, intente de nuevo';
        textConfirmed.setAttribute('style', 'display: inline-block');
        });
});

// Language

// Change language

const changeLanguage = () => {
    const btnLanguage = document.getElementById('btn-language');
    if (btnLanguage.innerText === 'ES') {
        setLanguage('EN');
        btnLanguage.innerText = 'EN';
        btnLanguage.classList.add('buttonLang-clicked');
    } else {
        setLanguage('ES');
        btnLanguage.innerText = 'ES';
        btnLanguage.classList.remove('buttonLang-clicked');
    }
}

const dictionary = {
    'ES': {
        nabvar: {
            home: 'Inicio',
            aboutMe: 'Acerca de mi',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        saludo: {
            title: 'Hola, soy',
        },
        aboutMe: {
            title: 'Acerca de mi',
            parrafo1: '¡Hola! Soy Ludwig desarrollador FullStack, eh desarrollado proyectos de manera personal y por curiosidad. Me encanta aprender cosas nuevas en cuanto a la tecnología y la programación. Me gusta mucho porque creo que puede ser un gran espacio para dejar fluir la creativdad, además de resolver problemas o facilitar tareas cotidianas en nuestro día.',
            parrafo2: 'Aparte de la programación, también me gusta mucho la música, los viajes, las fiestas, videojuegos y motos. Tengo la licenciatura en Turismo y me gustaría implementar estos conocimientos para mejorar la experiencia de los viajeros apasionados.',
            btn1: 'Un poco de historia',
            btn2: 'Ver mi CV',
        },
        skills: {
            title: 'Habilidades',
            parrafo1: 'Experiencia con tecnologías web generales HTML5, CSS3 y JavaScript así como experiencia inicial en frameworks JavaScript modernos como React, trabajando en proyectos personales, todo bajo el entorno de git y github.',
            title2: 'Experiencia',
            parrafo2: 'Aun no tengo ningun trabajo con clientes realizados pero te invito a conocer mis proyectos personales',
        },
        projects: {
            click_text: 'Click para ir al sitio',
            batatabit: {
                title: 'Landing page - Batatabit',
                description: 'Proyecto de maqueteado en html5 y CSS',
            },
            drinks_searcher: {
                title: 'Buscador de bebidas',
                description: 'Proyecto personal - Buscador de bebidas e ingredientes consultando una API',
            },
            ahorcado: {
                title: 'Juego de palabras - Ahorcado',
                description: 'Proyecto personal - Juego clasico de palabras e ingredientes consultando una API',
            },
            weather_app: {
                title: 'Aplicación de clima',
                description: 'Aplicación React para buscar el tiempo en una ciudad',
            },
            pokedex: {
                title: 'JS APP - Pokedex',
                description: 'Aplicación javascript para buscar pokemon y stats',
            },
        },
        contact: {
            title: 'Contacto',
            parrafo1: 'Si quieres contactar conmigo, puedes hacerlo a traves de este formulario',
            inputName: 'Ingresa tu nombre *',
            inputEmail: 'Ingresa tu correo *',
            inputMessage: 'Escribe tu mensaje *',
            btnSend: 'ENVIAR MENSAJE',
        },
    },
    'EN': {
        nabvar: {
            home: 'Home',
            aboutMe: 'About me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        saludo: {
            title: 'Hello, I am',
        },
        aboutMe: {
            title: 'About me',
            parrafo1: 'Hi!, I am Ludwig developer FullStack, I developed personal projects and curiosity. I like to learn new things about technology and programming. I like to leave the creative space, as well as solve problems or facilitate tasks in our daily life.',
            parrafo2: 'In addition to programming, I also like music, travel, parties, video games and motorcycles. I have a Bachelor of Tourism and would like to implement these skills to improve the experience of the travelers passionate.',
            btn1: 'A little history',
            btn2: 'See my CV',
        },
        skills: {
            title: 'Skills',
            parrafo1: 'Experience with general web technologies HTML5, CSS3 and JavaScript as well as experience initial in modern JavaScript frameworks such as React, working on personal projects, all under the guidance of git and github.',
            title2: 'Experience',
            parrafo2: 'Still have no work with clients realized, but you can see my personal projects',
        },
        projects: {
            click_text: 'Click to go to the site',
            batatabit: {
                title: 'Landing Page - Batatabit',
                description: 'Project with css desing and html5',
            },
            drinks_searcher: {
                title: 'Drinks Searcher',
                description: 'Personal project - Beverage and ingredient finder querying an API',
            },
            ahorcado: {
                title: 'Word Game - Ahorcado',
                description: 'Classic game of words and ingredients consulting an API',
            },
            weather_app: {
                title: 'Weather App',
                description: 'React aplication to search the weather in a city',
            },
            pokedex: {
                title: 'JS APP - Pokedex',
                description: 'JavaScript aplication to search the pokemon and stats',
            },
        },
        contact: {
            title: 'Contact',
            parrafo1: 'If you want to contact me, you can do it through this form',
            inputName: 'Enter your name *',
            inputEmail: 'Enter your email *',
            inputMessage: 'Write your message *',
            btnSend: 'SEND MESSAGE',
        },
    }
}

const setLanguage = (language) => {
    // Secciones del navbar
    const home = document.querySelectorAll('#home');
    const aboutMe = document.querySelectorAll('#aboutMe');
    const skills = document.querySelectorAll('#skills');
    const projects = document.querySelectorAll('#projects');
    const contact = document.querySelectorAll('#contact');
    // Seccion del Saludo - Pantalla principal   
    const saludo = document.querySelector('.my-name-iAm');
    // Seccion del Acerca de mi
    const aboutMeTitle = document.getElementById('aboutMe-title');
    const aboutMeParrafo1 = document.getElementById('aboutMeP1');
    const aboutMeParrafo2 = document.getElementById('aboutMeP2');
    const aboutMeBtnHistory = document.getElementById('btnHistory');
    const aboutMeBtnCV = document.getElementById('btnCV');
    // Seccion de Habilidades y Experiencia
    const skillsP1 = document.getElementById('skillsP1');
    const workTitle = document.getElementById('workTitle');
    const workParrafo1 = document.getElementById('workP1');
    // Seccion de Proyectos
    const batatabit = document.getElementById('batatabit');
    const descriptionBatatabit = document.getElementById('description-batatabit');
    const drinksSearcher = document.getElementById('drinksSearcher');
    const descriptionDrinksSearcher = document.getElementById('description-drinksSearcher');
    const ahorcado = document.getElementById('game-ahorcado');
    const descriptionAhorcado = document.getElementById('description-ahorcado');
    const weatherApp = document.getElementById('clima-app');
    const descriptionWeatherApp = document.getElementById('description-clima-app');
    const pokedex = document.getElementById('pokedex');
    const descriptionPokedex = document.getElementById('description-pokedex');
    const textClick = document.querySelectorAll('.texto-oculto');
    // Seccion de Contacto
    const contactTitle = document.getElementById('contactTitle');
    const contactParrafo1 = document.getElementById('contactP1');
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputMessage = document.querySelector('textarea');
    const btnSend = document.getElementById('btnSend');


    if (language === 'ES') {
        home.forEach(element => {
            element.innerText = dictionary.ES.nabvar.home;
        });
        aboutMe.forEach(element => {
            element.innerText = dictionary.ES.nabvar.aboutMe;
        });
        skills.forEach(element => {
            element.innerText = dictionary.ES.nabvar.skills;
        });
        projects.forEach(element => {
            element.innerText = dictionary.ES.nabvar.projects;
        });
        contact.forEach(element => {
            element.innerText = dictionary.ES.nabvar.contact;
        });
        saludo.innerText = dictionary.ES.saludo.title;
        aboutMeTitle.innerText = dictionary.ES.aboutMe.title;
        aboutMeParrafo1.innerText = dictionary.ES.aboutMe.parrafo1;
        aboutMeParrafo2.innerText = dictionary.ES.aboutMe.parrafo2;
        aboutMeBtnHistory.innerText = dictionary.ES.aboutMe.btn1;
        aboutMeBtnCV.innerText = dictionary.ES.aboutMe.btn2;
        skillsP1.innerText = dictionary.ES.skills.parrafo1;
        workTitle.innerText = dictionary.ES.skills.title2;
        workParrafo1.innerText = dictionary.ES.skills.parrafo2;
        batatabit.innerText = dictionary.ES.projects.batatabit.title;
        descriptionBatatabit.innerText = dictionary.ES.projects.batatabit.description;
        drinksSearcher.innerText = dictionary.ES.projects.drinks_searcher.title;
        descriptionDrinksSearcher.innerText = dictionary.ES.projects.drinks_searcher.description;
        ahorcado.innerText = dictionary.ES.projects.ahorcado.title;
        descriptionAhorcado.innerText = dictionary.ES.projects.ahorcado.description;
        weatherApp.innerText = dictionary.ES.projects.weather_app.title;
        descriptionWeatherApp.innerText = dictionary.ES.projects.weather_app.description;
        pokedex.innerText = dictionary.ES.projects.pokedex.title;
        descriptionPokedex.innerText = dictionary.ES.projects.pokedex.description;
        textClick.forEach(element => { element.innerText = dictionary.ES.projects.click_text; 
        contactTitle.innerText = dictionary.ES.contact.title;
        contactParrafo1.innerText = dictionary.ES.contact.parrafo1;
        inputName.placeholder = dictionary.ES.contact.inputName;
        inputEmail.placeholder = dictionary.ES.contact.inputEmail;
        inputMessage.placeholder = dictionary.ES.contact.inputMessage;
        btnSend.innerText = dictionary.ES.contact.btnSend;
        });
    } else {
        home.forEach(element => {
            element.innerText = dictionary.EN.nabvar.home;
        });
        aboutMe.forEach(element => {
            element.innerText = dictionary.EN.nabvar.aboutMe;
        });
        skills.forEach(element => {
            element.innerText = dictionary.EN.nabvar.skills;
        });
        projects.forEach(element => {
            element.innerText = dictionary.EN.nabvar.projects;
        });
        contact.forEach(element => {
            element.innerText = dictionary.EN.nabvar.contact;
        });
        saludo.innerText = dictionary.EN.saludo.title;
        aboutMeTitle.innerText = dictionary.EN.aboutMe.title;
        aboutMeParrafo1.innerText = dictionary.EN.aboutMe.parrafo1;
        aboutMeParrafo2.innerText = dictionary.EN.aboutMe.parrafo2;
        aboutMeBtnHistory.innerText = dictionary.EN.aboutMe.btn1;
        aboutMeBtnCV.innerText = dictionary.EN.aboutMe.btn2;
        skillsP1.innerText = dictionary.EN.skills.parrafo1;
        workTitle.innerText = dictionary.EN.skills.title2;
        workParrafo1.innerText = dictionary.EN.skills.parrafo2;
        batatabit.innerText = dictionary.EN.projects.batatabit.title;
        descriptionBatatabit.innerText = dictionary.EN.projects.batatabit.description;
        drinksSearcher.innerText = dictionary.EN.projects.drinks_searcher.title;
        descriptionDrinksSearcher.innerText = dictionary.EN.projects.drinks_searcher.description;
        ahorcado.innerText = dictionary.EN.projects.ahorcado.title;
        descriptionAhorcado.innerText = dictionary.EN.projects.ahorcado.description;
        weatherApp.innerText = dictionary.EN.projects.weather_app.title;
        descriptionWeatherApp.innerText = dictionary.EN.projects.weather_app.description;
        pokedex.innerText = dictionary.EN.projects.pokedex.title;
        descriptionPokedex.innerText = dictionary.EN.projects.pokedex.description;
        textClick.forEach(element => { element.innerText = dictionary.EN.projects.click_text;
        contactTitle.innerText = dictionary.EN.contact.title;
        contactParrafo1.innerText = dictionary.EN.contact.parrafo1;
        inputName.placeholder = dictionary.EN.contact.inputName;
        inputEmail.placeholder = dictionary.EN.contact.inputEmail;
        inputMessage.placeholder = dictionary.EN.contact.inputMessage;
        btnSend.innerText = dictionary.EN.contact.btnSend; });
    }
}
