
window.addEventListener('scroll', () => { //Scrolls the header when user scrolls down.
    const header = document.getElementById('header');
    if (window.scrollY > 5) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const solutionGridElements = document.getElementsByClassName('solution-grid-item');
    const solutionGrid = document.getElementById('solution-grid');
    const solutionGridRightNav = document.getElementById('solution-grid-right-nav');
    const solutionGridLeftNav = document.getElementById('solution-grid-left-nav');
    Array.from(solutionGridElements).forEach(element => {
        element.onclick = (event) => {
            let currentActiveElement = document.querySelectorAll('.solution-grid-item.active');
            //This is to prevent the h3 solution-title from getting active.
            currentActiveElement.forEach(currentActiveEl => {
                currentActiveEl.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
            let containerRect = solutionGrid.getBoundingClientRect();
            let elementRect = event.currentTarget.getBoundingClientRect();
            let scrollLeftOnClick= elementRect.left - containerRect.left - (containerRect.width - elementRect.width) / 2;
            solutionGrid.scrollTo({
                left: scrollLeftOnClick,
                behavior: 'smooth'
            });
        };
    });
    solutionGridRightNav.onmouseover = () => {
        console.log('scrollRight');
    }
    solutionGridLeftNav.onmouseover = () => {
        console.log('scrollLeft');
    }
});
//TODO: DYNAMICALLY CHANGE THE TEXT CONTENT OF THE SOLUTION-CONTEXT TO THE CURRENTLY ACTIVE SOLUTION-GRID-ITEM.