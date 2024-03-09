

window.addEventListener('scroll', () => { //Scrolls the header when user scrolls down.
    const header = document.getElementById('header');
    if (window.scrollY > 5) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let solutionGridElements = document.getElementsByClassName('solution-grid-item');
    let solutionGrid = document.getElementById('solution-grid');

    Array.from(solutionGridElements).forEach(element => {
        element.addEventListener('click', (e) => {
            let currentActiveElement = document.querySelectorAll('.solution-grid-item.active');
            //This is to prevent the h3 solution-title from getting active.
            currentActiveElement.forEach(e => {
                e.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
            let containerRect = solutionGrid.getBoundingClientRect();
            let elementRect = e.currentTarget.getBoundingClientRect();
            let scrollLeft = elementRect.left - containerRect.left - (containerRect.width - elementRect.width) / 2;
            solutionGrid.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        });
    });
});
//TODO: DYNAMICALLY CHANGE THE TEXT CONTENT OF THE SOLUTION-CONTEXT TO THE CURRENTLY ACTIVE SOLUTION-GRID-ITEM.