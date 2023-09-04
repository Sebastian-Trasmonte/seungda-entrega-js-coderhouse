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


const credito = prompt("Quiere realizar una simulacion de nuestro credito hipotecario?");
let lista = true
if (credito == "si") {
    creditos();
} else {
    alert("Gracias por visitar nuestra web");
}
function creditos() {
    while (lista) {
        let opcion = parseInt(
            prompt(
                "segun el monto que necesite sera la tasa a cobrar \n 1- de $1000 a $4999 usd 5% \n 2- de $5000 a $14999 usd 7.5% \n 3- de $15000 a $30000 usd 10% \n 4. Salir \n Ingrese un numero de la lista"
            )
        );
        switch (opcion) {
            case 1:
              seleccionarPrenda("Conjunto", 1000);
              break;
            case 2:
              seleccionarPrenda("Corpiño", 100);
              break;
            case 3:
              seleccionarPrenda("Colaless", 200);
              break;
            case 4:
              trueOrfalse = false;
              break;
            default:
              alert("Opcion invalida");
          }
        }
      }
      
