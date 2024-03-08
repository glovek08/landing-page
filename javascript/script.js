

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 5) { // Adjust the scroll amount as needed
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let solutionGrid = document.getElementById("solution-grid");
    let solutionGridWidth = solutionGrid.offsetWidth;
    let solutionGridRightNav = document.getElementById('solution-grid-right-nav');
    let solutionGridLeftNav = document.getElementById('solution-grid-left-nav');
    solutionGridLeftNav.addEventListener("mouseover", () => {
        solutionGrid.scrollLeft += -solutionGridWidth;
    });
    solutionGridRightNav.addEventListener("mouseover", () => {
        solutionGrid.scrollLeft += solutionGridWidth;
    });
});