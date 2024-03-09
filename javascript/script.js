

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
            let currentActiveElements = document.querySelectorAll('.solution-grid-item.active');
            currentActiveElements.forEach(e => {
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
// document.addEventListener("DOMContentLoaded", () => {
//     let solutionGridElements = document.getElementsByClassName('solution-grid-item');
//     let solutionGrid = document.getElementById('solution-grid');
//     Array.from(solutionGridElements).forEach(element => {
//         element.addEventListener('click', (e) => {
//             let currentActiveElements = document.querySelectorAll('.solution-grid-item.active');
//             currentActiveElements.forEach(activeElement => {
//                 activeElement.classList.remove('active');
//             });
//             e.currentTarget.classList.add('active');
//         });
//     });
// });
//Now we need to sroll to the element with the active class.
//
// document.addEventListener("DOMContentLoaded", () => {
//     const solutionGridElements = document.getElementsByClassName('solution-grid-item');
//     Array.from(solutionGridElements).forEach(element => {
//         element.addEventListener('click', (e) => {
//             let currentActiveElement = Array.from(document.getElementsByClassName('active'));
//             currentActiveElement.forEach(element => {
//                 element.classList.remove('active');
//             })
//             e.target.classList.add('active');
//             //We have to fix the h3 element being selected instead of the entire div.
//         })
//     })
// });