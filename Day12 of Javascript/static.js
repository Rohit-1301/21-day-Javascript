class User{
    constructor(username,loginid){
        this.username=username;
        this.loginid=loginid;
    }
    loggedin(){
        console.log(this.username+" has logged in");
    }
    static loginid(){
        console.log("login id is "+this.loginid);
    }
}
let user1=new User("abc","1234");
user1.loggedin();
user1.loginid();//since the loginiid is declared static we can't access either here or any other class or packages.
//static keyword is mainly used in program to blocked the sensitive info to get override or get leaked.