function menuPage() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.textContent = 'This is the menu page!';

    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(menuPage());
}

export default loadMenu;