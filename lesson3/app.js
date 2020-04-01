// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let arrayObject1 = {
//     name: 'Maks',
//     age: 28,
//     wife: true
// };
// let arrayObject2 = {
//     dog: 'Goden retriever',
//     color: 'black',
//     weight: '45'
// };
// let arrayObject3 = {
//     work: false,
//     skills: 'drink a lot',
//     studies: 'okten'
// };
//создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let warior = {
//     name: 'Conor',
//     surname: 'McGreror',
//     age: 31,
//     accommodation: 'Dublin',
//     height: 175,
//     style: ['boxing', 'brazilian jiu-jitsu'],
//     wife: {name: 'Dee Devlin', age: 32},
//
// };

// При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let wariorKey in warior){
//     console.log(wariorKey);
// }

// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let wariorKey = Object.keys(warior);
// console.log(wariorKey);

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
// let cars = [
//     {name: 'Honda', model: 'Acord', color: 'red', year: 2011},
//     {name: 'Porsche', model: 'Cayman S', year: 2020, color: 'yellow'},
//     {name: 'Chevrolet', model: 'Impala', year: 1964, color: 'silver'},
//     {name: 'Ford', model: 'Shelby', year: 1970, color: 'blue'},
//     {name: 'Tesla', model: 'Cybertruck', year: 2019, color: 'brown'},
//     {name: 'Ferrari', model: '488 GTB', year: 2019, color: 'green'},
//     {name: 'Aston Martin', model: 'DB9', year: 2004, color: 'black'},
//     {name: 'Matherati', model: 'Quattroporte', year: 2004, color: 'white'},
//     {name: 'Lamborghini', model: 'Aventador', year: 2020, color: 'orange'},
//     {name: 'Bugatti', model: 'Veyron', year: 2005, color: 'blue'},
// ];
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)

// let cities = [
//     {name: 'London', population: 8908000, country: 'England', region: 'Big London'},
//     {name: 'Dublin', population: 4921500, country: 'Ireland', region: 'Leinster'},
//     {name: 'Los Angales', population: 3990456, country: 'USA', region: 'California'},
//
// ];
//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//
// let carsDriver = [
//     {
//         name: 'Honda',
//         model: 'Acord',
//         color: 'red',
//         year: 2011,
//         driver: {
//             name: 'Andrey',
//             age: 23,
//             sex: 'male',
//             experience: 2
//         }
//     },
//     {
//         name: 'Porsche',
//         model: 'Cayman S',
//         year: 2020,
//         color: 'yellow',
//         driver: {
//             name: 'Sara',
//             age: 27,
//             sex: 'female',
//             experience: 4
//         }
//     },
//     {
//         name: 'Chevrolet',
//         model: 'Impala',
//         year: 1964,
//         color: 'silver',
//         driver: {
//             name: 'Din',
//             age: 42,
//             sex: 'male',
//             experience: 20
//         }
//     },
//     {
//         name: 'Ford',
//         model: 'Shelby',
//         year: 1970,
//         color: 'blue',
//         driver: {
//             name: 'Harrison',
//             age: 61,
//             sex: 'male',
//             experience: 40
//         }
//     },
//     {
//         name: 'Tesla',
//         model: 'Cybertruck',
//         year: 2019,
//         color: 'brown',
//         driver: {
//             name: ' Elon',
//             age: 48,
//             sex: 'male',
//             experience: 10
//         }
//     },
//
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

// // - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
//
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const car of cars) {
//     console.log(car);
// }

//- взять объекты из задания 1 и превратить каждый в json.

// let jsonCars = JSON.stringify(cars);
// console.log(jsonCars);
//
// let jsonWarior = JSON.stringify(warior);
// console.log(jsonWarior);

//- взять json из задания 11 и превратить их обратно в объекты.
// let jsonCities  = JSON.stringify(cities);
// let jsonDrivers = JSON.stringify(carsDriver);
// console.log(jsonDrivers);
//
// let parsedDrivers = JSON.parse(jsonDrivers);
// console.log(parsedDrivers);
//

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив

// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         skills: ['java', 'js']
//     }, {
//         name: 'petya',
//         age: 30,
//         status: true,
//         skills: ['java', 'js', 'html']
//     }, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {
//         name: 'olya',
//         age: 28,
//         status: false,
//         skills: ['java', 'js']
//     }, {
//         name: 'max',
//         age: 30,
//         status: true,
//         skills: ['mysql', ',mongo']
//     }
// ];
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user.skills);
// }
// let usersSkills = [];
// for (const user of users) {
//     usersSkills.push(user.skills);
// }
// console.log(usersSkills);

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// /- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


//// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let userAddres = [];
//
// for (const user of users) {
//     userAddres.push(user.address);
// }
// console.log(userAddres);

// //- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// // Всі данні в одному блоці.

// let mainDiv = document.createElement('div');
// for (const user of users) {
//     let innerDiv = document.createElement('div');
//     innerDiv.innerText = `${user.name} ${user.age} ${user.status}`;
//
//     mainDiv.appendChild(innerDiv);
// }
//
// document.body.appendChild(mainDiv);

// //- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// // розділивши всі властивості по своїм блокам (div>div*4)
// // /- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// // розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//

// for (const user of users) {
//     let mainDiv = document.createElement('div');
//     for (const userKey in user) {
//         let divElement = document.createElement('div');
//         if (userKey !== 'address') {
//             divElement.innerText = user[userKey];
//         } else {
//             for (const userAddress in user.address) {
//                 let divAddress = document.createElement('div');
//                 divAddress.innerText = user.address[userAddress];
//                 divElement.appendChild(divAddress);
//             }
//         }
//         mainDiv.appendChild(divElement);
//     }
//     document.body.appendChild(mainDiv);
// }


//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
//
// for (const user of usersWithId) {
//     for (const cities of citiesWithId) {
//         if (user.id === cities.user_id) {
//             user.address = cities;
//         }
//     }
// }
// let usersWithCities = [];
// usersWithCities.push(usersWithId);
// console.log(usersWithCities);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let container = document.getElementById('container');
// let innerText = container.innerText;
// console.log(innerText);
//
// // let par = document.getElementsByClassName('par');
// // for (const x of par) {
// //     console.log(x.innerText);
// // }
//
// let elementsByTagName = document.getElementsByTagName('p');
// for (const xxx of elementsByTagName) {
//     console.log(xxx.innerText);
// }

// - змінити цей текст використовуючи селектори id, class,  tag

// let content = document.getElementById('container');
// content.innerText = 'QWERTY'
//

// const par = document.getElementsByClassName('par');
// for (let x of par) {
//     x.innerText = 'Sososososososot'
// }
//
// const p = document.getElementsByTagName('p');
//
//
// for (let xxx of p) {
//   xxx.innerText = 'RABBIT JOJO'
// }


// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let container = document.getElementById('container');
// container.style.width = '300px';
// container.style.height = '300px';


// - за допомоги document.createElement та appendChild
// створити таблицю на 1 рядок з трьома ячейками всередені

// let tabl = document.createElement('tabl');
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// tr.appendChild(th1);
// tr.appendChild(th2);
// tr.appendChild(th3);
//
// tabl.appendChild(tr);
// document.body.appendChild(tabl);

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let tabl = document.createElement('tabl');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');
//     let td3 = document.createElement('td');
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//
//     tabl.appendChild(tr);
// }
// document.body.appendChild(tabl);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let tabl = document.createElement('tabl');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//       tabl.appendChild(tr);
// }
// document.body.appendChild(tabl);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю
//  на n рядків з m ячейками всередені. n та m отримати з prompt

// let tabl = document.createElement('tabl');
// let n = prompt('Скильки рядків ?');
// let m = prompt('Скільки ячеек?');
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     tabl.appendChild(tr);
// }
// document.body.appendChild(tabl);

//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
// let wrap = document.createElement('div');
// wrap.id = "wrap";

// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     div.className =`rules rules${i}`;
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//
//     wrap.appendChild(div);
// }
// document.body.appendChild(wrap);

// for (const rule of rules) {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     div.className = `rules `;
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//
//     wrap.appendChild(div);
// }
//
// document.body.appendChild(wrap);
//

//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//

// let arrH2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ul = document.createElement('ul');
//
// for (const h2 of arrH2) {
//     let li = document.createElement('li');
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);
//
























