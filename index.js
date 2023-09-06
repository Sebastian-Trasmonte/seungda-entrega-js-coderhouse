function PedirNombre() {
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
    "\nApellido: " + apellido.charAt(0).toUpperCase() + apellido.slice(1) + "\nEdad: " + edad + " Años")
/* const creditos = [
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
 */

/* Objeto para el simulador de crédito */
var simuladorCredito = {
    prestamosAnteriores: [],

    calcularCuota: function (monto, tasa, plazo) {
        var tasaInteresMensual = tasa / 12 / 100;
        var cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazo));
        var totalAPagar = cuotaMensual * plazo;

        /* Almacenar los datos del préstamo actual en el array de préstamos anteriores */
        var prestamoActual = {
            monto: monto,
            tasa: tasa,
            plazo: plazo,
            cuota: cuotaMensual,
            total: totalAPagar
        };
        this.prestamosAnteriores.push(prestamoActual);

        return {
            cuotaMensual: cuotaMensual,
            totalAPagar: totalAPagar
        };
    },

    /* Método para buscar préstamos anteriores por monto */
    buscarPorMonto: function (monto) {
        return this.prestamosAnteriores.map(function (prestamo) {
            if (prestamo.monto === monto) {
                return prestamo;
            } else {
                return null;
            }
        }).filter(function (prestamo) {
            return prestamo !== null;
        });
    }
};

// Solicitar datos al usuario utilizando prompt
var monto = parseFloat(prompt("Ingrese el monto del préstamo en pesos:"));
var tasa = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
var plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));

// Calcular la cuota y mostrar los resultados en un prompt
var resultadoPrestamo = simuladorCredito.calcularCuota(monto, tasa, plazo);
var resultadoMensaje = `Cuota mensual: $${resultadoPrestamo.cuotaMensual.toFixed(2)}\nTotal a pagar: $${resultadoPrestamo.totalAPagar.toFixed(2)}`;

alert("Resultados del préstamo:\n" + resultadoMensaje);

// Buscar préstamos anteriores por monto y mostrar los resultados en un prompt
var montoBusqueda = parseFloat(prompt("Ingrese el monto para buscar préstamos anteriores:"));
var prestamosAnteriores = simuladorCredito.buscarPorMonto(montoBusqueda);

var mensajeBusqueda = "Préstamos anteriores por monto de $" + montoBusqueda + ":\n";

if (prestamosAnteriores.length === 0) {
    mensajeBusqueda += "No se encontraron préstamos anteriores con ese monto.";
} else {
    for (var i = 0; i < prestamosAnteriores.length; i++) {
        var prestamo = prestamosAnteriores[i];
        mensajeBusqueda += `Monto: $${prestamo.monto.toFixed(2)}, Tasa: ${prestamo.tasa}%, Plazo: ${prestamo.plazo} meses\n`;
    }
}

prompt(mensajeBusqueda);