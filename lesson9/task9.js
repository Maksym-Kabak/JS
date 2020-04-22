
//Зробити свій розпоряжок дня.
//Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//Тобто, як приклад
// Прокинулись - Поснідали - Зібрались -
// ПОїхали на роботу - Працююєте - Пообідали
// Працюєте - Випили кави -
// Працюєте - Поїхали до дому -
// Повчились - Лягли спати.
// Кожна функція має мати якесь успіше або не успішне виконання.
// Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу.
// Або йдучи на обід ви забули гаманець і лишились голодні.



//
//
// function myDay(isWorkDay, cb) {
//     setTimeout(() => {
//         if (isWorkDay) {
//             cb(null, 'Time to work')
//         } else {
//             cb('I can sleep')
//         }
//     }, 2000)
// }
//
// function haveBreakfast(isEat, cb) {
//     setTimeout(() => {
//         if (isEat) {
//             cb(null, 'soft-boiled egg')
//         } else {
//             cb('forgot to buy products')
//         }
//     }, 1000)
// }
//
// function goToWork(money, cb) {
//     setTimeout(() => {
//         if (money) {
//             cb(null, 'going to work')
//         } else {
//             cb('forgot money')
//         }
//     }, 3000)
// }
//
// function work(hardWorking, cb){
//     setTimeout(()=>{
//         if(hardWorking){
//             cb(null, 'no time to relax')
//         } else {
//             cb('quarantine work at home DUDE!')
//         }
//     },3000)
// }
//
// function coffeeBreak(coffee,cb) {
// setTimeout(()=>{
//     if(coffee){
//         cb(null,'doppio coffee for energy')
//     }else{
//         cb('no coffee for you')
//     }
// },3000)
// }
//
// function afterWork(rewards,cb) {
//     setTimeout(()=>{
//         if(rewards >= 200){
//             cb(null,'I will take a taxi')
//         }else{
//             cb('I will go home on foot')
//         }
//     },3000)
// }
//
// function atHome(time,cb) {
// setTimeout(()=>{
//     if(time === '20:00'){
//         cb(null,'its time to study')
//     }else {
//         cb('Go sleep!')
//     }
// },3000)
// }
//
// function sleep(goodDay,cb){
//     setTimeout(()=>{
//         if(goodDay){
//             cb(null, ' You are the best  can relax and sleep')
//         }else {
//             cb('You lazy work more')
//         }
//     },3000)
// }
//


// myDay(true,(err,data)=>{
//     if(err){
//         console.log(err, ' in Morning');
//     } else {
//         console.log(data);
//         haveBreakfast(true,(err,data)=>{
//             if(err){
//                 console.log(err, 'Breakfast collapse');
//             }else {
//                 console.log(data);
//                 goToWork(true,(err,data)=>{
//                     if(err){
//                         console.log(err, 'cant go work');
//                     }else {
//                         console.log(data);
//                         work(true,(err,data)=>{
//                             if(err){
//                                 console.log(err, ' work is break');
//                             }else{
//                                 console.log(data);
//                                 coffeeBreak(true,(err,data)=>{
//                                     if(err){
//                                         console.log(err, ' coffee empty');
//                                     }else {
//                                         console.log(data);
//                                         afterWork(300,(err,data)=>{
//                                             if(err){
//                                                 console.log(err, ' money false');
//                                             }else {
//                                                 console.log(data);
//                                                 atHome('20:00',(err,data)=>{
//                                                     if(err){
//                                                         console.log(err, ' home false');
//                                                     }else{
//                                                         console.log(data);
//                                                         sleep(false,(err,data)=>{
//                                                             if(err){
//                                                                 console.log(err, ' sleep false')
//                                                             }else {
//                                                                 console.log(data);
//                                                                 console.log('FINISH : repeat tomorrow')
//                                                             }
//                                                         });
//
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
//
// });

//
// function myDay(isWorkDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkDay) {
//                 resolve( 'Time to work')
//             } else {
//                 reject('I can sleep')
//             }
//         }, 2000)
//     })
// }
// function haveBreakfast(isEat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isEat) {
//                 resolve( 'soft-boiled egg')
//             } else {
//                 reject('forgot to buy products')
//             }
//         }, 1000)
//     })
// }
// function goToWork(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money) {
//                 resolve('going to work')
//             } else {
//                 reject('forgot money')
//             }
//         }, 3000)
//     })
// }
// function work(hardWorking){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(hardWorking){
//                 resolve('no time to relax')
//             } else {
//                 reject('quarantine work at home DUDE!')
//             }
//         },3000)
//     })
// }
// function coffeeBreak(coffee) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (coffee) {
//                 resolve( 'doppio coffee for energy')
//             } else {
//                 reject('no coffee for you')
//             }
//         }, 3000)
//     })
// }
// function afterWork(rewards) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             rewards = 300;
//             if(rewards >= 200){
//                 resolve('I will take a taxi')
//             }else{
//                 reject('I will go home on foot')
//             }
//         },3000)
//     })
// }
// function atHome(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             time = '20:00';
//             if(time === '20:00'){
//                 resolve('its time to study')
//             }else {
//                 reject('Go sleep!')
//             }
//         },3000)
//     })
//
// }
// function sleep(goodDay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(goodDay){
//                 resolve(' You are the best  can relax and sleep')
//             }else {
//                 reject('You lazy work more')
//             }
//         },3000)
//     })
// }
//
//
// myDay(true)
//     .then(value => {
//         console.log(value);
//         return haveBreakfast(value)
//     })
//     .then(value => {
//         console.log(value);
//         return goToWork(value)
//     })
//     .then(value => {
//         console.log(value);
//         return work(value)
//     })
//     .then(value => {
//         console.log(value);
//         return coffeeBreak(value)
//     })
//     .then(value => {
//         console.log(value);
//         return afterWork(value)
//     })
//     .then(value => {
//         console.log(value);
//         return atHome(value)
//     })
//
//     .then(value => {
//         console.log(value);
//         return sleep(value)
//     })
//     .then(value => {
//         console.log(value);
//     })
//
//     .catch(reason => {
//         console.log(reason);
//     });
//
//

















