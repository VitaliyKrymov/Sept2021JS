//Homework

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(userID,userName,userSername,userEmail,userPhone){
//     this.id= userID,
//         this.name= userName,
//         this.sername= userSername,
//         this.email= userEmail,
//         this.phone= userPhone
// };
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users=[];
// users.push(new User(1,'Viktor','Pupkin','pupV@gmail.com','+380952356731'));
// users.push(new User(2,'Vasiliy','Petpov','petrov@gmail.com','+380952356732'));
// users.push(new User(3,'Viacheslav','Smith','smithV@gmail.com','+380632356730'));
// users.push(new User(4,'Vladimir','Ivanov','Ivanov@gmail.com','+380632356535'));
// users.push(new User(5,'Valentin','Ermolin','Valentin@gmail.com','+380632356730'));
// users.push(new User(6,'Oleg','Petrov','Oleg@gmail.com','+380632356730'));
// users.push(new User(7,'Taras','Sergeev','Taras456@gmail.com','+380632356730'));
// users.push(new User(8,'Georgiy','Panov','Georgiy34@gmail.com','+380634356730'));
// users.push(new User(9,'Ivan','Nazarenko','Ivan1987@gmail.com','+380632456930'));
// users.push(new User(10,'Nikolay','Shestak','Nikolay23@gmail.com','+380632396739'));
// console.log(users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let users=[];
// users.push(new User(1,'Viktor','Pupkin','pupV@gmail.com','+380952356731'));
// users.push(new User(8,'Vasiliy','Petpov','petrov@gmail.com','+380952356732'));
// users.push(new User(3,'Viacheslav','Smith','smithV@gmail.com','+380632356730'));
// users.push(new User(6,'Vladimir','Ivanov','Ivanov@gmail.com','+380632356535'));
// users.push(new User(5,'Valentin','Ermolin','Valentin@gmail.com','+380632356730'));
// users.push(new User(2,'Oleg','Petrov','Oleg@gmail.com','+380632356730'));
// users.push(new User(7,'Taras','Sergeev','Taras456@gmail.com','+380632356730'));
// users.push(new User(4,'Georgiy','Panov','Georgiy34@gmail.com','+380634356730'));
// users.push(new User(9,'Ivan','Nazarenko','Ivan1987@gmail.com','+380632456930'));
// users.push(new User(10,'Nikolay','Shestak','Nikolay23@gmail.com','+380632396739'));
// console.log(users);
//
// let filterUsers =users.filter(value => value.id%2 === 0);
// console.log(filterUsers)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortedUsers =users.sort((user1,user2) => user1.id-user2.id);
// console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id=id||(Math.floor(Math.random()*100));
//         this.name=name||'noName';
//         this.surname=surname||'noSurname';
//         this.email=email||'noEmail@ukr.net';
//         this.phone=phone||'+380950000000';
//         this.order=order|| ['water','bred','C2H5OH'];
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients=[];
// clients.push(new Client(1,'Viktor','Pupkin','pupV@gmail.com','+380952356731',['bread','milk','meat','juse','apples','cake','shuger','vine','rom','bear']));
// clients.push(new Client(8,'Vasiliy','Petpov','petrov@gmail.com','+380952356732',[,'milk','meat','juse','apples','cake','shuger','vine','rom','bear']));
// clients.push(new Client(3,'Viacheslav','Smith','smithV@gmail.com','+380632356730',['bread','milk','chicken','juse','apples','cake','shuger','vine','rom','bear']));
// clients.push(new Client(6,'Vladimir','Ivanov','Ivanov@gmail.com','+380632356535',['water','meat','juse','apples','bear']));
// clients.push(new Client(5,'Valentin','Ermolin','Valentin@gmail.com','+380632356730',['bread','milk','meat','chicken','juse','apples','cake','shuger','vine','rom','bear']));
// clients.push(new Client(2,'Oleg','Petrov','Oleg@gmail.com','+380632356730',['bread','milk','meat','juse','apples','cake','vine','bear']));
// clients.push(new Client(7,'Taras','Sergeev','Taras456@gmail.com','+380632356730',['vine','rom','bear']));
// clients.push(new Client(4,'Georgiy','Panov','Georgiy34@gmail.com','+380634356730',['bread','milk']));
// clients.push(new Client(9,'Ivan','Nazarenko','Ivan1987@gmail.com','+380632456930',['bread','water','chicken','cake','rom',]));
// clients.push(new Client(10,'Nikolay','Shestak','Nikolay23@gmail.com','+380632396739',['bread','milk','meat','apples','cake','vine','rom','bear']));
// console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortedClientsByOrder = clients.sort((client1, client2) => client1.order.length - client2.order.length);
// console.log(sortedClientsByOrder);

// Classwork

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model,produser,year,maxSpeed,engineСapacity,driver) {
//     this.model = model || 'no name';
//     this.produser = produser || 'no produser';
//     this.year = year || 2000;
//     this.maxSpeed = maxSpeed || 5;
//     this.engineСapacity = engineСapacity || 1400;
//     this.driver = driver || [];
//     this.drive = () => {
//         console.log(`Їдемо зі швидкістю- ${maxSpeed} км на годину.`)
//     };
//     this.info = () => {
//         console.log(`Model- ${model},  Produser- ${produser},  Year- ${year},  Max Speed- ${maxSpeed} km/h,  Engine Сapacity-${engineСapacity} cm3.`)
//     };
//     this.increaseMaxSpeed = (newSpeed) => {
//         this.maxSpeed += newSpeed;
//         console.log(`New Max Speed= ${this.maxSpeed} km/h.`)
//     };
//     this.changeYear = (newValue) => {
//         this.year = newValue;
//         console.log(`New produse year- ${this.year}.`)
//     };
//     this.addDriver = (driver) => {
//         this.driver = driver;
//         console.log(this.driver)
//     }
// }
//
// let FordKuga= new Car('Kuga','Ford',2016,200,2000);
// FordKuga.drive();
// FordKuga.info();
// FordKuga.increaseMaxSpeed(20);
// FordKuga.increaseMaxSpeed(10);
// FordKuga.changeYear(2012);
// FordKuga.addDriver ({id:3, name:'Kolia', surname:'Williams',email: 'Kolia@gmail.com',phone: '+380959643240',order: ['Borsh', 'vine Martini Bianka']})
// console.log(FordKuga);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, produser, year, maxSpeed, engineСapacity, driver) {
//         this.model = model || 'no name';
//         this.produser = produser || 'no produser';
//         this.year = year || 2000;
//         this.maxSpeed = maxSpeed || 100;
//         this.engineСapacity = engineСapacity || 1000;
//         this.driver = driver || [];
//         this.drive = () => {
//             console.log(`Їдемо зі швидкістю- ${maxSpeed} км на годину.`)
//         };
//         this.info = () => {
//             console.log(`Model- ${model},  Produser- ${produser},  Year- ${year},  Max Spid- ${maxSpeed} km/h,  Engine Сapacity-${engineСapacity} cm3.`)
//         };
//
//         this.increaseMaxSpeed = (newSpeed) => {
//             this.maxSpeed += newSpeed;
//             if (this.maxSpeed > 250) {
//                 console.log('🛫FLYING🤸')
//             }
//             console.log(`New Max Speed= ${this.maxSpeed} km/h.`);
//
//         };
//
//         this.changeYear = (newValue) => {
//             this.year = newValue || 1900;
//             console.log(`New produse year- ${this.year}.`)
//         };
//         this.addDriver = (driver) => {
//             this.driver = driver || 'TeslaFullAvtopilot';
//             console.log(this.driver)
//         }
//     }
// }
//
// const FordFusion = new Car('Fusion', 'Ford', 2011, 160, 1400);
// FordFusion.drive();
// FordFusion.info();
// FordFusion.increaseMaxSpeed(30);
// FordFusion.increaseMaxSpeed(-10);
// FordFusion.changeYear(2012);
// FordFusion.addDriver({
//     id: 2,
//     name: 'Karina',
//     surname: 'Ivanova',
//     email: 'Karina@gmail.com',
//     phone: '+380500986547',
//     order: ['Sup','vine']
// })
// console.log(FordFusion);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Popelushka {
//     constructor(name, age, sizeFoot) {
//         this.name = name || 'No name';
//         this.age = age || 99;
//         this.sizeFoot = sizeFoot || 42;
//     }
// }

// --Створити 10 попелюшок , покласти їх в масив
// const Kristi = new Popelushka('Kristi', 19, 37);
// const Katia = new Popelushka('Katia', 20, 38);
// const Karina = new Popelushka('Karina', 21, 39);
// const Klara = new Popelushka('Klara', 22, 37);
// const Klava = new Popelushka('Klava', 21, 36);
// const Kira = new Popelushka('Kira', 23, 39);
// const Olia = new Popelushka('Olia', 24, 38);
// const Tania = new Popelushka('Tania', 26, 39);
// const Sveta = new Popelushka('Sveta', 15, 38);
// const Sasha = new Popelushka('Sasha', 18, 36);
//
// let PopelushkaArr = [Kristi, Katia, Karina, Klara, Klava, Kira, Olia, Tania, Sveta, Sasha];
// console.log(PopelushkaArr);
//
// // --Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prins {
//     constructor(name, age, sizeSlipper) {
//         this.name = name || 'No name';
//         this.age = age || 99;
//         this.sizeSlipper = sizeSlipper || 42;
//     }
// }
//
// const PrinsVasia = new Prins('Vasia', 21, 39);

// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// let i=0;
// for (const Pop of PopelushkaArr) {
//          if (Pop.sizeFoot === PrinsVasia.sizeSlipper){
//             console.log(`Prins ${PrinsVasia.name} find Popelushka ${Pop.name}`);
//              i++;
//              }
//              }
// if (i===0){ console.log(`Prins ${PrinsVasia.name} dont find Popelushka`)};
// if (i>1){ console.log(`Prins ${PrinsVasia.name} don't know what to do???`)};


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// const emptyPrincess = PopelushkaArr.find((item) => item.sizeFoot === PrinsVasia.sizeSlipper);
// console.log(emptyPrincess);


//ADDITIONAL


// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// let arr={   id: 1,  name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//                                        // Variant 1
// class Users {
//
//     constructor(id,name,username,email,address,phone,website,company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//         }
// }

// let  user1 = new Users(1,'Leanne Graham','Bret','Sincere@april.biz',{street: 'Kulas Light',suite: 'Apt. 556',city: 'Gwenborough',zipcode: '92998-3874',geo:{Lat:'-37.3159',Lng:'81.1496'}},'1-770-736-8031 x56442','hildegard.org',{name:'Romaguera-Crona',catchPhrase:'Multi-layered client-server neural-net',bs:'harness real-time e-markets'})
// console.log(user1);


                                                            // Variant 2

class Users {

    constructor(id,name,username,email,address,phone,website,company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}
class address{
       constructor(street,city,zipcode,geo) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
class geo{
    lat;
    lng;
    constructor(lat,lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
class company{
    name;
    catchPhrase;
    bs;
    constructor(name,catchPhrase,bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;


    }

}

let  user1 = new Users(1,'Leanne Graham','Bret','Sincere@april.biz',new address( 'Kulas Light', 'Gwenborough', '92998-3874',new geo('-37.3159','81.1496')),'1-770-736-8031 x56442','hildegard.org',new company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets'));
console.log(user1);

//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// function Tegs(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'no name';
//     this.action = action || 'no descriptionTag';
//     this.attrs = attrs || 'no attributs';
// }
//
// let title = '<a>'
// let action = 'Tег <a>  предназначен для создания ссылок,устанавливает ссылку или якорь.';
// let atributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tegs(title, action, atributes);
// console.log(a);
// let div = new Tegs('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента' +
//     ' документа с целью изменения вида содержимого.', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
// }, {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(div);
// let h1 = new Tegs('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня. ' +
//     "По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания.", [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание заголовка.'
// },]);
// console.log(h1);
// let span = new Tegs('<span>', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от' +
//     ' блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
// }, {
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }]);
// console.log(span);
// let input = new Tegs('<input>', 'Тег <input> является одним из разносторонних элементов формы и ' +
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> ' +
//     'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
// }, {
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }]);
// console.log(input);
// let form = new Tegs('<form>', 'Тег <form> Связывает поле с формой по её идентификатору.', [{
//     titleOfAttr: '',
//     actionOfAttr: ''
// },]);
// console.log(form);
// let option = new Tegs('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{
//     titleOfAttr: 'disabled',
//     actionOfAttr: 'Заблокировать для доступа элемент списка.'
// }, {
//     titleOfAttr: 'label',
//     actionOfAttr: 'Указание метки пункта списка.'
// }, {
//     titleOfAttr: 'selected',
//     actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'
// }]);
// console.log(option);
// let select = new Tegs('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
// }, {
//     titleOfAttr: 'autofocus',
//     actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
// }, {
//     titleOfAttr: 'disabled',
//     actionOfAttr: 'Блокирует доступ и изменение элемента.'
// }]);
// console.log(select);