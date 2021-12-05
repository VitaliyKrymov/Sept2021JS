// function users(){
//     let x = 110;
//     let userWorker={
//         xxx: function (){
//             console.log(x+5)
//         }
//     };
//     return userWorker
// }
//
// let uw=users();
// console.log(uw);
// console.log(uw.xxx());

function users(){
    let user = {};

    let userWorker={
        getUser: function (password){
              if(password==="getUser"){
               return user;
            } else{
                  console.log("Wrong password")
                  return -9999;
              }},
        setName: function (password,newName){
            if (password === 'name100500'){
                    user.name = newName;
                    return user.name
            } else{
                console.log("Wrong password")
                return -9999;
            }
        },

        setAge: function (password,newAge){
            if (password === 'set1'){
            if(newAge > 0 && newAge < 215){
                user.age = newAge;
                return user.age }
            } else{
                console.log("Wrong password")
                return -9999;
            }
        },

        setStatus: function (password,newStatus){
            if (password === 'stat1'){
                   user.status = newStatus;
                    return user.status ;
            } else{
                console.log("Wrong password")
                return -9999;
            }
        },
    };
    return userWorker
}

let uw=users();
console.log(uw);
console.log(uw.getUser('getUser'));
console.log('age=',uw.setAge('set1',50));
console.log('age=',uw.setAge('set1',60));
console.log('status=',uw.setStatus('stat1',false));
console.log('NewName=',uw.setName('name100500','Vasiliy'));
console.log(uw.getUser('getUser'));
