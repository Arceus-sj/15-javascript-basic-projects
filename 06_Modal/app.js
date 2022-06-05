const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.hero');
const closeBtn = document.querySelector('#close-btn');

modalBtn.addEventListener('click', function () {
    // console.log('working ...');
    modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('open-modal');
})