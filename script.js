const hrElement = document.getElementById("horas");
const minElement = document.getElementById("minutos");
const segElement = document.getElementById("segundos");
const button = document.getElementById("btn");
const toggleImage = document.getElementById("toggleImage");
let body = document.getElementById("body");

function Time() {
  const date = new Date();
  const horas = date.getHours();
  const min = date.getMinutes();
  const seg = date.getSeconds();

  hrElement.innerText = fixTime(horas);
  minElement.innerText = fixTime(min);
  segElement.innerText = fixTime(seg);
}

function fixTime(time) {
  return time < 10 ? "0" + time : time;
}

function light() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleImage.src = "imagem/LUA.png";
    toggleImage.alt = "Lua";
  } else if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    toggleImage.src = "imagem/SOL.png";
    toggleImage.alt = "Sol";
  }
}

button.addEventListener("click", light);
setInterval(Time, 1000);
