let temporizador = document.getElementById("temporizador");
let tiempoInicialInput = document.getElementById("tiempo-inicial");
let iniciarButton = document.getElementById("iniciar");
let pausarButton = document.getElementById("pausar");
let resetButton = document.getElementById("reset");
let tiempoRestante = 0;
let tiempoGuardado = 0;
let intervalo;

iniciarButton.addEventListener("click", function() {
  if (tiempoGuardado > 0) {
    tiempoRestante = tiempoGuardado;
  } else {
    tiempoRestante = parseInt(tiempoInicialInput.value);
  }
  intervalo = setInterval(function() {
    tiempoRestante--;
    let horas = Math.floor(tiempoRestante / 3600);
    let minutos = Math.floor((tiempoRestante % 3600) / 60);
    let segundos = tiempoRestante % 60;
    temporizador.textContent = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      temporizador.textContent = "00:00:00";
      iniciarButton.disabled = false;
      pausarButton.disabled = true;
    }
  }, 1000);
  iniciarButton.disabled = true;
  pausarButton.disabled = false;
});

pausarButton.addEventListener("click", function() {
  tiempoGuardado = tiempoRestante;
  clearInterval(intervalo);
  iniciarButton.disabled = false;
  pausarButton.disabled = true;
});

resetButton.addEventListener("click", function() {
  clearInterval(intervalo);
  tiempoRestante = 0;
  tiempoGuardado = 0;
  temporizador.textContent = "00:00:00";
  iniciarButton.disabled = false;
  pausarButton.disabled = true;
});