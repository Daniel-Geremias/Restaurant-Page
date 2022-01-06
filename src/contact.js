function contactPage() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = 'This is the contact page!';

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(contactPage());
}

export default loadContact;