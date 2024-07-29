// let n=7;
// let sumoffibo;
// let fibo=0;
// let fibo1=1;
// for(let i=1;i<=n;i++){
//     sumoffibo=fibo+fibo1;
//     fibo=fibo1;
//     fibo1=sumoffibo;
    
// }
// console.log(`the sum of the fibonacci series term of ${n} is:  ${sumoffibo}`);

// for(let i=1;i<=10;i++){
//     console.log(`The table of ${i} is:-`);
//     for(let j=1;j<=10;j++){
//         console.log(i+"*"+j+"="+i*j);
//     }
// }

for(let i=1;i<=10;i++){
   if(i==5){
    console.log("5 is detected");
    break;
   }
   console.log(i);
}

//in the above loop when i==5 then it will stop the loop and come out of from it due to break keyword.
for(let i=1;i<=10;i++){
   if(i==5){
    console.log("5 is detected");
    continue;
   }
   console.log(i);
}
//in the above loop when i==5 then it will continue the loop till the end of the termination.
