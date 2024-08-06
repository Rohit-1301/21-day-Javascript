function gamenames(gamename) {
  this.gamename = gamename;
}

function gameinfo(gamename, gametype, gamelaunchyear) {
  gamenames.call(this, gamename);
  this.gametype = gametype;
  this.gamelaunchyear = gamelaunchyear;
}
//In the above function we use call to c=actually call the function above it and also in the parameter we pass him
//this keyword so that it will take all the instances and context from that function in his instance

let games = new gameinfo("Valorant", "Multiplayer", "2016");
console.log(games);
