// - Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.getElementById('text');
// div.hidden = false;
// let btn = document.querySelector('button');
//
// btn.onclick = function () {
//     if(div.hidden === false){
//     div.hidden = true;
//     } else if (div.hidden === true){
//         div.hidden = false;
//     }
// };
// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.querySelector('button');
//
// btn.onclick = function () {
//     btn.hidden = true;
// };
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let buttons = document.getElementsByTagName('button');
// let btn = buttons[0];
// document.getElementById('input').oninput = function (e) {
//         btn.onclick = () => {
//             if (this.value < 18) {
//             alert('Ти ще маленький')
//             } else {
//                 alert('Прошу бардзо!')
//             }
//         }
// };
//

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById('films');
// let titleElem = films.querySelector('.title');

// titleElem.onclick = () => {
//     menu.classList.toggle('open')
// };
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//

//
// let comments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Dolar', body: 'lorem ipsum dolo sit on you ass ameti dolo sit on you ass ametidolo sit on you ass ameti'},
//     {title: 'Grivna', body: 'lorem ipsum dolor give me sit ametidolo sit on you ass ameti'},
//     {title: 'Zlotyi', body: 'lorem ipsum dolo sit dolo sit on you ass ametiameti kurwa match'},
//     {title: 'Evro', body: 'lorem ipsum dolo sidolo sit on you ass ametit ameti jora jora'},
//     {title: 'zxc', body: 'lorem ipsum doldolo sit on you ass ametio sit ameti petya vasiya'},
// ];
//
// for (const comment of comments) {
//     let mainDiv = document.createElement('div');
//     let btn = document.createElement('button');
//     btn.innerText = 'скрыть';
//
//
//     for (const key in comment) {
//         let divElem = document.createElement("div");
//         divElem.innerText = comment[key];
//         mainDiv.appendChild(divElem);
//         btn.onclick = () => {
//             if (divElem.hidden === true) {
//                 divElem.hidden = false;
//             }
//             else if (divElem.hidden === false) {
//                 divElem.hidden = true
//             }
//         };
//
//     }
//     mainDiv.appendChild(btn);
//     document.body.appendChild(mainDiv)
// }


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let buttons = document.getElementsByTagName('button');
// let btn =buttons[0];
// let input = document.form1.input1;
// let input2 = document.form1.input2;
// let input21 = document.form2.input1form21;
// let input22 = document.form2.input2form22;
//
//  btn.onclick = () => {
//      console.log(input.value);
//      console.log(input2.value);
//      console.log(input21.value);
//      console.log(input22.value);
//  };
//
//
//

// Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// function createTable(line, cell,element) {
//     let div = document.createElement(element);
//     let tabl = document.createElement('table');
//
//     for (let i = 0; i < line; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cell; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         tabl.appendChild(tr);
//     }
//     div.appendChild(tabl);
//     document.body.appendChild(div);
// }
// createTable(2,5,'div');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputRow = document.getElementById('row');
// let inputCell = document.getElementById('cell');
// let inputtext = document.getElementById('text');
// let btn = document.getElementById('btn');
//
// btn.onclick = (ev) => {
//     let div = document.createElement('div');
//     let tabl = document.createElement('table');
//
//     for (let i = 0; i < inputRow.value; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < inputCell.value; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerText = inputtext.value;
//         }
//         tabl.appendChild(tr);
//     }
//     div.appendChild(tabl);
//     document.body.appendChild(div);
// };

// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let arrImg = [
    {
        id: 1,
        img_url: '1.jpg'
    },
    {
        id: 1,
        img_url: '2.jpg'
    },
    {
        id: 1,
        img_url: '3.jpg'
    },
];

let content = document.getElementById('content');
let img = document.createElement('img');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');


btn1.innerText = '<';
btn2.innerText = '>';


let index = 0;
img.width = 900;
img.height = 600;
img.src = arrImg[index].img_url;


content.appendChild(img);
content.appendChild(btn1);
content.appendChild(btn2);

btn1.onclick = () => {
    if (index - 1 < 0) {
        index = arrImg.length - 1;
    } else {
        index = index - 1;
    }
    img.src = arrImg[index].img_url;
};

btn2.onclick = () => {
    if (index + 1 > arrImg.length - 1) {
        index = 0;
    } else {
        index = index + 1;
    }
    img.src = arrImg[index].img_url;
};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let input = document.getElementById('input');
// let button = document.getElementById('btn');
//
// let array = ['fuck', 'suka', 'kurwa', 'motherfuker', 'тварь', 'жопа', 'ебал'];
//
// button.onclick = () => {
//     array.forEach(element => {input.value.includes(element) ? alert('Не ругайся Молодой Человек') : input.value})};


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let arrH2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ul = document.createElement('ul');
//
// for (let i = 0; i < arrH2.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let anchor = 'anchor' + i;
//     a.href = '#' + anchor;
//     arrH2[i].setAttribute('id',anchor);
//     a.innerText = arrH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
//

// -- взять массив пользователей

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let block = document.getElementsByClassName('list')[0];
// usersWithAddress.forEach(element => {
//     let mainDiv = document.createElement('div');
//     let divElement = document.createElement('div');
//     let divAddress = document.createElement('div');
//     for (const key in element) {
//         if (key !== 'address') {
//             divElement.innerText =`${element.name} ${element.status}  ${element.age}  ` ;
//         } else {
//             for (const userAddress in element.address) {
//                 divAddress.innerText = `${element.address.city} ${element.address.street} ${element.address.number} `;
//                 divElement.appendChild(divAddress);
//             }
//         }
//         mainDiv.appendChild(divElement);
//     }
//     block.appendChild(mainDiv);
// });
// let element1 = document.querySelector('#cbox1');
// let element2 = document.querySelector('#cbox2');
// let element3 = document.querySelector('#cbox3');
//
// element1.onclick = () => {
//     block.innerText = '';
//     if (element1.checked) {
//         for (const user of usersWithAddress) {
//             if (!user.status ) {
//                 let mainDiv = document.createElement('div');
//                 let divElement = document.createElement('div');
//                 let divAddress = document.createElement('div');
//                 for (const userKey in user) {
//                     if (userKey !== 'address') {
//                         divElement.innerText =`${user.name} ${user.status}  ${user.age}  ` ;
//                     } else {
//                         for (const userAddress in user.address) {
//                             divAddress.innerText = `${user.address.city} ${user.address.street} ${user.address.number} `;
//                             divElement.appendChild(divAddress);
//                         }
//                     }
//                     mainDiv.appendChild(divElement);
//                 }
//                 block.appendChild(mainDiv);
//             }
//         }
//     } else {
//         for (const user of usersWithAddress) {
//             let mainDiv = document.createElement('div');
//             let divElement = document.createElement('div');
//             let divAddress = document.createElement('div');
//             for (const userKey in user) {
//                 if (userKey !== 'address') {
//                     divElement.innerText =`${user.name} ${user.status}  ${user.age}  ` ;
//                 } else {
//                     for (const userAddress in user.address) {
//                         divAddress.innerText = `${user.address.city} ${user.address.street} ${user.address.number} `;
//                         divElement.appendChild(divAddress);
//                     }
//                 }
//                 mainDiv.appendChild(divElement);
//             }
//             block.appendChild(mainDiv);
//         }
//     }
// };
//
// element2.onclick = () => {
//     block.innerText = '';
//     if (element2.checked) {
//         for (const user of usersWithAddress) {
//             if (user.age >= 29) {
//                 let mainDiv = document.createElement('div');
//                 let divElement = document.createElement('div');
//                 let divAddress = document.createElement('div');
//                 for (const userKey in user) {
//                     if (userKey !== 'address') {
//                         divElement.innerText =`${user.name} ${user.status}  ${user.age}  ` ;
//                     } else {
//                         for (const userAddress in user.address) {
//                             divAddress.innerText = `${user.address.city} ${user.address.street} ${user.address.number} `;
//                             divElement.appendChild(divAddress);
//                         }
//                     }
//                     mainDiv.appendChild(divElement);
//                 }
//                 block.appendChild(mainDiv);
//             }
//         }
//     } else {
//         for (const user of usersWithAddress) {
//             let mainDiv = document.createElement('div');
//             let divElement = document.createElement('div');
//             let divAddress = document.createElement('div');
//             for (const userKey in user) {
//                 if (userKey !== 'address') {
//                     divElement.innerText =`${user.name} ${user.status}  ${user.age}  ` ;
//                 } else {
//                     for (const userAddress in user.address) {
//                         divAddress.innerText = `${user.address.city} ${user.address.street} ${user.address.number} `;
//                         divElement.appendChild(divAddress);
//                     }
//                 }
//                 mainDiv.appendChild(divElement);
//             }
//             block.appendChild(mainDiv);
//         }
//     }
// };
// element3.onclick = () => {
//     block.innerText = '';
//     if (element3.checked) {
//         for (const user of usersWithAddress) {
//             if (user.address.city === 'Kyiv') {
//                 let mainDiv = document.createElement('div');
//                 let divElement = document.createElement('div');
//                 let divAddress = document.createElement('div');
//                 for (const userKey in user) {
//                     if (userKey !== 'address') {
//                         divElement.innerText =`${user.name} ${user.status}  ${user.age}  ` ;
//                     } else {
//                         for (const userAddress in user.address) {
//                             divAddress.innerText = `${user.address.city} ${user.address.street} ${user.address.number} `;
//                             divElement.appendChild(divAddress);
//                         }
//                     }
//                     mainDiv.appendChild(divElement);
//                 }
//                 block.appendChild(mainDiv);
//             }
//         }
//     } else {
//         for (const user of usersWithAddress) {
//             let mainDiv = document.createElement('div');
//             let divElement = document.createElement('div');
//             let divAddress = document.createElement('div');
//             for (const userKey in user) {
//                 if (userKey !== 'address') {
//                     divElement.innerText =`${user.name} ${user.status}  ${user.age}  ` ;
//                 } else {
//                     for (const userAddress in user.address) {
//                         divAddress.innerText = `${user.address.city} ${user.address.street} ${user.address.number} `;
//                         divElement.appendChild(divAddress);
//                     }
//                 }
//                 mainDiv.appendChild(divElement);
//             }
//             block.appendChild(mainDiv);
//         }
//     }
// };

function render(array) {
    let main = document.createElement('div');
    array.forEach(item => {
        let divUser = document.createElement('h2');
        let divAddress = document.createElement('h3');

        divUser.innerText = `${item.name} : ${item.age} : ${item.status}`;
        divAddress.innerHTML = `${item.address.city} :${item.address.street} :${item.address.number}<hr>`;

        main.appendChild(divUser);
        main.appendChild(divAddress);
    });
    return main;
}

block.appendChild(render(usersWithAddress));
let element1 = document.querySelector('#cbox1');
let element2 = document.querySelector('#cbox2');
let element3 = document.querySelector('#cbox3');

element1.onclick = (ev) => {
    let newArray = JSON.parse(JSON.stringify(usersWithAddress));
    if (element1.checked) newArray = newArray.filter(value => !value.status);
    block.innerText = '';
    block.appendChild(render(newArray))
};
element2.onclick = (ev) => {
    let newArray = JSON.parse(JSON.stringify(usersWithAddress));
    if (element2.checked) newArray = newArray.filter(value => value.age >= 29);
    block.innerText = '';
    block.appendChild(render(newArray))
};
element3.onclick = (ev) => {
    let newArray = JSON.parse(JSON.stringify(usersWithAddress));
    if (element3.checked) newArray = newArray.filter(value => value.address.city === 'Kyiv');
    block.innerText = '';
    block.appendChild(render(newArray))
};

