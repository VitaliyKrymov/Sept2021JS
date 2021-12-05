// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let h1=document.getElementById('main_header');
// h1.classList.add('sept_2021');
// console.log(h1);

// b) робить ширини у елементу ul 400px
// let ulWith= document.getElementsByTagName('ul');
// ulWith[0].style.width='400px';
// ulWith[0].style.backgroundColor='silver';
// ulWith[0].style.border='1px solid green';


// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let withLinkListLi=document.getElementsByClassName('linkList');
// for (const li of  withLinkListLi) {
//     li.style.border='1px solid green';
//     li.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let textInListElement2= document.getElementsByClassName('listElement2');
// console.log(textInListElement2);
// console.log(textInListElement2[0].innerHTML);

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let changeLiColor = document.getElementsByTagName('li');
// for (const changeLiColorElement of changeLiColor) {
//     console.log(changeLiColorElement.innerHTML);
//     changeLiColorElement.style.margin = '5px';
//     changeLiColorElement.style.backgroundColor = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let allElementsA=document.getElementsByTagName('a');
// for (const ElementA of allElementsA) {
//     ElementA.classList.add('anchor')
//     console.log(ElementA);
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let allElementsA = document.getElementsByTagName('a');
// for (const elementA of allElementsA) {
//     if (elementA.innerText === 'link3') {
//         elementA.style.fontSize = '40px'
//     }
//     console.log(elementA);
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let addClassToElementsA=document.getElementsByTagName('a')
// for (const addClassToElementsAElement of addClassToElementsA) {
//     let xxx=addClassToElementsAElement.innerText;
//     console.log(xxx);
//     addClassToElementsAElement.classList.add('element_'+xxx);
//     console.log(addClassToElementsAElement);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeaderElementsChangeColor=document.getElementsByClassName('sub-header');
// for (const subHeaderElementsChangeColorElement of subHeaderElementsChangeColor) {
//     let i=Math.floor(Math.random()*2);
//     let color = prompt('Enter color name_'+i);
//     subHeaderElementsChangeColorElement.style.backgroundColor=color;
//      i++;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let allElementsChangeColorIf=document.getElementsByClassName('sub-header');
// for (const element of allElementsChangeColorIf) {
//     let content='content 2 segment';
//     if(element.innerText===content){
//         let color=prompt("Enter color name");
//         element.style.color=color;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let changeTextInElement = document.getElementsByClassName('content_1');
// console.log(changeTextInElement);
// for (const element of changeTextInElement) {
//     let text = prompt('write the text');
//     element.innerText=text;
// }


// let changeTextInElement = document.getElementsByClassName('content_1');
// changeTextInElement[0].innerText=prompt('write the text');


// l) отримати елементи p та змінити їм padding на 20px
// let changeSizeP=document.getElementsByTagName('p');
// for (const changeSizePElement of changeSizeP) {
//     changeSizePElement.style.padding='20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let changeTextClassText2=document.getElementsByClassName('text2');
// changeTextClassText2[0].innerText='sep-2021';