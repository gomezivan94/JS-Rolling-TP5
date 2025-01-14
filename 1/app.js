
let numeroMagico; 

        
function comenzarJuego() {
            
        numeroMagico = Math.floor(Math.random() * 100) + 1;
        console.log("Número mágico (para depuración): " + numeroMagico); 
        alert("¡Comienza el juego! El número mágico ha sido generado.");
        }


            function verificarNumero() {

            const numeroIngresado = parseInt(document.getElementById('numero').value);


            if (isNaN(numeroIngresado)) {
                alert("Por favor, ingresa un número válido.");
                return;
            }

            if (numeroIngresado === numeroMagico) {
                alert("¡Felicidades! Has adivinado el número.");
            } else if (numeroIngresado < numeroMagico) {
                alert("El número ingresado es menor al número mágico. Intenta de nuevo.");
            } else {
                alert("El número ingresado es mayor al número mágico. Intenta de nuevo.");
            }
        }
