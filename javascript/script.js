

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
    Array.from(solutionGridElements).forEach(element => {
        element.addEventListener('click', (e) => {
            // Remove 'active' class from all elements
            let currentActiveElements = document.querySelectorAll('.solution-grid-item.active');
            currentActiveElements.forEach(activeElement => {
                activeElement.classList.remove('active');
            });

            // Add 'active' class to the clicked element
            e.currentTarget.classList.add('active');
        });
    });
});
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