function contactPage() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'Contact';

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('contact-info');
    phoneNumber.textContent = '(000) 000 - 0000';

    const address = document.createElement('p');
    address.textContent = 'Nth, Dummy St. Nowhere Town - Country';
    address.classList.add('contact-info');

    const mapLocation = document.createElement('img');
    mapLocation.classList.add('map-location');
    mapLocation.setAttribute('src', '../src/imgs/map.jpg');

    contact.appendChild(contactTitle);
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(mapLocation);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(contactPage());
}

export default loadContact;