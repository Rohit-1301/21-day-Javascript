let a = 90;
if (a >= 18) {
  console.log("U are able to vote");
} else {
  console.log("U are not able to vote");
}

let pocketmoney = 5000;
if (pocketmoney <= 10000) {
  /* The condition `if (pocketmoney <= 7000 && pocketmoney > 5000)` is checking if the value of the
  variable `pocketmoney` is less than or equal to 7000 and greater than 5000. If this condition is
  true, it means that the value of `pocketmoney` falls within the range of 5000 to 7000 (inclusive).
  In this case, the code block inside this `if` statement will be executed, which in this context is
  logging "You can buy a smartwatch" to the console. */
  if (pocketmoney <= 7000 && pocketmoney > 5000) {
    console.log("You can buy a smartwatch");
  } else if (pocketmoney <= 5000 && pocketmoney > 2000) {
    console.log("You can buy a mobile");
  } else if (pocketmoney >= 2000 && pocketmoney < 5000) {
    console.log("You can buy a pendrive");
  } else if (pocketmoney > 7000) {
    console.log("You can buy a laptop");
  } else if (pocketmoney <= 1000) {
    console.log("You buy a toy for you");
  }
} else {
  console.log("You have no sufficient money");
}
