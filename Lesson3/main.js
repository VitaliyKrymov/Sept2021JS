//                                                   Homework

// --створити масив з:
//     - з 5 числових значень

// let arrayNumber = [];
//      for (let i = 0; i < 5; i++) {
//          arrayNumber[i]=i*2;
//         }
// console.log(arrayNumber);

// - з 5 стічкових значень

// let arrayString = [];
// for (let i = 0; i < 5; i++) {
//     arrayString[i]= "House " + i*2+1;
// }
// console.log(arrayString);

// - з 5 значень стрічкового, числового та булевого типу

// let arrayMix = [];
// for (let i = 0; i < 5; i++) {
//     if (i % 3) {
//         arrayMix[i] = "Order " + i;
//     }
//     if(i%4 ) {
//         arrayMix[i] = 10 + i
//     }
//     if (i % 2) {
//         arrayMix[i] = true
//     }
//     if(!i % 4) {
//         arrayMix[i] = false
//     }
// }
//         console.log(arrayMix);
// - та вивести його в консоль

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let users = [];
// for (let i = 0; i < 10; i++) {
//     users[i] = "user "+(i+5)
//         }
// console.log(users);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>User ${i+1}</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>User ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=1;
// while (i<21) {document.write(`<h1>User ${i*i} </h1>`)
//     i++ }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=1;
// while (i<21) {document.write(`<h1>User- ${i} (index-${i}) </h1>`)
//     i++ }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let   arrayNumber1 = [12,12,456,789,56,77,66,6,0,-10];
// for (const number of arrayNumber1) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrStrings = ['Vasia', 'Olia', 'Roman', 'Sasha', 'Ura', 'Dima', 'Evgeniy', 'Ira', 'Sofia', 'Tania']
// for (const arrString of arrStrings) {
//     console.log(arrString)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrMixs = ['Vasia', true, 'Roman', 35, 'Ura', false, {name:'Evgeniy',age:23,key:1}, 'Ira', -100, 'Tania']
// for (const arrString of arrMixs) {
//     console.log(arrString)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrMixs = ['Vasia', true, 'Roman', 35, 'Ura', false, {name: 'Evgeniy', age: 23, key: 1}, 'Ira', -100, 'Tania']
// for (const arrMix of arrMixs) {
//     if (typeof (arrMix) === "boolean") {
//         console.log(arrMix)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrMixs = ['Vasia', true, 'Roman', 35, 'Ura', false, {name: 'Evgeniy', age: 23, key: 1}, 'Ira', -100, 'Tania']
// for (const arrMix of arrMixs) {
//     if (typeof (arrMix) === "number") {
//         console.log(arrMix)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arrMixs = ['Vasia', true, 'Roman', 35, 'Ura', false, {name: 'Evgeniy', age: 23, key: 1}, 'Ira', -100, 'Tania']
// for (const arrMix of arrMixs) {
//     if (typeof (arrMix) === "string") {
//         console.log(arrMix)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrayMix = [];
// for (let i = 0; i < 10; i++) {
//     if (i % 3) {
//         arrayMix[i] = "Order " + i;
//     }
//     if (i % 4) {
//         arrayMix[i] = 10 + i
//     }
//     if (i % 2) {
//         arrayMix[i] = true
//     }
//     if (!i % 4) {
//         arrayMix[i] = false
//     }
//     console.log(arrayMix[i]);
// }
// console.log(arrayMix);
//
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <10; i++) {
//     console.log(i + 1);
//     document.write(`${i+1} <br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <100; i++) {
//     console.log(i + 1);
//     document.write(`${i+1} <br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let n=0;
// for (let i = 0; i <200; i=i+2) {
//     console.log('iterasia '+ (n + 1)+ ' krok=2' +"  i= " + i);
//     document.write(`iterasia ${n+1} ___krok=2___ i=${i} <br>`);
//     n++;
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for (let i = 0; i < 100; i++) { console.log(i)
//     if ((i % 2)) {
//            console.log('парний крок i=' + (i));
//         document.write(`парний крок i=${i}  <br>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (!(i % 2)) {
//         console.log('непарний крок i=' + (i));
//         document.write(`непарний крок i=${i}  <br>`);
//     }
// }


// CLASSWORK


//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arrayNumbers.length) {
//     console.log(arrayNumbers[i]);
//     i++
// }

// в зворотньому циклі(с заду на перед)

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i=arrayNumbers.length-1;
// while (i>=0){
//     console.log(arrayNumbers[i]);
//     i--;
// }


// 2. перебрати його циклом
// for

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arrayNumbers.length; i++) {
//     console.log(arrayNumbers[i]);
// }

// в зворотньому циклі(с заду на перед)

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i =arrayNumbers.length-1 ; i >=0 ; i--) {
//     console.log(arrayNumbers[i]);
// }


// 3. перебрати циклом
// while та вивести числа тільки з непарним індексом

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arrayNumbers.length) {
//                       if (i % 2) {console.log(arrayNumbers[i])}
//  i++
// };

// в зворотньому циклі(с заду на перед)
// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i=arrayNumbers.length-1;
// while(i>=0){
//     if(i%2){
//         console.log(arrayNumbers[i])}
//     i--
// }


// 4. перебрати циклом
// for та вивести числа тільки з непарним індексом

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < arrayNumbers.length; i++) {
//     if (i % 2) {
//         console.log(arrayNumbers[i])
//     }
// }

// в зворотньому циклі(с заду на перед)
// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for ( i = arrayNumbers.length-1; i >=0; i--) {
//     console.log(arrayNumbers[i])
//     }


// 5. перебрати циклом
// while та вивести числа тільки парні значення

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arrayNumbers.length) {
//     if ( arrayNumbers[i] % 2 === 0 ) {
//         console.log( arrayNumbers[i] )
//     }
//    i++
//  }

// в зворотньому циклі(с заду на перед)
// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arrayNumbers.length-1;
// while (i >=0 ) {
//    if (!(arrayNumbers[i] % 2)){console.log(arrayNumbers[i])}
//    i--
//  }

// 6. перебрати циклом
// for та вивести числа тільки парні значення

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (const arrayNumber of arrayNumbers) {
//      if(!(arrayNumber%2)){
//          console.log(arrayNumber)
//      }
// }

// в зворотньому циклі(с заду на перед)
// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i=arrayNumbers.length-1;
// for (i;i>=0; i--){
//     if(!(arrayNumbers[i] % 2)){console.log(arrayNumbers[i])}
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i=0;
// for (let num of arrayNumbers){
//     if(!(num % 3)){arrayNumbers[i]='okten'}
//     i++;
// }
// console.log(arrayNumbers);

// в зворотньому циклі(с заду на перед)

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i=arrayNumbers.length-1;
// for (i;i>=0; i--){
//     if(!(arrayNumbers[i] % 3)){arrayNumbers[i]='okten'}
//     console.log(arrayNumbers[i]);
// }


// 8. вивести масив в зворотньому порядку.

// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i=arrayNumbers.length-1;i>=0;i--){
//     console.log(arrayNumbers[i])
// }

// 9. всі попередні завдання(окрім 8), але в зворотньому циклі(с заду на перед)


// ADDITIONAL


// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i <= 49; i++) {
//     if (i % 2 === 0 ){
//         arr[i] = i;
//     }
//     else{
//         arr[i] = i + 1;
//     }
//  }
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let arr = [];
// let i=0;
// while (i<50){
//     if (i % 2 ===0){
//         arr[i] = (i+2)*2-1;
//     }
//     else{
//         arr[i] = i;
//     }
//     i++
// }
// console.log(arr);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// let i=0;
// while (i<20){
//       arr[i] = Math.round(Math.random()*100);
//     i++
// }
// console.log(arr);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
// let i=0;
// while (i<20){
//       arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     i++
// }
// console.log(arr);


// 2. Вивести за допомогою console.log кожен третій елемен
// let arr = [];
// let i = 0;
// while (i < 20) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     if (i % 3 === 0 && i !==0) {
//         console.log(arr[i-1]);
//     }
//     i++
// }
// console.log(arr);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arr = [];
// let i = 0;
// while (i < 20) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     if (i % 3 ===0 && i !==0) {
//            if (arr[i-1] % 2 ===0) {
//                 console.log(arr[i-1])
//             }
//     }
//         i++
//     }
//     console.log(arr);


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [];
// let arrNew = [];
// let k = 0;
// let i = 0;
// while (i < 20) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     if (i % 3 === 0 && i !== 0) {
//         if (arr[i - 1] % 2 === 0) {
//             arrNew[k] = arr[i - 1];
//             k++
//         }
//     }
//     i++
// }
// console.log(arr);
// console.log(arrNew);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         if (i < arr.length - 1) {
//             console.log(arr[i])
//         }
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let arr = [100,250,50,168,120,345,188];
// let summ=0;
// let seredniyChek=0;
// for (i = 0; i < arr.length; i++) {
//    summ=summ+arr[i];
//     console.log(summ)
// }
// console.log(seredniyChek=summ/arr.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = [];
// let arrNew = [];
// let i=0;
// while (i<20){
//       arr[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
//         arrNew[i]=arr[i]*5;
//     i++
// }
// console.log(arr);
// console.log(arrNew);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//  let arr = [100,true,250,false,{age:16},"120",345,"188"];
// let arrNew = [];
// let i=0;
// for (const arrElement of arr) {
//     if(typeof arrElement ==='number'){
//     arrNew[i]=arrElement;
//     i++
// }
// }
// console.log(arrNew);
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

//      let usersWithId = [
//          {id: 1, name: 'vasya', age: 31, status: false},
//          {id: 2, name: 'petya', age: 30, status: true},
//          {id: 3, name: 'kolya', age: 29, status: true},
//          {id: 4, name: 'olya', age: 28, status: false}
//      ];
//
//  let citiesWithId = [
//      {user_id: 3, country: 'USA', city: 'Portland'},
//      {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//      {user_id: 2, country: 'Poland', city: 'Krakow'},
//      {user_id: 4, country: 'USA', city: 'Miami'}
//  ];
//
//  let newArr=[];
// let i=0;
// for (const user of usersWithId) {
//     for (const address of citiesWithId) {
//         if(user.id === address.user_id){
//             newArr[i]=user;
//             newArr[i].address=address;
//         }
//     }i++
// }
// console.log(newArr)

//
//
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
//  let word='';
// for (i=0;i<arr.length;i++) {
//     word=word+arr[i];
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let i=0;
// let word='';
// while (i<arr.length){
//     word=word+arr[i];
//     i++
// };
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
//  let word='';
// for (const string of arr) {
//     word=word+string;
// }
// console.log(word);
