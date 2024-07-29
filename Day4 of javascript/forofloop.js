// let arr=[1,2,3,4,5];
// for (const i of arr) {
//     console.log(i);
// }

// let str="Hello World";
// for (const i of str) {
//     if(i==" "){
//         continue;
//     }
//     console.log("The char of str is:-",i);
// }

let map=new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);
for (const [key,value] of map) {
    console.log("key is:-",key,"value is:-",value);
}

//in the above way we can print the elements of map and we have to give key and value in[] else it will give us the result
//in the form of an array
//forof loop cannot print the elements of object it is not  iterable. for in method is used to print the objects.