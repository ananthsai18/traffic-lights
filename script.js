let stop = document.getElementById("stop");
let ready = document.getElementById("ready");
let go = document.getElementById("go");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

stop.addEventListener("click", () => {
  stop.style.backgroundColor = "crimson";
  red.style.backgroundColor = "crimson";
  ready.style.backgroundColor = "white";
  go.style.backgroundColor = "white";
  yellow.style.backgroundColor = "white";
  green.style.backgroundColor = "white";
});

ready.addEventListener("click", () => {
  stop.style.backgroundColor = "white";
  red.style.backgroundColor = "white";
  ready.style.backgroundColor = "yellow";
  go.style.backgroundColor = "white";
  yellow.style.backgroundColor = "yellow";
  green.style.backgroundColor = "white";
});

go.addEventListener("click", () => {
  stop.style.backgroundColor = "white";
  red.style.backgroundColor = "white";
  ready.style.backgroundColor = "white";
  go.style.backgroundColor = "green";
  yellow.style.backgroundColor = "white";
  green.style.backgroundColor = "green";
});
