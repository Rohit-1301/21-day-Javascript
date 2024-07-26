const account_Id=45666;
let account_Name="Rohit Gupta";
var account_Email="Rohit123@hotmail.com";
account_city="Mumbai";
let account_country;

// account_Id=12345; It will give error as in javscript if we declare any variable with comst keyword then it is a constant variable
// and if we try to change it then it will show the error to us.

console.log(account_Id);
console.table([account_Id,account_Email,account_Name,account_city]);
/*
    now let us learn the difference between const and let keyword

    const keyword is used to declare a variable which can not be changed after the declaration.

    now understand the var keyword the variable declared with this keyword are work same as let but the main problem is
    that it is hoisted with the top of the scope means for example if we change the variable in the if else or loop scope
    then it will change in all over the programme.

    let keyword is used to declare a variable which can be changed after the declaration.
    and also one more thing to note is that let keyword is preferred to use more to declare variable
    the reason is that the variable initialized with this keyword is not hoisted to the top of the scope.

    and also one more thing to note is that we can declare variable without any keyword in javascript
    but it is a bad practice so we must have to avoid it

*/

