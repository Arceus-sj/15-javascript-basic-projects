const toggleBtn = document.querySelector('#toggle-btn-el');
const closeBtn = document.querySelector('#close-btn-el');
const sidebar = document.querySelector('.sidebar-container');


toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show');
});

