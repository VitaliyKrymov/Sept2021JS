//Homework
// Все робити за допомоги js.
// - створити блоk
// let h1=document.createElement('h1')   ;

//     - додати йому класи wrap, wrap, alpha, beta
// h1.innerText='Hello';
// h1.classList.add('wrap','wrap','alpha','beta')  ;

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// h1.style.backgroundColor='silver';
// h1.style.width='200px';
// h1.style.color='green';
// h1.style.fontSize='40px';

// - додати цей блок в body.
// document.body.appendChild(h1);

// - клонувати його повністю, та додати клон в body.

// let h1Clone = h1.cloneNode(true);
// h1Clone.innerText='Vasia';
// document.body.insertBefore(h1Clone,h1);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// for (const string of arr) {
//     let li = document.createElement('li');
//     li.style.border = '1px solid red';
//     li.innerText = string;
//     let ul = document.getElementsByClassName('menu')[0];
//     console.log(ul);
//     ul.appendChild(li);
// }

// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let i=1;
// for (const course of coursesAndDurationArray) {
//
//     let div=document.createElement('div');
//     div.style.border='1px solid green';
//     div.style.margin='5px';
//     div.style.backgroundColor='silver';
//
//     let info=i+'. '+ course.title + '-   monthDuration - '+course.monthDuration;
//
//     div.innerText=info;
//     document.body.appendChild(div);
//     i++;
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let i=1;
// for (const course of coursesAndDurationArray) {
//     let lengthOfElements=4*course.monthDuration;
//
//     let div = document.createElement('div');
//     div.classList.add('item');
//     div.style.border = '1px solid green';
//
//     div.style.backgroundColor = 'silver';
//     div.style.flex='block';
//     document.body.appendChild(div);
//
//     let h1=document.createElement('h1');
//     h1.classList.add('heading');
//     h1.style.backgroundColor = 'yellow';
//     h1.innerText=i+'. '+course.title;
//     h1.style.minWidth= '200px'
//     h1.style.width=lengthOfElements +'%';
//     div.appendChild(h1);
//
//     let p=document.createElement('p');
//     p.classList.add('description');
//     p.style.backgroundColor = 'red';
//
//     p.innerText='monthDuration - '+course.monthDuration;
//     p.style.minWidth= '200px'
//     p.style.width = lengthOfElements + "%";
//     div.appendChild(p);
//     i++;
// }


// CLASSWORK
// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.

// for (const simpson of simpsons) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('member');
//     divElement.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`
//     document.body.appendChild(divElement);
// }

// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
//
// for (const simpson of simpsons) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('member');
//
//     let divName = document.createElement('div');
//     divName.innerText = simpson.name;
//
//     let divSurname = document.createElement('div');
//     divSurname.innerText = simpson.surname
//
//     let divAge = document.createElement('div');
//     divAge.innerText = simpson.age;
//
//     let pInfo = document.createElement('p');
//     pInfo.innerText = simpson.info;
//
//     let img = document.createElement('img');
//     img.src = simpson.photo
//
//
//     divElement.appendChild(divName);
//     divElement.appendChild(divSurname);
//     divElement.appendChild(divAge);
//     divElement.appendChild(pInfo);
//     divElement.appendChild(img);
//     document.body.appendChild(divElement);
// }

// - Є масив
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
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
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
//
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// for (const course of coursesArray) {
//
//     let courseElement = document.createElement('course');
//     let titleElement = document.createElement('h2');
//     titleElement.innerText = course.title;
//
//     let monthDurationElement = document.createElement('div');
//     monthDurationElement.innerText = course.monthDuration;
//     let hourDurationElement = document.createElement('div');
//     hourDurationElement.innerText = course.hourDuration;
//
//     let modulesElement = document.createElement('ul');
//
//     for (const moduleItem of course.modules) {
//         let module = document.createElement('li');
//         module.innerText = moduleItem;
//         modulesElement.appendChild(module);
//     }
//
//     courseElement.appendChild(titleElement);
//     courseElement.appendChild(monthDurationElement);
//     courseElement.appendChild(hourDurationElement);
//     courseElement.appendChild(modulesElement);
//     document.body.appendChild(courseElement);
// }