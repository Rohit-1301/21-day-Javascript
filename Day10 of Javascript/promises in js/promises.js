//how to create promises in javascript

// Method 1:-
// const promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// })
// promiseone.then(function(){
//     console.log("Promise consumed");
// })

//Method 2:-
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

//Method 3:-
// let promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Rohit",email:"Rohit123.com"})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })

// Method 4:-
// let promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"Rohit",password:"1234"})
//         }
//         else{
//             reject("Error:Something went wrong")
//         }
//     },1000)
// })
// promisefour.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The promise is either resolved or rejected"))


// //Method 5:-
let promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Rohit",password:"1234"})
        }
        else{
            reject("Error:Something went wrong")
        }
    },1000)
})

//Note:-we can run promises using async await too but in this case if the error is occurred then we have to handle it using
//try-catch block 

// async function consumePromiseFive(){
//     try{
//         const response=await promisefive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive()

//now basic use of fetch using async await and then catch

// async function user() {
//     try{
//         let response=await fetch("https://api.github.com/users/hiteshchoudhary")
//         let data=await response.json();
//         console.log(data)
//     }
//     catch{
//         console.log("E:Something went wrong");
//     }
// }
// user()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

//Note:-
//if the error 404 or something that like occurs then fetch will give us as a response not in resolve or reject because it
//is an response not an error and error occur only when it doesn't get response from the browser
//and also we have to keep in mind that if there are task running in a queue then fetch will work first then other.