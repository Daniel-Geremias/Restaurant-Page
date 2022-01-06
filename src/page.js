import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function header(){
    const header = document.createElement('div');
    header.classList.add('header');

    const headerLogo = document.createElement('h1');
    headerLogo.textContent = 'My Restaurant';

    header.appendChild(headerLogo);
    header.appendChild(navBar());

    return header;

}

function navBar() {
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');
    for (let i=0; i<navButtons().length; i++){
        navBar.appendChild(navButtons()[i])
    };

    return navBar
}

function navButtons() {
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn', 'home-btn');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activeButton(homeBtn);
        loadHome();
    })

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn', 'menu-btn');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activeButton(menuBtn);
        loadMenu();
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn', 'contact-btn');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activeButton(contactBtn);
        loadContact();
    })

    return [homeBtn, menuBtn, contactBtn];
}

function activeButton(button) {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        };
    });

    button.classList.add('active')

};


function main() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    return main;
}

function footer() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = 'Copyright © <a href="https://github.com/Daniel-Geremias">Daniel Geremias</a>';

    return footer;
}

function loadPage() {
    const content = document.getElementById('content');

    content.appendChild(header());
    content.appendChild(main());
    content.appendChild(footer());

    activeButton(document.querySelector('.nav-btn'));
    loadHome();
};

export default loadPage;