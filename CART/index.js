'use strict';

//Класс товара
class Goods
{
    constructor(id, title, price, img)
    {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.imgAlt = title;
    }
}

//Массив с товарами
const items = [
    new Goods('item1', 'Pixel 7 8/128 LEMONGRASS', 51000, './IMG/PIXEL 7 8_128 lemongrass.png'),
    new Goods('item2', 'PIXEL 7 8/128 SNOW', 50500, './IMG/PIXEL 7 8_128 Snow.png'),
    new Goods('item3', 'Pixel 6 Pro 12/128Gb Sorta Sunny', 50900, './IMG/Pixel 6 Pro 12_128Gb Sorta Sunny.png'),
    new Goods('item4', 'Pixel 7 Pro 12/256Gb HAZEL', 99990, './IMG/Pixel 7 Pro 12_256Gb Hazel.png'),
    new Goods('item5', 'Pixel 3A 64Gb BLACK', 20400, './IMG/Pixel 3A 64Gb Black.png'),
    new Goods('item6', 'Pixel 6A 6/128Gb SAGE', 33990, './IMG/Pixel 6A 6_128Gb Sage.png'),
    new Goods('item7', 'Pixel 7 8/256Gb OBSIDIAN', 63900, './IMG/Pixel 7 8_256Gb Obsidian.png'),
    new Goods('item8', 'Google Chromecast HD c Google TV', 5890, './IMG/Google Chromecast HD c Google TV.png' ),
    new Goods('item9', 'Xiaomi Mi Band 7', 3440, './IMG/Xiaomi Mi Band 7.png' ),
    new Goods('item10', 'Xiaomi Mi TV Stick 4K HDR Global', 4380, './IMG/Xiaomi Mi TV Stick 4K HDR Global (MDZ-27-AA).png' ),
    new Goods('item11', 'Amazfit GTS 4 Mini BLACK', 6890, './IMG/Amazfit GTS 4 Mini.png' ),
    new Goods('item11', 'Amazfit T-Rex 2 GREEN', 15190, './IMG/Amazfit T-Rex 2 GREEN.png' ),
];

//находим тег с классом items
const section = document.querySelector('.items');



//создаем тег div и помещаем его внутрь элемента с классом .items
const div1 = document.createElement('div');
div1.classList.add('elem-1', 'items__item');
section.appendChild(div1);

const div2 = document.createElement('div');
div2.classList.add('elem-2', 'items__item');
section.appendChild(div2);

const div3 = document.createElement('div');
div3.classList.add('elem-3', 'items__item');
section.appendChild(div3);  

const div4 = document.createElement('div');
div4.classList.add('elem-4', 'items__item');
section.appendChild(div4);

const div5 = document.createElement('div');
div5.classList.add('elem-5', 'items__item');
section.appendChild(div5);

const div6 = document.createElement('div');
div6.classList.add('elem-6', 'items__item');
section.appendChild(div6);

const div7 = document.createElement('div');
div7.classList.add('elem-7', 'items__item');
section.appendChild(div7);

const div8 = document.createElement('div');
div8.classList.add('elem-8', 'items__item');
section.appendChild(div8);

const div9 = document.createElement('div');
div9.classList.add('elem-9', 'items__item');
section.appendChild(div9);

const div10 = document.createElement('div');
div10.classList.add('elem-10', 'items__item');
section.appendChild(div10);



//Создаем img и добавляем его в div
const img1 = document.createElement('img');
img1.src = items[0].img;
img1.alt = items[0].imgAlt;
div1.appendChild(img1);

const img2 = document.createElement('img');
img2.src = items[1].img;
img2.alt = items[1].imgAlt;
div2.appendChild(img2);

const img3 = document.createElement('img');
img3.src = items[2].img;
img3.alt = items[2].imgAlt;
div3.appendChild(img3);

const img4 = document.createElement('img');
img4.src = items[3].img;
img4.alt = items[3].imgAlt;
div4.appendChild(img4);

const img5 = document.createElement('img');
img5.src = items[4].img;
img5.alt = items[4].imgAlt;
div5.appendChild(img5);

const img6 = document.createElement('img');
img6.src = items[5].img;
img6.alt = items[5].imgAlt;
div6.appendChild(img6);

const img7 = document.createElement('img');
img7.src = items[6].img;
img7.alt = items[6].imgAlt;
div7.appendChild(img7);

const img8 = document.createElement('img');
img8.src = items[7].img;
img8.alt = items[7].imgAlt;
div8.appendChild(img8);

const img9 = document.createElement('img');
img9.src = items[8].img;
img9.alt = items[8].imgAlt;
div9.appendChild(img9);

const img10 = document.createElement('img');
img10.src = items[9].img;
img10.alt = items[9].imgAlt;
div10.appendChild(img10);

//Заголовок карточки
const title1 = document.createElement('h2');
title1.textContent=items[0].title;
div1.appendChild(title1);

const title2 = document.createElement('h2');
title2.textContent=items[1].title;
div2.appendChild(title2);

const title3 = document.createElement('h2');
title3.textContent=items[2].title;
div3.appendChild(title3);

const title4 = document.createElement('h2');
title4.textContent=items[3].title;
div4.appendChild(title4);

const title5 = document.createElement('h2');
title5.textContent=items[4].title;
div5.appendChild(title5);

const title6 = document.createElement('h2');
title6.textContent=items[5].title;
div6.appendChild(title6);

const title7 = document.createElement('h2');
title7.textContent=items[6].title;
div7.appendChild(title7);

const title8 = document.createElement('h2');
title8.textContent=items[7].title;
div8.appendChild(title8);

const title9 = document.createElement('h2');
title9.textContent=items[8].title;
div9.appendChild(title9);

const title10 = document.createElement('h2');
title10.textContent=items[9].title;
div10.appendChild(title10);

//Стоимость товара
const price1 = document.createElement('h1');
price1.textContent=`${items[0].price}₽`;
div1.appendChild(price1);

const price2 = document.createElement('h1');
price2.textContent=`${items[1].price}₽`;
div2.appendChild(price2);

const price3 = document.createElement('h1');
price3.textContent=`${items[2].price}₽`;
div3.appendChild(price3);

const price4 = document.createElement('h1');
price4.textContent=`${items[3].price}₽`;
div4.appendChild(price4);

const price5 = document.createElement('h1');
price5.textContent=`${items[4].price}₽`;
div5.appendChild(price5);

const price6 = document.createElement('h1');
price6.textContent=`${items[5].price}₽`;
div6.appendChild(price6);

const price7 = document.createElement('h1');
price7.textContent=`${items[6].price}₽`;
div7.appendChild(price7);

const price8 = document.createElement('h1');
price8.textContent=`${items[7].price}₽`;
div8.appendChild(price8);

const price9 = document.createElement('h1');
price9.textContent=`${items[8].price}₽`;
div9.appendChild(price9);

const price10 = document.createElement('h1');
price10.textContent=`${items[9].price}₽`;
div10.appendChild(price10);

//Кнопка добавить
const button1 = document.createElement('button');
button1.textContent='Добавить';
div1.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent='Добавить';
div2.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent='Добавить';
div3.appendChild(button3);

const button4 = document.createElement('button');
button4.textContent='Добавить';
div4.appendChild(button4);

const button5 = document.createElement('button');
button5.textContent='Добавить';
div5.appendChild(button5);

const button6 = document.createElement('button');
button6.textContent='Добавить';
div6.appendChild(button6);

const button7 = document.createElement('button');
button7.textContent='Добавить';
div7.appendChild(button7);

const button8 = document.createElement('button');
button8.textContent='Добавить';
div8.appendChild(button8);

const button9 = document.createElement('button');
button9.textContent='Добавить';
div9.appendChild(button9);

const button10 = document.createElement('button');
button10.textContent='Добавить';
div10.appendChild(button10);



const cart = querySelector('.cart');
const cartIcon = document.createElement('img');
cartIcon.src = './IMG/cart.png'
cart.appendChild(cartIcon);
