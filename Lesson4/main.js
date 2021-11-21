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

// let arrMixNumStrBool = [1, "Vasia", 3, 4, 5, true, 76, 67, false, 4, 4, "Ira", 234];
//
// function arrMix(arrayMixs) {
//     document.write(`<ul>`)
//     for (const arrayMix1 of arrayMixs) {
//         if (typeof arrayMix1 == 'string') {
//             document.write(`<li>😎 ${arrayMix1}</li>`)
//         } else {
//             document.write(`<li>${arrayMix1}</li>`)
//         }
//     }document.write(`</ul>`)
// }
// arrMix(arrMixNumStrBool);


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

// function minNumber(a, b, c,) {
//     let min=a;
//     if (b<min){min=b}
//     if(c<min){min=c}
//     console.log(min)
// }
// minNumber(1, 5, 0);
// minNumber(-1, 7, 1);
// minNumber(3, 0, -9);


// function minNumber(a, b, c,) {
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
//
// console.log(minNumber(1, 5, 0));
// console.log(minNumber(-1, 7, 1));
// console.log(minNumber(3, 0, -9));
// console.log(minNumber(3, 3, 3));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// variant1
// function maxNumber(a, b, c,) {
//     let max=a;
//     if (b>max){max=b}
//     if(c>max){max=c}
//    return max;
// }
//
// console.log(maxNumber(1, 5, 0));
// console.log(maxNumber(-1, 7, 1));
// console.log(maxNumber(3, 0, -9));

// variant2
//
// function maxNumber(a, b, c,) {
//     let max;
//     if (a > b && a > c) {
//          max = a;
//     }
//     if (b > a && b > c) {
//          max = b;
//     }
//     if (c > a && c > b) {
//          max = c;
//     }
//     if (a === b && a === c) {
//          max = a;
//     }
//     return max;
// }
//
// console.log(maxNumber(1, 5, 0)) ;
// console.log(maxNumber(-1, 7, 1));
// console.log(maxNumber(3, 0, -9));
// console.log(maxNumber(30, 30, 30));

// variant3

// function maxNumber(a, b, c,) {
//     let max=arguments[0];
//     for (const aElement of arguments) {
//       if (aElement > max){max=aElement}
//     }
//     return max;
// }
// console.log(maxNumber(1, 5, 0)) ;
// console.log(maxNumber(-1, 7, 1));
// console.log(maxNumber(3, 0, -9));
// console.log(maxNumber(30, 30, 30));


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
// let arrNum=[1, 2, 3, 4, 1000];
// function averegeOfArray(array){
//     let sum=0;
//     for (const arrayElement of array) {
//         sum=sum+arrayElement;
//     }
//     return sum/array.length;
// }
// console.log(averegeOfArray(arrNum)) ;

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function arrMinReturnMaxPrint(arrayMix) {
//     let min=arguments[0];
//     let max=arguments[0];
//    for (let i of arguments) {
//       if (min>i){min=i};
//       if (max<i){max=i};
//        }
//     document.write(max);
//     return min;
// }
// console.log(arrMinReturnMaxPrint(1, 3, 4, -5, 76, 67, 4, 4, 234));

// function arrMinReturnMaxPrint(arrayMix) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i of arguments) {
//         if (min > i) {
//             min = i
//         }
//         ;
//         if (max < i) {
//             max = i
//         }
//         ;
//     }
//     document.write(max);
//     return min;
// }
//
// console.log(arrMinReturnMaxPrint(1, 3, 4, -5, 76, 67, 4, 4, 234));

// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [];
// function randomArr(size,minNumber,maxNumber){
// let i=0;
// while (i<size){
//       arr[i] = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
//       i++;
// }
// return arr;
// }
//
// console.log(randomArr(10,100,-5));


// - створити функцію яка заповнює масив рандомними числами в діапазоні
// від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//  let arr = [];
// function randomArrLimit(size,minNumber,limit){
// let i=0;
// while (i<size){
//       arr[i] = Math.floor(Math.random() * (limit - minNumber + 1)) + minNumber;
//       i++;
// }
// return arr;
// }
//
// console.log(randomArrLimit(10,0,5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arrNum = [1, 2, 3, 4, 5];
// let newArr = [];
// function arrReverse(arr) {
//     let n = arr.length;
//     for (let i of arr) {
//         newArr[(n - 1)] = i;
//         n--;
//     }
//     return newArr;
// }
//
// console.log(arrReverse(arrNum));


//                                                                         ADDITIONAL


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function ifOneOrMoreArguments(first, second) {
//     console.log()
//     if (arguments.length === 1) {
//         document.write(`${first}<br>`);
//     }
//     if (arguments.length === 2){
//         document.write(`${first}+${second}=${first + second}`)
//     }
// }
// ifOneOrMoreArguments(4);
// ifOneOrMoreArguments(4,67);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let array1=[1,2,3,4,10];
// let array2=[2,3,4,5,9];
// let newArr = [];
//
// function sumatopArrs(arr1,arr2){
//     for ( i = 0; i < arr1.length ; i++) {
//         newArr[i]=arr1[i]+arr2[i];
//     }
//     return newArr;
// }
//
// console.log(sumatopArrs(array1,array2));
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arrOfObjects=[{name: 'Dima', age: 13}, {model: 'Camry'},{price:19000,year:2020}];
// let newArr = [];
// function keysOfArr(arr){
//     let i=0;
//     for (const arrElement of arr) {
//         let oneObject=arrElement;
//         for (const oneObjectKey in oneObject) {
//             newArr[i]=oneObjectKey;
//             i++
//         }
//     }
//     return newArr;
// }
// console.log(keysOfArr(arrOfObjects));

//variant2
// let arrOfObjects=[{name: 'Dima', age: 13}, {model: 'Camry'},{price:19000,year:2020}];
// let newArr = [];
// function keysOfArr(arr){
//        for (const arrElement of arr) {
//         let oneObject=arrElement;
//         for (const oneObjectKey in oneObject) {
//             newArr.push(oneObjectKey);
//         }
//     }
//     return newArr;
// }
// console.log(keysOfArr(arrOfObjects));
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arrOfObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}, {price: 19000, year: 2020}];
// let newArr = [];
//
//variant1

// function valueOfArr(arr) {
//     let i = 0;
//     for (const arrElement of arr) {
//         let oneObject = arrElement;
//         for (const fild in arrElement) {
//             newArr[i] = oneObject[fild];
//             i++
//         }
//     }
//         return newArr;
//     }
//     console.log(valueOfArr(arrOfObjects));

//variant2

// let arrOfObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}, {price: 19000, year: 2020}];
// let newArr = [];
//
// function valueOfArr(arr) {
//     for (const arrElement of arr) {
//         let oneObject = arrElement;
//         for (const fild in arrElement) {
//             newArr.push(oneObject[fild]);
//         }
//     }
//     return newArr;
// }
//
// console.log(valueOfArr(arrOfObjects));