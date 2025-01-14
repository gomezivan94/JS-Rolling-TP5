
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    // Método para mostrar la generación
    mostrarGeneracion() {
        let generacion = "";
        let rasgo = "";

        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = "Generación Z";
            rasgo = "Irreverencia";
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = "Generación Y (Millennials)";
            rasgo = "Frustración";
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsesión por el éxito";
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición";
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = "Silent Generation (Los niños de la posguerra)";
            rasgo = "Austeridad";
        } else {
            generacion = "Desconocida";
            rasgo = "N/A";
        }

        alert(`Pertenece a la ${generacion} y su rasgo característico es ${rasgo}.`);
    }

    // Método para verificar si es mayor de edad
    esMayorDeEdad() {
        if (this.edad >= 18) {
            alert(`${this.nombre} es mayor de edad.`);
        } else {
            alert(`${this.nombre} es menor de edad.`);
        }
    }

    // Método para mostrar todos los datos
    mostrarDatos() {
        alert(`Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} m\nAño de Nacimiento: ${this.anioNacimiento}`);
    }
}

// Función para crear un objeto Persona a partir del formulario
function crearPersona() {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

    // Asignar funciones a los botones
    document.getElementById("btnGeneracion").onclick = () => persona.mostrarGeneracion();
    document.getElementById("btnMayorEdad").onclick = () => persona.esMayorDeEdad();
    document.getElementById("btnMostrarDatos").onclick = () => persona.mostrarDatos();
}

// HTML para el formulario
const formularioHTML = `
    <form id="formPersona" onsubmit="event.preventDefault(); crearPersona();">
        <label>Nombre: <input type="text" id="nombre" required></label><br>
        <label>Edad: <input type="number" id="edad" required></label><br>
        <label>DNI: <input type="text" id="dni" required></label><br>
        <label>Sexo: 
            <select id="sexo" required>
                <option value="H">Hombre</option>
                <option value="M">Mujer</option>
            </select>
        </label><br>
        <label>Peso (kg): <input type="number" id="peso" step="0.1" required></label><br>
        <label>Altura (m): <input type="number" id="altura" step="0.01" required></label><br>
        <label>Año de Nacimiento: <input type="number" id="anioNacimiento" required></label><br>
        <button type="submit">Crear Persona</button>
    </form>
    <button id="btnGeneracion">Mostrar Generación</button>
    <button id="btnMayorEdad">Es Mayor de Edad</button>
    <button id="btnMostrarDatos">Mostrar Datos</button>
`;

// Insertar el formulario en el cuerpo del documento
document.body.innerHTML = formularioHTML;
