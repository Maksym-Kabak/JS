// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textArr = document.getElementById('text');
// textArr.value = localStorage.getItem('arrText');
// textArr.oninput = (ev) => {
//     localStorage.setItem('arrText', ev.target.value);
// };


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let form1 = document.getElementById('form1');
// getForm(form1);
//
// function saveForm(item) {
//     setForm(item)
// }
//
// function setForm(form) {
//     for (let i = 0; i < form.length; i++) {
//         if (form.children[i].type === 'checkbox' || form.children[i].type === 'radio')
//             form.children[i].value = form.children[i].checked;
//         localStorage.setItem(form.children[i].id, form.children[i].value);
//     }
// }
//
// function getForm(form) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(form.children[i].id)) {
//             form.children[i].value = localStorage.getItem(form.children[i].id);
//             if (form.children[i].value === 'true') {
//                 form.children[i].setAttribute('checked', 'checked')
//             }
//         }
//
//     }
// }


//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются"
// (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


let text = document.getElementById('text');
let arrow_left = document.getElementById('arrow_left');
let arrow_right = document.getElementById('arrow_right');
let save = document.getElementById('save');

save.onclick = () => {
    localStorage.setItem(localStorage.length + 1, text.value)
};
arrow_left.onclick = () => {
    arrow_right.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === text.value) {
                index = key;
            }
        }
    }
    if (index === '1') {
        arrow_left.style.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(index - 1);
};

arrow_right.onclick = () => {
    arrow_left.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === text.value) {
                index = key;
            }
        }
    }
    if (index === localStorage.length.toString()) {
        arrow_right.style.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(+index + 1);
};




















