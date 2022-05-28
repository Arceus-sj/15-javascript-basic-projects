document.addEventListener('DOMContentLoaded', function () {

    // local data
let data = [
    {
        id: 1,
        name:  "Yaroslava Borz",
        job:  "WEB DEVELOPER",
        img: "./asset/person_1.jpg", 
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "Bill Anderson",
        job: "THE BOSS",
        img: "./asset/person_2.jpg", 
        info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        id: 3,
        name: "Peter Jones", 
        job: "INTERN",
        img: "./asset/person_3.jpg",  
        info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "Susan Smith", 
        job: "WEB DESIGNER",
        img:"./asset/person_4.jpg",  
        info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 5,
        name: "Anna Johnson", 
        job: "Photographer",
        img: "./asset/person_5.jpg",  
        info: "Super responsive, quality work, wholesome professionals. You are best at what you all do. One of my best wedding decisions i have ever taken. Anna , Thank You from the bottom of my heart for making our day even more special and memorable."
    }
];

    
    let personImg = document.querySelector('img');

    let personName = document.querySelector('#author');

    let personJob = document.querySelector('#job');

    let personInfo = document.querySelector('#info');

    let prevBtn = document.querySelector('#left-arrow');

    let nextBtn = document.querySelector('#right-arrow');

    let currentItem = 0;
    // show current person
    function showCurrentPerson(person) {
        const item = data[person];
        personImg.src = item.img;
        personName.innerHTML = item.name;
        personJob.innerHTML = item.job;
        personInfo.innerHTML = item.info;
    }

    // next btn
    nextBtn.addEventListener('click', function () {
        currentItem++;
        if (currentItem > data.length) {
            currentItem = 0;
        }
        showCurrentPerson(currentItem);
    });

    // previous btn
    prevBtn.addEventListener('click', function () {
        currentItem--;
        if(currentItem < 0) {
            currentItem = 4;
        }
        showCurrentPerson(currentItem);
    });
});


