function user(email,password){
    this._email=email
    this._password=password
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password=value
        }
    })
}

let x=new user("H@gmail.com","abcban");
console.log(x.email);
console.log(x.password);
//the above one is the other method to ise getter and setter in js using functions