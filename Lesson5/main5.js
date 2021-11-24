                                                        // homework

// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let sRectangle = (b, h) => b * h;
// console.log(sRectangle(10,20));

// - створити функцію яка обчислює та повертає площу кола

// let sCircle = (diameter) => Math.PI*diameter*diameter/4;
// console.log(sCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру
//
// let sCircle = (diameter) => Math.PI*diameter*diameter/4;
// let sCylinder=(diameter,heightCylinder)=> sCircle(diameter)*2+Math.PI*heightCylinder*diameter;
// console.log(sCylinder(10,10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr=[1,2,'jsgdf;gjh',8];
// let printArr= (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// printArr(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let criareParagraph=(text)=> document.write(`<p>Hello  ${text} 👋</p>`);
//
// criareParagraph('Vasia');
// criareParagraph('Petia');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let criareUlWithLi=(text)=> {
//     document.write(`<ul>`);
//         document.write(`<li>Hello  ${text} 👋</li>`);
//         document.write(`<li>Hello  ${text} 👋</li>`);
//         document.write(`<li>Hello  ${text} 👋</li>`);
//     document.write(`</ul>`);
// }
// criareUlWithLi('Vasia');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let criareUlWithLiN=(text,n)=> {
//     document.write(`<ul>`);
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>Hello  ${text} 👋</li>`);
//     }
//         document.write(`</ul>`);
// }
//
// criareUlWithLiN('Vasia',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let createList = (...arr) => {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         for (const arrElementElement of arrElement) {
//             document.write(`<li>${arrElementElement}</li>`);
//         }
//     }
//     document.write(`</ul>`);
// }
//
// let array=['Vasia',3,false,'true',568,90,true]
// createList(array);

// якщо масив змішаний

// let createList = (...arr) => {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         for (const arrElementElement of arrElement) {
//             if (typeof arrElementElement !== 'object') {
//                 document.write(`<li>${arrElementElement}</li>`)
//             } else {
//                 for (const arrElementElementKey in arrElementElement) {
//                     document.write(`<li>${arrElementElement[arrElementElementKey]}🚗</li>`);
//                 }
//             }
//         }
//     }
//     document.write(`</ul>`);
// }
// let array = ['Vasia', 33, {car: 'Ford',model:"FUSION",year:2011}, false, 'true',{hobby:'Cars'}]
// createList(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let createBlock = (...arr) => {
//     for (const arrElement of arr) {
//         for (const arrElementElement of arrElement) {
//             document.write(`<div style="background-color: rgba(198,232,245,0.9)"><br>`)
//                 for (const arrElementKey in arrElementElement) {
//                     document.write(`<span><b>${arrElementElement[arrElementKey]}</b></span><span> </span>`);
//                 }
//         document.write(`</div>`);
//             }
//         }
// }
// let array = [{id:1,name:'Vasia',age:33},{id:2,name:'Petia',age:30},{id:3,name:'Oleg',age:23}];
// createBlock(array);

// classwork
// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber=(a, b, c) =>{
//     let min;
//     if (a < b && a < c) {
//          min = a;
//     }
//     if (b < a && b < c) {
//          min = b;
//     } else {
//          min = c;
//     }
//    return min;
// }
// console.log(minNumber(90,0,-90));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNumber=(a, b, c)=> {
//     let max=a;
//     if(b >= max){max=b};
//     if(c >= max){max=c};
//     return max;
// }
// console.log(maxNumber(-1, 5, 0)) ;
// console.log(maxNumber(10, 0, -1)) ;
// console.log(maxNumber(0, -1, 15)) ;

// - створити функцію яка повертає найбільше число з масиву// - створити функцію яка повертає найменьше число з масиву

// let maxNumberOfArray=(...arr)=>{
//     let max;
//     for (const arrElement of arr) {
//          max = arrElement[0];
//         for (const oneElement of arrElement) {
//             if (oneElement > max) {
//                 max = oneElement;
//             }
//         }
//     }
//     return max;
// }
//
// let arrNumbers=[1,0,45,-3,0,29,80,70];
// console.log(maxNumberOfArray(arrNumbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summNumbersOfArray=(...arr)=>{
//     let summ=0;
//     for (const arrElement of arr) {
//            for (const oneElement of arrElement) {
//                 summ = summ+oneElement;
//         }
//     }
//     return summ;
// }
//
// let arrNumbers=[1,0,5,-3,0,3,4];
// console.log(summNumbersOfArray(arrNumbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let averegeOfArray=(...arr)=>{
//     let summ=0;
//     let lengthOfArray;
//     for (const arrElement of arr) {
//          lengthOfArray = arrElement.length;
//            for (const oneElement of arrElement) {
//                 summ = summ+oneElement;
//         }
//     }
//     return summ/lengthOfArray;
// }
//
// let arrNumbers=[1,0,5,-3,0,3,4];
// console.log(averegeOfArray(arrNumbers));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
//
// let generateRandomNumbersAndAddToArr=(size,minNumber,maxNumber)=>{
// let i=0;
// while (i<size){
//       arr[i] = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
//       i++;
// }
// return arr;
// }
//
// console.log(generateRandomNumbersAndAddToArr(10,0,100));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
// let randomArrWithLimit = (size, minNumber, limit) => {
//     let i = 0;
//     while (i < size) {
//         arr[i] = Math.floor(Math.random() * (limit - minNumber + 1)) + minNumber;
//         i++;
//     }
//     return arr;
// }
//
// console.log(randomArrWithLimit(5, 0, 99));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let reversArr = (...arr) => {
//     let lenghtOfArr;
//     let box;
//     for (const arrElement of arr) {
//         lenghtOfArr = arrElement.length;
//         for (let i = lenghtOfArr-1, k=0; i >= lenghtOfArr/2; i--,k++) {
//             box=arrElement[i];
//             arrElement[i]=arrElement[k];
//             arrElement[k]=box;
//         }
//         return arrNumbers
//     }
// }
// let arrNumbers=[1,2,3,4,5,6,7,8,9];
// console.log(reversArr(arrNumbers))


//ADDITIONAL


// - Дано натуральное число n. Выведите все числа от 1 до n.

// let naturNambers = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
//
// naturNambers(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let printArrAtoB = (a, b) => {
//     if (a < b) {
//         for (let i=a; i<=b;i++) {
//             console.log(i);
//         }
//     }
//     else if (a > b) {
//         for (let i=a; i>=b;i--) {
//             console.log(i);
//         }
//     } else {
//         console.log('A=B')
//     }
// }
//
// printArrAtoB(20,10);
// printArrAtoB(1,9);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function changeArr(arr, i) {
//     let box = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = box;
//     return arr;
// }
//
// arr=[9,8,0,4];
// console.log(changeArr(arr,0));

// arr=[9,8,0,4];
// console.log(changeArr(arr,1));

// arr=[9,8,0,4];
// console.log(changeArr(arr,2));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


function moveZeroToEndOfArr(arr) {
    let address = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            address = i;
            for (let j = address; j < length - 1; j++) {
                if (arr[j + 1] !== 0) {
                    arr[address] = arr[j + 1];
                    arr[j + 1] = 0;
                    j = length;
                }
            }
        }
    }
}

array = [9, 8, 0, 4, 9, 0, 3, 0, 1, 10, 90, 0, 33];
moveZeroToEndOfArr(array);
console.log(array)


