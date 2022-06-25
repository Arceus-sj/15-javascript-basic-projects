// menu items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item_1.jpg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item_2.jpg",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id: 3,
        title: "Egg Attack",
        category: "lunch",
        price: 15.99,
        img: "./images/item_3.jpg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
        id: 4,
        title: "Bacon Overflow",
        category: "lunch",
        price: 8.99,
        img: "./images/item_4.jpg",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
        id: 5,
        title: "Shakes Buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item_5.jpg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id: 6,
        title: "Diner Double",
        category: "dinner",
        price: 15.99,
        img: "./images/item_6.jpg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
        id: 7,
        title: "Fire Steak",
        category: "dinner",
        price: 39.99,
        img: "./images/item_7.jpg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id: 8,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item_8.jpg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
        id: 9,
        title: "Naruto Special",
        category: "dinner",
        price: 14.99,
        img: "./images/item_9.jpg",
        desc: "Japanese noodle dish. It consists of Chinese-style wheat noodles served in a meat-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, nori, menma, and scallions",
    },
    {
        id: 10,
        title: "Indian Samosa",
        category: "lunch",
        price: 4.99,
        img: "./images/item_10.jpg",
        desc: "fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas.",
    },
    {
        id: 11,
        title: "Sushi",
        category: "dinner",
        price: 20.99,
        img: "./images/item_11.jpg",
        desc: " Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables. ",
    },
    {
        id: 12,
        title: "Madrid-style Macaroni",
        category: "lunch",
        price: 15.99,
        img: "./images/item_12.jpg",
        desc: "traditional macaroni, with its chorizo and tomato sauce.",
    },
    {
        id: 13,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item_13.jpg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
    {
        id: 14,
        title: "Fruit Waffles",
        category: "breakfast",   
        price: 10.99,
        img: "./images/item_14.jpg",
        desc: "These delicious waffles are filled with ooey gooey chocolate and raspberry perfection! You won't want to try any other waffle recipe ever again. Be warned."
    }
];

const menuList = document.querySelector('.menu-list');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu); 
});

const filterBtn = document.querySelectorAll('.filter-btn');

filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        // console.log(event.currentTarget.dataset.id);
        const category = event.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
            
        });

        if(category === 'all') {
            displayMenuItems(menu);
        }
        else {
            displayMenuItems(menuCategory);
        }

        // console.log(menuCategory);
    });
});




function displayMenuItems(menuItems) {
    
    // using .map() method insted of for loop
    let displayMenu = menu.map(function (item) {
        return `
        <article class="menu-item">
            
            <img src="${item.img}" alt="${item.title}">
            
            <div class="item-info">
                <header>
                    <h3 class="item-name">${item.title}</h3>
                    <h3 class="price">$${item.price}</h3>
                </header>
                <hr class="item-underline">
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>
    `;
    });
    
    displayMenu = displayMenu.join("");
    
    // console.log(displayMenu);

    menuList.innerHTML = displayMenu;
}
