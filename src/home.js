function homePage() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.textContent = 'This is the home page!';

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(homePage());
}

export default loadHome;