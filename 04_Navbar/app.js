const navToggleBtn = document.querySelector('.nav-btn');
const showLink = document.querySelector('.nav-content');

navToggleBtn.addEventListener('click', function () {
    // console.log(showLink.classList);
    // console.log(showLink.classList.contains('link-el'));

    showLink.classList.toggle("show-link");


});
