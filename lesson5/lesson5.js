// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select


// function Teg(title, description, atribute) {
//     this.title = title;
//     this.description = description;
//     this.atribute = atribute;
// }
//  let tegA = new Teg('<a>','предназначен для создания ссылок',[
//      {name: 'href', description:'Задает адрес документа, на который следует перейти.'},
//      {name: 'accesskey', description:'Активация ссылки с помощью комбинации клавиш.'},
//      {name: 'coords', description:'Устанавливает координаты активной области.'},
//  ]);
//
// let tegDiv = new Teg('<div>','является блочным элементом',[
//     {name: 'align', description:'Задает выравнивание содержимого тега div'},
//     {name: 'title', description:'Добавляет всплывающую подсказку к содержимому.'},
// ]);
//
// let tegH1 = new Teg('<h1>','Заголовок первого уровня',[
//     {name: 'class', description:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {name: 'id', description:'Указывает имя стилевого идентификатора.'},
// ]);
// console.log(tegH1);
// console.log(tegDiv);
// console.log(tegA);

// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
//
// class TagName {
//     constructor(title, description, atribute) {
//         this.title = title;
//         this.description = description;
//         this.atribute = atribute;
//     }
//
//
//
//     showTag(){
//         document.write(`${this.title} -- ${this.description},<br> Мої атрибути "${this.atribute[0].name}" -- ${this.atribute[0].description} <br> `);
//         document.write (`${this.atribute[1].name} -- ${this.atribute[1].description} <br>`)
//     }
// }
// let aTag = new TagName('a','предназначен для создания ссылок',[
//      {name: 'href', description:'Задает адрес документа, на который следует перейти.'},
//      {name: 'accesskey', description:'Активация ссылки с помощью комбинации клавиш.'},
//      {name: 'coords', description:'Устанавливает координаты активной области.'},
//  ]);
//
// aTag.showTag();
// console.log(aTag);
//
//
// let tagH1 = new TagName ('div','является блочным элементом',[
//     {name: 'align', description:'Задает выравнивание содержимого тега div'},
//     {name: 'title', description:'Добавляет всплывающую подсказку к содержимому.'},
// ]);
//
// tagH1.showTag();
// console.log(tagH1);


// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


//
// let car = {
//     model:'Porsche 911',
//     producer: 'Germany',
//     year: 2019,
//     maxSpeed: 306,
//     engine:2981,
//     drive: function () {
//             document.write(`їдемо зі швидкістю ${this.maxSpeed}/km на годину <br>`)},
//     info : function () {
//         document.write(`Моя машина ${this.model}, її зробили в ${this.producer} ${this.year}, Об'єм двигуна ${this.engine} куб. см.`)
//
//     }
// };
//
// car.drive();
// car.info();
// car.maxSpeed = 'newSpeed';
// car.year = 'newValue';
// car.driver = {
//     name: 'Jorik',
//     age: 16
// };
// console.log(car);
//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
//     рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// =========================================


// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         document.write(`їдемо зі швидкістю ${this.maxSpeed}/km на годину <br>`)
//     };
//
//     this.info = function () {
//         document.write(`Моя машина ${this.model}, її зробили в ${this.producer} ${this.year}, Об'єм двигуна ${this.engine} куб. см.`)
//     };
// }
// let jiguli = new Car('Жигуль','СССР','1986','100','900');
//
// console.log(jiguli);
// jiguli.drive();
// jiguli.info();

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
//


// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Peopple {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
function Human(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let сinderella = [
    new Human('Gosha', '27', 44),
    new Human('Aga', '44', 36),
    new Human('Basia', '32', 40),
    new Human('Dorota', '22', 37),
    new Human('Paulina', '33', 38),
    new Human('Kinga', '25', 35),
    new Human('Edyta', '21', 45),
    new Human('Anna', '45', 42),
    new Human('Natalia', '53', 34),
    new Human('Akimonan', '38', 35),
];

let сinderellaMan = [
    new Human('Przemek', 23, 37)
];

function myСinderella(array1, array2) {
    let littleFoot = [];
    for (const element of array1) {
        for (const element2 of array2) {
            if (element.footSize === element2.footSize) {
                element.maried = element2;
                littleFoot.push(element);
                document.write(`<h1>${element2.name} знайшов свою принцесу її звати ${element.name}</h1>`);
            }
        }
    }
    return littleFoot;
}

let myСinderella1 = myСinderella(сinderella,сinderellaMan);
console.log(myСinderella1);
