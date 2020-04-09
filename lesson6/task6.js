// - создать массив с 20 числами.
// -- при помощи метода sort отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let number = [1, 3, 2, 5, 4, 11, 69, 6, 82, 21, 8, 37, 9, 46, 53, 7, 60, 10, 74, 95];
// =============================================
// let sortNumber = number.sort();
// =============================================
// let sortBack = number.sort(function (a,b) {
//     return b - a;
// });
// console.log(sortBack);
// =============================================
// let numbersTree = number.filter(num => num % 3);
// console.log(numbersTree);
// =============================================
// let numbersTen = number.filter(num => num % 10);
// console.log(numbersTen);
// =============================================
// number.forEach(number => console.log(number));
// =============================================
// let numbersMap = number.map(number => number * 3);
// console.log(numbersMap);
// =============================================
// создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let words = ['as', 'play', 'air', 'hand', 'animal', 'point', 'sentence', 'school', 'between', 'example', 'often', 'complete', 'possible', 'better',
//     'remember', 'towards', 'sudden', 'general', 'position', 'hope '];

// let abc = words.sort(function (a, b) {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(abc);
//
// let cba = words.sort(function (a, b) {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
//
// console.log(cba);
// let words4 = words.filter(word => word.length < 4);
//
// console.log(words4);

// let strings = words.map(word => word += '!');
// console.log(strings);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];

// let sortUserAgeUp = users.sort((user1, user2) => user1.age - user2.age);
// console.log(sortUserAgeUp);

// let sortUserAgeDown = users.sort((item, item2) => user2.age - user1.age);
// console.log(sortUserAgeDown);

// let filter = users.sort((word1,word2) => word1.name.length - word2.name.length);
// console.log(filter);

// let er = users.sort((word1,word2) => word2.name.length - word1.name.length);
// console.log(er);


// function cloneDeepObj(cloneObj, object) {
//     for (const key in object) {
//         if (typeof object[key] === 'object') {
//             cloneObj[key] = cloneDeepObj({}, object[key]);
//         } else {
//             cloneObj[key] = object[key];
//         }
//     }
//     return cloneObj;
// }
//
// let cloneUser = cloneDeepObj([{}], users);
// cloneUser.map((user, index) => user.id = index + 1)
// cloneUser.sort((a, b) => b.id - a.id);
// console.log(cloneUser);


// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calcul(a, b, callback) {
//     console.log(callback(a, b));
//
// }
//
// calcul(10, 20, function (a, b) {
//     return a + b;
// });
//
// function calculTreeNimber(a, b, c, callback) {
//     console.log(callback(a, b, c));
// }
//
// calculTreeNimber(10, 2, 20, function (a, b, c) {
//     return a * b + c;
// });


// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// let volumeBig = cars.filter(item => item.volume > 3);
// let volumeBig = cars.filter(item => item.volume === 2);
// let volumeBig = cars.filter(item => item.producer === 'mercedes');
// let volumeBig = cars.filter(item => item.producer === 'mercedes' && item.volume >= 3);
// let volumeBig = cars.filter(item => item.producer === 'subaru' && item.volume >= 3);
// let volumeBig = cars.filter(item => item.power >= 300);
// let volumeBig = cars.filter(item => item.power >= 300 && item.producer === 'subaru');
// let volumeBig = cars.filter(item => item.engine.indexOf('ej')> -1);
// let volumeBig = cars.filter(item => item.engine.indexOf('ej')> -1 && item.producer === 'subaru' && item.power >= 300);
// let volumeBig = cars.filter(item => item.volume < 3 && item.producer === 'mercedes');
// let volumeBig = cars.filter(item => item.volume > 2 && item.power > 250);
// let volumeBig = cars.filter(item => item.producer > 'bmw' && item.power > 250);

// console.log(volumeBig);


// - взять слдующий массив

// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный


// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//     ];

// let userSort = usersWithAddress.sort((user1, user2) => user1.id - user2.id );
// let userSort = usersWithAddress.sort((user1, user2) => user2.id - user1.id );
// let userSort = usersWithAddress.sort((user1, user2) => user1.age - user2.age );
// let userSort = usersWithAddress.sort((user1, user2) => user2.age - user1.age );
// let userSort = usersWithAddress.sort((a, b) => a.name > b.name ?  1: a.name < b.name ? -1: 0);
// let userSort = usersWithAddress.sort((a, b) => a.name > b.name ?  -1: a.name < b.name ? 1: 0);
// let userSort = usersWithAddress.sort((user1, user2) => user1.address.number - user2.address.number );
// let userSort = usersWithAddress.filter(user => user.age < 30);
// let userSort = usersWithAddress.filter(user => user.status === false);
// let userSort = usersWithAddress.filter(user => user.status === false && user.age < 30);
// let userSort = usersWithAddress.filter(user => user.address.number % 2 === 0);

// console.log(userSort);


// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// let carPark = [
//     {producer: 'Honda', model: 'Accord', engine: 100, price: 8000, year: 2011, driver: {name: 'Andrey', age: 23, experience: 2}},
//     {producer: 'Porsche', model: 'Cayman S', year: 2020, engine:100, price: 58000, driver: {name: 'Sara', age: 27, experience: 4}},
//     {producer: 'Chevrolet', model: 'Impala', year: 1964, engine: 100, price: 28000, driver: {name: 'Din', age: 42, experience: 3}},
//     {producer: 'Ford', model: 'Shelby', year: 1970, engine: 100, price: 38000, driver: {name: 'Harrison', age: 61, experience: 40}},
//     {producer: 'Tesla', model: 'Cybertruck', year: 2019, engine: 100, price: 88000, driver: {name: ' Elon', age: 48, experience: 3}},
//     {producer: 'Opel', model: 'Vectra', year: 2001, engine: 100, price: 30000, driver: {name: ' Ivan', age: 29, experience: 1}},
//     {producer: 'Nissan', model: 'Skyline', year: 2007, engine: 100, price: 45000, driver: {name: ' Dominik', age: 32, experience: 5}},
//     {producer: 'Toyota', model: 'Camry', year: 2011, engine: 100, price: 23000, driver: {name: ' Momo', age: 31, experience:1}},
// ];
//
// carPark.forEach((car,index) =>{
// if (index % 2 === 0){
//      car.engine  = (car.engine / 100) * 10 + car.engine;
// }
// });
//
// // carPark.map(item => {
// //     let rnd = Math.random();
// //     if (item.engine > 100 && rnd >= 0.3){
// //         item.driver = {name: 'Jora', age: 22, experience: 4}
// //     }  if (rnd < 0.4 && item.engine > 100){
// //         item.driver = {name: 'Mikola', age: 23, experience: 2}
// //     } if ( rnd > 0.5 && item.engine > 100){
// //         item.driver = {name: 'Vasya', age: 26, experience: 6}
// //     }if ( rnd >= 0.6 && item.engine > 100){
// //         item.driver = {name: 'Imhotep', age: 15, experience: 2}
// //     }
// // });
// let cars = [];
// for (let i = 0; i < carPark.length; i++) {
//     const carParkElement = carPark[i];
//     if (carParkElement.engine > 100){
//         cars.push(carParkElement)
//     }
// }
//
// for (let i = 0; i < cars.length; i= i+2) {
//     const car = cars[i];
//     car.engine = (car.engine / 100) * 10 + car.engine;
//     car.price = (car.price / 100) * 5 + car.price;
// }
//
// let driver = carPark.filter(driver => driver.driver.experience < 5 && driver.driver.age > 25 );
//
// for (let i = 0; i < driver.length; i++) {
//     const driverElement = driver[i];
//     driverElement.driver.experience += 1;
//
// }
//
// let resultPrice = carPark.reduce((previousValue, currentValue) => {
//   return  previousValue + currentValue.price;
// },0);
//
// console.log(resultPrice);
// console.log(driver);
// // console.log(carPark);
//


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// Пример:

let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
function findElement(ar, index) {

    let maxIndex = Arr.lastIndexOf(index);
    document.write(`Max Index = ${maxIndex}`);
    for(let i = 0; i < ar.length; i++) {
        let  element = ar[i];
        if(element === index) {
            return document.write(` Min Index = ${i}`)
        }
    }
}
let number = findElement(Arr,4);
// console.log(number);





