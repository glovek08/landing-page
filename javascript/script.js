

window.addEventListener('scroll', () => {
    const hamburgerMenuLogo = document.getElementById("hamburger-menu");
    const header = document.getElementById('header');
    if (window.scrollY > 5) { // Adjust the scroll amount as needed
        header.classList.add('transparent');
        hamburgerMenuLogo.classList.add('contrast');
    } else {
        header.classList.remove('transparent');
        hamburgerMenuLogo.classList.remove('contrast');
    }
});
