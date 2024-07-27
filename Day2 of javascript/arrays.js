const myarr=[1,2,3,4,5,6,7,8,9,10];
 console.log(myarr);
 console.log(myarr.length);
 console.log(myarr[0]);
 console.log(myarr[1]);
 console.log(myarr.unshift(9));//it will add 9 in the start of the array
 console.log(myarr);
 console.log(myarr.shift());//it will remove the element in the start of the array
 console.log(myarr);
 console.log(myarr.push(11));//it will add 11 in the end of the array
 console.log(myarr);
 console.log(myarr.pop());//it will remove the element in the end of the array

// const arr=myarr.join();//it will convert the array into string
// console.log(arr);

//slice,splice
console.log("a",myarr);
const A=myarr.slice(0,3);// in this slice function it will take the element from starting index to ending index-1
console.log("b",A);
console.log("D",myarr);

const B=myarr.splice(0,3);// in this splice function it will take the element from starting index to ending index 
                          // and remove it from the array
console.log("b",B)
console.log("c",myarr);


// part 2 of array in javascript
let C =[1,2,3,4,5];
let D=[6,7,8,9,10];
// C.push(D);// when we use the push function it will add the array in the end of the array
// console.log(C);

// let E=C.concat(D);// when we use the concat function it will add the array in the end of the array
// console.log(E);

//spread function to concat the array
let F=[...C,...D];
console.log(F);

// now the flat method in array
let G=[1,2,3,[4,5,[6,7,[8,9,[10,11]]]]];
let H=G.flat(Infinity);//this function is used to convert any array in which another array are present into a single array
console.log(H);

//now the from and is method of array
console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name:"Rohit"}))//it will return an empty array as we didmn't specify key or value to  form an array

