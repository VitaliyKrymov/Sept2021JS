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

// let obj=[{id:1,name:'Vasia',age:19},{id:2,name:'Oleg',age:49},{id:3,name:'Ivan',age:35}];
//
// function printObj(object){
//     for (const objectElement of object) {
//         document.write(`${objectElement.id}`)
//         document.write(`<ul>`)
//         for (const objectElementKey in objectElement) {
//             document.write(`<li>${objectElementKey}-${objectElement[objectElementKey]}</li>`);
//         }
//         document.write(`</ul>`)
//     }
// }
// printObj(obj);

                                                // CLASSWORK
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c,) {
//     let min=a;
//     if (b<min){min=b}
//     if(c<min){min=c}
//     console.log(min)
// }
// min(1, 5, 0);
// min(-1, 7, 1);
// min(3, 0, -9);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c,) {
//     let max=a;
//     if (b>max){max=b}
//     if(c>max){max=c}
//     console.log(max)
// }
// max(1, 5, 0);
// max(-1, 7, 1);
// max(3, 0, -9);

// - створити функцію яка повертає найбільше число з масиву
// let arrNum=[1, 2, 3, 4, 5, 34, 76, 67, 55, 4, 4, 32, 234];
// function maxNumberOfArray(array){
//     let maxNum=array[0];
//     for (const arrayElement of array) {
//         if(maxNum<arrayElement){maxNum=arrayElement}
//     }
//     console.log(maxNum);
//     return maxNum;
// }
// maxNumberOfArray(arrNum);

// - створити функцію яка повертає найменьше число з масиву
// let arrNum=[1, 2, 3, 4, 5, -34, 76, 67, 55, 4, 4, 32, 234];
// function maxNumberOfArray(array){
//     let minNum=array[0];
//     for (const arrayElement of array) {
//         if(minNum>arrayElement){minNum=arrayElement}
//     }
//     console.log(minNum);
//     return minNum;
// }
// maxNumberOfArray(arrNum);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrNum=[1, 2, 3, 4, 5];
// function SumOfArray(array){
//     let sum=0;
//     for (const arrayElement of array) {
//         sum=sum+arrayElement;
//     }
//     console.log(sum);
//     return sum;
// }
// SumOfArray(arrNum);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrNum=[1, 2, 3, 4, 5];
// function averegeOfArray(array){
//     let sum=0;
//     let i=0;
//     for (const arrayElement of array) {
//         sum=sum+arrayElement;
//         i++;
//     }
//     console.log(sum/i);
//     return sum/i;
// }
// averegeOfArray(arrNum);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].