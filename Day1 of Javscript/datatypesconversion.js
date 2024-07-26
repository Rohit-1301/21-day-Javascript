let a=33
let b=Number(a)
let ab="33"
let c=Number(ab)
let ac="33abc"
let d=Number(ac)
let ad=true
let e=Number(ad)
let ae=null
let f=Number(ae)
let af=undefined
let g=Number(af)
console.table([b,c,d,e,f,g])
console.table([typeof b,typeof c,typeof d,typeof e,typeof f,typeof g])

/* 
       So in javscript I learn that we can convert any variable from one type to another type and it will convert 
       it but we hhave to check the value of what he converts for eg: a variable a which is a string converted to number 
       then javscript will change its type but its value will be Nan means not a number.So it is better if we convert 
       any variable into any data type then we should have to check its value also.
       More eg: of data conversion from one data type to other
       1=true 0=false ""=false "ghvsdj"=true
       
       
*/