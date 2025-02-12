let reloj = document.getElementById("reloj");

function actualizarReloj() {
  let fecha = new Date();
  let diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let ampm = hora >= 12 ? "PM" : "AM";
  hora = hora % 12;
  hora = hora ? hora : 12;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;
  reloj.textContent = `${diaSemana[fecha.getDay()]} ${fecha.getDate()} de ${mes[fecha.getMonth()]} del ${fecha.getFullYear()} ${hora}:${minutos}:${segundos} ${ampm}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
