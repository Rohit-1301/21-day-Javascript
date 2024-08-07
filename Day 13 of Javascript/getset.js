class userdetail{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value
    }

    //get always return the value and set set the value for this we have to pass some parameter and note the name of the get and set 
    //function should be same as the object pass in the constructor.
    //and also we have to note that if the name of the object and the value return in get is same then the program will show us
    //call stack error
}
const sachin=new userdetail("sachin@gmail.com","abc")
console.log(sachin.email);
console.log(sachin.password);