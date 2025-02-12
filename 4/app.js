const fechaArgentina = new Date(2015,9,29,12,2,58).toLocaleDateString('es-AR', {weekday:"long" ,day:"numeric", year:"numeric" , month:"long"})

const horaArgentina = new Date('2015/09/29 12:02:58 AM').toLocaleDateString('en-US', {hour: "2-digit", minute:"2-digit",second:"2-digit"})


function mostrarFecha(){


const inyectarFecha = document.createElement("h2")

inyectarFecha.textContent = fechaArgentina

document.getElementById("fechaActual").appendChild(inyectarFecha)

const inyectarHora = document.createElement("h1")

inyectarHora.textContent = horaArgentina

document.getElementById("horaActual").appendChild(inyectarHora)


}

mostrarFecha()