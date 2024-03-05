

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 5) { // Adjust the scroll amount as needed
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
