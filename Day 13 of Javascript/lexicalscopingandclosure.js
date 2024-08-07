//lexical scoping is that the inner function will have the access to property and object of outer function in simple words.
// function outer() {
//   let x = 10;
//   //   console.log(y); //it will show error as it is not declared
//   function inner() {
//     console.log(x);
//     let y = 5;
//   }
//   function innertwo() {
//     console.log(x);
//     // console.log(y); //same here too show error
//   }
//   inner();
//   innertwo();
// }
// outer();
// console.log(x); //it will show error as x is not declared in global scope it is declared inside the function

//now closure

function outer() {
  let x = 10;
  //   console.log(y); //it will show error as it is not declared
  function inner() {
    console.log(x);
    let y = 5;
    console.log(y);
  }
  return inner();
}

const s = outer();
s;
//here in closure if we return the inner function in the outer function then its lexical scope is pass
//so that we get the overall picture oof the function.