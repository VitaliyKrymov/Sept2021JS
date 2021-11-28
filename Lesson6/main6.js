//HOMEWORK
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str ='hello world';
// let lenghtOfString=(str) => str.length;
// console.log(lenghtOfString(str));
// console.log(lenghtOfString('lorem ipsum'));
// console.log(lenghtOfString('javascript is cool'));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str='hello world';
// let stringToUpperCase=(str)=>str.toUpperCase();
// console.log(stringToUpperCase(str));
// console.log(stringToUpperCase('lorem ipsum'));
// console.log(stringToUpperCase('javascript is cool'));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str='HELLO WORLD';
// let stringToLowerCase=(str)=>str.toLowerCase();
// console.log(stringToLowerCase(str));
// console.log(stringToLowerCase('LOREM IPSUM'));
// console.log(stringToLowerCase('JavaScript is Cool'));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str=' dirty string   ';
// let pureString=(str)=>str.trim();
//
// console.log(str);
// console.log(str.length);
// let newString=pureString(str);
// console.log(newString);
// console.log(newString.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str='Каждый охотник желает знать';
//  let stringToarray=(str)=>str.split(' ');
//  let arr = stringToarray(str);
// document.writeln(arr);
//  console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

//let str = 'Каждый охотник желает знать'
// let deleteCharacters=(str, length)=>{
//     return str.slice(0,7);
// }
// console.log(deleteCharacters(str));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash=(str)=>{
//    return  str.toUpperCase().split(' ').join('-');
// }
// document.writeln(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'каждый охотник желает знать'
// let upFirstLetter = (str) => {
//     let upFirstLetterUp = str.split('');
//     upFirstLetterUp[0] = upFirstLetterUp[0].toUpperCase();
//     return upFirstLetterUp.join('');
// }
// console.log(upFirstLetter(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'каждый охотник желает знать'
// let upFirstLetter = (str) => {
//     return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
// }
// console.log(upFirstLetter(str));

//CLASSWORK

//- Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

// let str = '...___Harry..__--Potter_.---';
// let normalize=(str)=>{
//    let arr= str.replaceAll('.',' ').replaceAll('_',' ').replaceAll('-',' ').split(' ');
//     let newStr = '';
//    for (let i=0;i<arr.length;i++){
//        if (arr[i] !== ""){  newStr =newStr +arr[i]+' '}
//    }
//     return newStr;
// }
// console.log(normalize(str));
// console.log(normalize('Hermione__Granger'));
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arr = [];
// let rardomizer=(size,max)=> {
//     for (let i = 0; i < size; i++) {
//         arr[i]=Math.round(Math.random()*max);
//     }
// }
// rardomizer(10,100);
// console.log(arr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let arr = [];
// let rardomizer=(size,max)=> {
//     for (let i = 0; i < size; i++) {
//         arr[i]=Math.round(Math.random()*max);
//     }
// }
// rardomizer(10,100);
// console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let arr = [];
// let rardomizerFilterPair = (size, max) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * max);
//     }
//     console.log(arr)
//     return arr.filter(value => value % 2 === 0);
// }
// console.log(rardomizerFilterPair(10, 100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [];
// let rardomizerReturnString = (size, max) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * max);
//     }
//     console.log(arr)
//     return arr.map(value => value +'');
// }
// console.log(rardomizerReturnString(10, 100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let arr = [];
// let rardomizerReturnString = (size, max,str) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * max);
//     }
//     console.log(arr)
//     return arr.sort((value1,value2) => { if (str=='asc'){return value1-value2}
//         else {return value2-value1}
//     });
// }
// console.log(rardomizerReturnString(10, 100,'des'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray = coursesAndDurationArray.sort((value1,value2) =>{
//         return value2.monthDuration-value1.monthDuration}
// );
// console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// coursesAndDurationArray = coursesAndDurationArray.filter(value => {
//     if (value.monthDuration > 5) {
//         return value
//     }
// });
// console.log(coursesAndDurationArray)


// ADDITIONAL

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let str = 'наслаждение';
// let newArr = [];
//
// function cutString(str, index) {
//     let newStr = "";
//     for (let i = 0; i < str.length; i = i + index) {
//         newStr = newStr + str.slice(i, i + index) + ',';
//     }
//     newArr.push(newStr);
//     return newStr;
// }
//
// document.writeln(cutString("наслаждение", 3));
// document.writeln(newArr);
// console.log(newArr)
//
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// function emailvalidator(email){
//     let chekEmail = email.trim();
//     let valid='email is valid';
//     let ravlikIndex=chekEmail.indexOf("@");
//     if(ravlikIndex <2 ){ valid="email not valid"}
//     let nayavnistRavlika=chekEmail.includes('@');
//     if (nayavnistRavlika === false){ valid="email not valid"};
//     let krapka=chekEmail.lastIndexOf(".");
//     if (krapka<ravlikIndex+3){valid="email not valid"};
//     return valid;
// }
//
// console.log(emailvalidator('someemail@gmail.com'));
// console.log(emailvalidator('someeMAIL@gmail.com'));
// console.log(emailvalidator('someeMAIL@i.ua'));
// console.log(emailvalidator('some.email@gmail.com'));

//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html','css','js','mysql','mongodb','angular','aws','docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// coursesArray = coursesArray.sort((value1,value2) =>{
//         return value2.modules.length-value1.modules.length}
// );
// console.log(coursesArray);
//
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// let counter= (str,symb) => {
//     let n = 0;
//     for (let i=0;i<str.length;i++){
//        if (str[i] == symb){  n++}
//         }
//     return n
// }
// document.writeln(counter(str,symb));

//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str="Сила тяжести приложена к центру масс тела";;
let stringToarray=(str,size)=>{
    return str.split(' ').slice(0,size).join(' ');
}

document.writeln(stringToarray(str,5));