function homePage() {
    const home = document.createElement('div');
    home.classList.add('home');

    const heroSection = document.createElement('div');

    const heroTitle = document.createElement('h2');
    heroTitle.classList.add('hero-title');
    heroTitle.textContent = `Let's eat at My Restaurant!`;
    const heroText = document.createElement('p');
    heroText.classList.add('hero-text');
    heroText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum purus ut ultricies interdum. Vivamus eu metus sit amet neque porta volutpat iaculis sit amet orci. Nullam sed ornare elit. Fusce in risus eu nisi finibus venenatis.`;

    heroSection.appendChild(heroTitle);
    heroSection.appendChild(heroText);

    home.appendChild(heroSection)

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(homePage());
}

export default loadHome;