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


//                                                              ADDITIONAL

//- Є масив :

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

//Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

for (const user of usersList) {

    let divWrap = document.createElement('div');
    let clas = 'wrap' + user.id;
    divWrap.classList.add(clas);
    divWrap.style.width = '600px';
    divWrap.style.height = '40px';
    divWrap.style.alignItems = 'center';
    divWrap.style.background = 'silver';
    divWrap.style.border = '5px solid green';
    document.body.appendChild(divWrap);

    let divAddress = document.createElement('div');
    let addressClas = 'address' + user.id;
    divAddress.classList.add(addressClas);
    divAddress.style.width = '300px';
    divAddress.style.height = '130px';
    divAddress.style.border = '4px solid green';
    document.body.appendChild(divAddress);

    let divGeo = document.createElement('div');
    let geoClas = 'geo' + user.id;
    divGeo.classList.add(geoClas);
    divGeo.style.width = '300px';
    divGeo.style.height = '35px';
    divGeo.style.display = 'flex';
    divGeo.style.justifyContent = 'space-around';
    divGeo.innerText= 'Geo:';
    divGeo.style.border = '5px solid blue';
    document.body.appendChild(divGeo);

    let divCompany = document.createElement('div');
    let companyClas = 'company' + user.id;
    divCompany.classList.add(companyClas);
    divCompany.style.width = '600px';
    divCompany.style.display = 'flex';
    divCompany.innerText= 'Company:';
    divCompany.style.height = '80px';
    divCompany.style.border = '5px solid yellow';
    document.body.appendChild(divCompany);

    let divCriate = function (value) {
        let div = document.createElement('div');
        div.style.border = '1px solid red';
        div.innerText = value + '\u00A0 ' + '\u00A0 ';
        document.body.getElementsByClassName('header' + user.id)[0].appendChild(div);
    }

    let divHeaderFunction = function (value) {
        let divHeader = document.createElement('div');
        divHeader.style.border = '1px solid yellow';
        divHeader.classList.add('header' + user.id);
        divHeader.style.display = 'flex';
        divHeader.style.justifyContent = 'space-around';
        divHeader.style.alignItems = 'center';
        divHeader.style.height = '20px';
        document.getElementsByClassName(clas)[0].appendChild(divHeader);
    }

    let divAddressCreate = function (value) {
        let divAddress = document.createElement('div');
        divAddress.style.border = '1px solid pink';
        divAddress.classList.add('address' + user.id);
        divAddress.style.height = '30px';
        divAddress.innerText = value;
        document.getElementsByClassName(addressClas)[0].appendChild(divAddress);
    }
    let divGeoCreate = function (value) {
        let divGeo = document.createElement('div');
        divGeo.style.border = '1px solid pink';
        divGeo.classList.add('address' + user.id);
        divGeo.style.height = '30px';
        divGeo.style.width = '100px';
        divGeo.innerText = value;
        document.getElementsByClassName(geoClas)[0].appendChild(divGeo);
    }

    let blockCriate = function (value) {
        let div = document.createElement('div');
        div.style.border = '5px solid brown';
        div.style.height = '30px';
        div.style.width = '200px';
        div.innerText = value;
        document.body.appendChild(div);
    }

    let companyCriate = function (value) {
        let divCompany = document.createElement('div');
        divCompany = document.createElement('div');
        divCompany.style.border = '1px solid brown';
        divCompany.style.width = '300px';
        divCompany.innerText = value;
        document.getElementsByClassName(companyClas)[0].appendChild(divCompany);
    }

    divHeaderFunction();

    let id = user.id;
    divCriate(id);

    let name = user.name;
    divCriate(name);

    let username = user.username;
    divCriate(username);

    let email = user.email;
    divCriate(email);


    let address = user.address;
    for (const addressKey in address) {
        if (typeof address[addressKey] !== 'object') {
            divAddressCreate(address[addressKey])
        } else {
            let geo = address[addressKey];
            for (const geoElement in geo) {
                divGeoCreate(geo[geoElement]);
            }
        }
    }

    let phone = user.phone;
    blockCriate(phone)

    let website = user.website;
    blockCriate(website)

    let company = user.company;
    for (const companyKey in company) {
        companyCriate(company[companyKey])
    }
}
