//Filter in javascript

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans=numbers.filter(function (element) {
    return element % 2 == 0;
});
console.log(ans);
///It will return the element which is divisible by 2.

//map in js
let arr=[1,2,3,4,5];
let ans1=arr.map(function(element){
    return element*2;
});
console.log(ans1);
//it will return the element which is doubled.

//reduce in js
let arr1=[1,2,3,4,5];
let ans2=arr1.reduce(function(a,b){
    return a+b;
},0);
console.log(ans2);
//it will return the sum of the elements in the array.

//chaining
let arr2=[1,2,3,4,5];
let ans3=arr2.map(function(element){
    return element*2;
}).filter(function(element){
    return element%2==0;
}).reduce(function(a,b){
    return a+b;
},0);
console.log(ans3);
//in this way we can use multiple operation on the array and the value will be passed from the above function to the next function.