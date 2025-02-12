let cronometro = document.getElementById("cronometro");
let iniciarButton = document.getElementById("iniciar");
let pausarButton = document.getElementById("pausar");
let resetButton = document.getElementById("reset");
let segundos = 0;
let intervalo;

iniciarButton.addEventListener("click", function() {
  intervalo = setInterval(function() {
    segundos++;
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;
    cronometro.textContent = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
  }, 1000);
  iniciarButton.disabled = true;
  pausarButton.disabled = false;
});

pausarButton.addEventListener("click", function() {
  clearInterval(intervalo);
  iniciarButton.disabled = false;
  pausarButton.disabled = true;
});

resetButton.addEventListener("click", function() {
  clearInterval(intervalo);
  segundos = 0;
  cronometro.textContent = "00:00:00";
  iniciarButton.disabled = false;
  pausarButton.disabled = true;
});