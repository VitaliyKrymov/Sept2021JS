// HOMEWORK

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function sRectangle(a, b) {
//     return a + b;
// }
//
// console.log(sRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function sRound(r) {
//     return 3.14 * r * r;
// }
//
// console.log(sRound(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function sSilindr(r, h) {
//     return 3.14 * 2 * r * h;
// }
//
// console.log(sSilindr(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function printArr(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }

// printArr([1, 2, 3, 4, 5, 34, 76, 67, 55, 4, 4, 32, 234]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function criateParagraph(text) {
//     document.write(`<p>${text}</p>`)
// }

// criateParagraph('jsagflk');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function criateUlLi(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
//
// criateUlLi('jsagflksdjkvalsdhvbnm');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function criateUlLiHowLi(text, howLi) {
//     document.write(`<ul>`)
//     for (let i = 0; i < howLi; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// criateUlLi('jsagflksdjkvalsdhvbnm', 4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrMixNumStrBool=[1, "Vasia", 3, 4, 5, true, 76, 67, false, 4, 4, "Ira", 234];
//
// function arrMix(arrayMixs) {
//     document.write(`<ul>`)
//
//     for (const arrayMix1 of arrayMixs) {
//         document.write(`<li>${arrayMix1}</li>`)
//     }
//     // for (const i of arrayMix) {
//     //
//     //
//     // }
//     document.write(`</ul>`)
//     console.log(n)
// }
// arrMix(arrMixNumStrBool);



// function arrMix(arrayMix) {
//     document.write(`<ul>`)
//    for (let i of arguments) {
//         document.write(`<li>${i}</li>`)
//            }
//     document.write(`</ul>`)
//     console.log(n)
// }
//
// arrMix(1, "Vasia", 3, 4, 5, true, 76, 67, false, 4, 4, "Ira", 234);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let obj=[{id:1,name:'Vasia',age:19},{id:1,name:'Vasia',age:19},{id:1,name:'Vasia',age:19}]