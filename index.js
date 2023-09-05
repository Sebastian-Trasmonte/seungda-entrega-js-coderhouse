/* function PedirNombre() {
    return prompt("Ingrese su nombre").toLowerCase();
}
function PedirApellido() {
    return prompt("Ingrese su apellido").toLowerCase();
}
const AnioActual = parseInt(2023);
alert("Hola, para comenzar necesitamos algunos datos. Ingreselos a continuacion.")
let nombre = PedirNombre()
while (!isNaN(nombre)) {
    alert("no ingreso un nombre valido, vuelva a intentar")
    nombre = PedirNombre()
}
alert(`Su nombre es: ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}`);
let apellido = PedirApellido()
while (!isNaN(apellido)) {
    alert("no ingreso un apellido, vuelva a intentar")
    apellido = PedirApellido()
}
alert("Su nombre completo es " + nombre.charAt(0).toUpperCase() + nombre.slice(1) + " " +
    apellido.charAt(0).toUpperCase() + apellido.slice(1));

alert("Ahora trataremos de calcular tu edad en base al año de nacimiento que ingreses")
let anio = parseInt(prompt("ingresa tu año de nacimiento"))
while (anio >= 2023 || anio <= 0) {
    alert("tu año de nacimiento tiene que ser mayor a 0 y menor a 2023")
    anio = parseInt(prompt("ingresa tu año de nacimiento"))
}
let edad = AnioActual - anio
alert("tu año de nacimiento es " + anio + ", por lo tanto tu edad aproximada es de " + edad + " años")
alert("Tus datos quedaron registrados de la siguiente manera \nNombre: " +
    nombre.charAt(0).toUpperCase() + nombre.slice(1) +
    "\nApellido: " + apellido.charAt(0).toUpperCase() + apellido.slice(1) + "\nEdad: " + edad + " Años") */
const creditos = [
    {
        monto: 5000,
        tasa: 5,
        plazo: 6,
    },
    {
        monto: 15000,
        tasa: 10,
        plazo: 12,
    },
    {
        monto: 27000,
        tasa: 13,
        plazo: 24,
    },
];

const decision = prompt("Quiere realizar una simulacion de nuestros creditos hipotecarios?");
let lista = true
if (decision == "si") {
    seleccionCreditos();
} else {
    alert("Gracias por visitar nuestra web");
}
function seleccionCreditos() {
    while (lista) {
        let opcion = parseInt(
            prompt(
                "Elija el credito y calcularemos el monto de las cuotas \n 1- credito por $5000 al 5% en 6 cuotas \n 2- credito por $15000 al 10% en 12 cuotas \n 3- credito por $27000 al 13% en 24 cuotas \n 4- salir"
            )

        );
        switch (opcion) {
            case 1:
                /* calcularCuotas1 */
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                alert("Gracias por visitar nuestra web");
                lista = false;
                break;
            default:
                alert("La opcion invalida");
        }
    }
}

/* function calcularCuotas1() */