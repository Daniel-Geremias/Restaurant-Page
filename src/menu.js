function menuPage() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';
    
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');

    const menuItemImg1 = document.createElement('img');
    menuItemImg1.classList.add('menu-item-img');
    menuItemImg1.setAttribute('src', '../src/imgs/menu-item-1.jpg');

    const menuItemText1 = document.createElement('p');
    menuItemText1.classList.add('menu-item-text');
    menuItemText1.textContent = 'menu item 1';

    const menuItemPrice1 = document.createElement('p');
    menuItemPrice1.classList.add('menu-item-price');
    menuItemPrice1.textContent = '$15';

    menuItem1.appendChild(menuItemImg1);
    menuItem1.appendChild(menuItemText1);
    menuItem1.appendChild(menuItemPrice1);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');

    const menuItemImg2 = document.createElement('img');
    menuItemImg2.classList.add('menu-item-img');
    menuItemImg2.setAttribute('src', '../src/imgs/menu-item-2.jpg');

    const menuItemText2 = document.createElement('p');
    menuItemText2.classList.add('menu-item-text');
    menuItemText2.textContent = 'menu item 2';

    const menuItemPrice2 = document.createElement('p');
    menuItemPrice2.classList.add('menu-item-price');
    menuItemPrice2.textContent = '$15';

    menuItem2.appendChild(menuItemImg2);
    menuItem2.appendChild(menuItemText2);
    menuItem2.appendChild(menuItemPrice2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');

    const menuItemImg3 = document.createElement('img');
    menuItemImg3.classList.add('menu-item-img');
    menuItemImg3.setAttribute('src', '../src/imgs/menu-item-3.jpg');

    const menuItemText3 = document.createElement('p');
    menuItemText3.classList.add('menu-item-text');
    menuItemText3.textContent = 'menu item 3';

    const menuItemPrice3 = document.createElement('p');
    menuItemPrice3.classList.add('menu-item-price');
    menuItemPrice3.textContent = '$15';

    menuItem3.appendChild(menuItemImg3);
    menuItem3.appendChild(menuItemText3);
    menuItem3.appendChild(menuItemPrice3);

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');

    const menuItemImg4 = document.createElement('img');
    menuItemImg4.classList.add('menu-item-img');
    menuItemImg4.setAttribute('src', '../src/imgs/menu-item-4.jpg');

    const menuItemText4 = document.createElement('p');
    menuItemText4.classList.add('menu-item-text');
    menuItemText4.textContent = 'menu item 4';

    const menuItemPrice4 = document.createElement('p');
    menuItemPrice4.classList.add('menu-item-price');
    menuItemPrice4.textContent = '$15';

    menuItem4.appendChild(menuItemImg4);
    menuItem4.appendChild(menuItemText4);
    menuItem4.appendChild(menuItemPrice4);

    menu.appendChild(menuTitle);
    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);

    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(menuPage());
}

export default loadMenu;