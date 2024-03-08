

window.addEventListener('scroll', () => { //Scrolls the header when user scrolls down.
    const header = document.getElementById('header');
    if (window.scrollY > 5) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let solutionGrid = document.getElementById('solution-grid');
    solutionGrid.addEventListener('mouseover', (e) => {
        e.target.addEventListener('mouseover', () => {
        })
    });
    //Scrolls X the solution-grid when user hover over either solution-nav.
    // let solutionGrid = document.getElementById("solution-grid");
    // let solutionGridItems = Array.from(document.getElementsByClassName("solution-grid-item"));
    // let solutionGridRightNav = document.getElementById('solution-grid-right-nav');
    // let solutionGridLeftNav = document.getElementById('solution-grid-left-nav');
    // solutionGridLeftNav.addEventListener("mouseover", () => {
    //     solutionGrid.scrollLeft += -solutionGridItems[0].scrollWidth; //Gets the width of a solution-grid-item;
    // });
    // solutionGridRightNav.addEventListener("mouseover", () => {
    //     solutionGrid.scrollLeft += solutionGridItems[0].scrollWidth;
    //     console.log(solutionGridItems[0].scrollWidth);
    // });
});