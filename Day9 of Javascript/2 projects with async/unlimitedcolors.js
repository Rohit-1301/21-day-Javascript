let startbutton = document.getElementById("start");
let stopbutton = document.getElementById("stop");

let randomcolor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalid;

let startchange = function () {
  if (!intervalid) {
    intervalid = setInterval(changecolor, 1000);
  }
};

let changecolor = function () {
  document.body.style.backgroundColor = randomcolor();
};

let stopchange = function () {
  clearInterval(intervalid);
  intervalid = null;
};

startbutton.addEventListener("click", startchange);
stopbutton.addEventListener("click", stopchange);
