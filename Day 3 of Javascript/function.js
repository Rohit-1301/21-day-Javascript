// function factorial(n) {
//     if (n <=1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// let result = factorial(5);
// console.log("the factorial of 5 is: ",result);
//Note:- If the function is returning something than we have to use return keyword.and also take it in a console.log statement else it
//will not print anything.
//also u have to use the function name as factorial and pass the value as 5.
//if we are printing any inappropriate value then it will not print anything or it will shw undefined too.


//part2
// object  in functions of js

let user={
    username:"Rohit",
    password:"12345678",
}

function login(user){
    if(user.username=="Rohit" && user.password=="12345678"){
        console.log("login successful");
    }
    else{
        console.log("login failed");
    }
}
// login(user); we can add user object in the function as well .
//other method is
//login({username:"Rohit",password:"<PASSWORD>"});

//array in function of js
let arr=[1,2,3,4,5,6,7,8,9,10];
function returnsecondvalue(arr){
    return arr[1];
}
// console.log(returnsecondvalue(arr));
//other method
//console.log(returnsecondvalue([1,2,3,4,5,6,7,8,9,10]));

// part3 hoisting
console.log(addone(7));//It will run the function as his function is not declared with any variable
function addone(num){
    return num+1;
}
console.log(addtwo(7));//It will  not run the function as his function is declared with any variable and it also shows error.
const addtwo=function add(num){
    return num+2;
}