
let myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

// console.log(myObj);

// function showProps(obj, objName) {
//     var result = "";
//     for (var i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             result += objName + "." + i + " = " + obj[i] + "\n";
//         }
//     }
//     return result;
// }

console.log(Object.keys(myObj))
console.log(Object.getOwnPropertyNames(myObj));