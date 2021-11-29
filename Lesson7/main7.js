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

class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id=id||(Math.floor(Math.random()*100));
        this.name=name||'noName';
        this.surname=surname||'noSurname';
        this.email=email||'noEmail@ukr.net';
        this.phone=phone||'+380950000000';
        this.order=order|| ['water','bred','C2H5OH'];
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients=[];
clients.push(new Client(1,'Viktor','Pupkin','pupV@gmail.com','+380952356731',['bread','milk','meat','juse','apples','cake','shuger','vine','rom','bear']));
clients.push(new Client(8,'Vasiliy','Petpov','petrov@gmail.com','+380952356732',[,'milk','meat','juse','apples','cake','shuger','vine','rom','bear']));
clients.push(new Client(3,'Viacheslav','Smith','smithV@gmail.com','+380632356730',['bread','milk','chicken','juse','apples','cake','shuger','vine','rom','bear']));
clients.push(new Client(6,'Vladimir','Ivanov','Ivanov@gmail.com','+380632356535',['water','meat','juse','apples','bear']));
clients.push(new Client(5,'Valentin','Ermolin','Valentin@gmail.com','+380632356730',['bread','milk','meat','chicken','juse','apples','cake','shuger','vine','rom','bear']));
clients.push(new Client(2,'Oleg','Petrov','Oleg@gmail.com','+380632356730',['bread','milk','meat','juse','apples','cake','vine','bear']));
clients.push(new Client(7,'Taras','Sergeev','Taras456@gmail.com','+380632356730',['vine','rom','bear']));
clients.push(new Client(4,'Georgiy','Panov','Georgiy34@gmail.com','+380634356730',['bread','milk']));
clients.push(new Client(9,'Ivan','Nazarenko','Ivan1987@gmail.com','+380632456930',['bread','water','chicken','cake','rom',]));
clients.push(new Client(10,'Nikolay','Shestak','Nikolay23@gmail.com','+380632396739',['bread','milk','meat','apples','cake','vine','rom','bear']));
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// Classwork

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//ADDITIONAL


// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
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