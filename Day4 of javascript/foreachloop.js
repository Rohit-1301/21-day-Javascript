// let arr=[1,2,3,4,5];
// arr.forEach(function(element){
//     console.log(element);
// });
//In the above way we can print the elements of array using forEach method.
//forEach method is used to iterate through the array.

let language=[
    {
        name:"Java",
        field:"App Development"
    },
    {
        name:"Python",
        field:"Machine Learning"
    },
    {
        name:"Javascript",
        field:"Web Development"
    },
]
language.forEach(function(element){
    console.log("The programming language is:-",element.name+" and the field of study is:-",element.field);
});

//note foreach loop doesn't return anything