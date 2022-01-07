function homePage() {
    const home = document.createElement('div');
    home.classList.add('home');

    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section')

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    const heroTitle = document.createElement('h2');
    heroTitle.classList.add('hero-title');
    heroTitle.textContent = `Let's eat at My Restaurant!`;

    const heroPara = document.createElement('p');
    heroPara.classList.add('hero-para');
    heroPara.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum purus ut ultricies interdum. Vivamus eu metus sit amet neque porta volutpat iaculis sit amet orci. Nullam sed ornare elit. Fusce in risus eu nisi finibus venenatis.`;

    heroText.appendChild(heroTitle);
    heroText.appendChild(heroPara);

    const heroImg = document.createElement('img');
    heroImg.setAttribute('src', '../src/imgs/hero.jpg')
    heroImg.classList.add('hero-img')

    heroSection.appendChild(heroText);
    heroSection.appendChild(heroImg);

    const invitation = document.createElement('h3');
    invitation.classList.add('invitation');
    invitation.textContent = 'Check out our menu or come visit us!';

    const inviteImg = document.createElement('img');
    inviteImg.setAttribute('src', '../src/imgs/invite-img.jpg');
    inviteImg.classList.add('invite-img');

    home.appendChild(heroSection)
    home.appendChild(invitation);
    home.appendChild(inviteImg);

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(homePage());
}

export default loadHome;