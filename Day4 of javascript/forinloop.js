let languages={
    Java:"App Development",
    Python:"Machine Learning",
    Javascript:"Web Development",
    Cpp:"Game Development",
}

for (const key in languages) {
    console.log("The programming language is:-",key+" and the field of study is:-",languages[key]);
}
//In same way we can print for array and string too. But note it will return the key so for the value 
//we have to use the value of the key  like this one languages[key]
//Also note that if we try to print the amp using for in loop it will not show error but also it will not show any result too.
//because it is not iterable.
