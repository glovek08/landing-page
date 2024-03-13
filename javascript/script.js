

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
    Array.from(solutionGridElements).forEach(element => { /*This scrolls the solution-grid's active element into view*/
        element.onclick = (event) => {
            let currentActiveElement = document.querySelectorAll('.solution-grid-item.active');
            //This is to prevent the h3 solution-title from getting active.
            currentActiveElement.forEach(currentActiveEl => {
                currentActiveEl.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
            console.log(`calling the articleActive function with ${event.currentTarget.id}`);
            changeActiveArticle(event.currentTarget.id);
            let containerRect = solutionGrid.getBoundingClientRect();
            let elementRect = event.currentTarget.getBoundingClientRect();
            let scrollOnClick = elementRect.left - containerRect.left - (containerRect.width - elementRect.width) / 2;
            solutionGrid.scrollTo({
                left: scrollOnClick,
                behavior: 'smooth'
            });
        };
    });
    solutionGridRightNav.onmouseover = () => { /*Handling the nav arrows scrolling on hover*/
        solutionGrid.scrollLeft = solutionGrid.getBoundingClientRect().width;
        console.log('scrollRight');
    }
    solutionGridLeftNav.onmouseover = () => {
        solutionGrid.scrollLeft = -solutionGrid.getBoundingClientRect().width;
        console.log('scrollLeft');
    }
});
function changeActiveArticle(itemId) {
    const solutionContextArticles = document.querySelectorAll('#solution-context article');
    console.log(Array.from(solutionContextArticles));
    switch (itemId) {
        case 'solution-lighting':
            Array.from(solutionContextArticles).forEach(el => el.id === 'lighting' ? el.classList.add('activeArticle') : el.classList.remove('activeArticle'));
            console.log(itemId);
            break;
        case 'solution-temperature':
            Array.from(solutionContextArticles).forEach(el => el.id === 'temperature' ? el.classList.add('activeArticle') : el.classList.remove('activeArticle'));
            console.log('temperature breached');
            break;
        case 'solution-filtration':
            Array.from(solutionContextArticles).forEach(el => el.id === 'filtration' ? el.classList.add('activeArticle') : el.classList.remove('activeArticle'));
            console.log(itemId);
            break;
        default:
            Array.from(solutionContextArticles).forEach(el => el.classList.remove('activeArticle'));
            console.warn(`Couldn't find the article with the id: ${itemId}`);
    }
}
//TODO: DYNAMICALLY CHANGE THE TEXT CONTENT OF THE SOLUTION-CONTEXT TO THE CURRENTLY ACTIVE SOLUTION-GRID-ITEM.