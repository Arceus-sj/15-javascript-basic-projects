// for(let i = 0; i < 3; i++) {
//     let showTextBtn = document.querySelectorAll('.question-btn')[i];
//     let showArticle = document.querySelectorAll('article')[i];
//     let closeBtn = document.querySelectorAll('.close-btn')[i];
    
//     showTextBtn.addEventListener('click', function () {
//         showArticle.classList.add('show-text');
//     });

//     closeBtn.addEventListener('click', function () {
//         showArticle.classList.remove('show-text');
//     })
// }

const btns = document.querySelectorAll('.question-btn');

const showArticle = document.querySelectorAll('article');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        console.log(event.currentTarget);
        
    });
});