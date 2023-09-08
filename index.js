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

var simuladorCredito = {
    prestamosAnteriores: [],

    calcularCuota: function (monto, tasa, plazo) {
        var tasaInteresMensual = tasa / 12 / 100;
        var cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazo));
        var totalAPagar = cuotaMensual * plazo;

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
let lista = true

while (lista) {
    let opcion = parseInt(
        prompt(
            "Elija una opcion para continuar \n 1- Simular un credito \n 2- Buscar un credito \n 3- Salir"
        )

    );
    switch (opcion) {
        case 1:
            var monto = parseFloat(prompt("Ingrese el monto del préstamo en pesos:"));
            var tasa = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
            var plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));
            var resultadoPrestamo = simuladorCredito.calcularCuota(monto, tasa, plazo);
            var resultadoMensaje = `Cuota mensual: $${resultadoPrestamo.cuotaMensual.toFixed(2)}\nTotal a pagar: $${resultadoPrestamo.totalAPagar.toFixed(2)}`;
            alert("Resultados del préstamo:\n" + resultadoMensaje);
            break;
        case 2:
            var montoBusqueda = parseFloat(prompt("Ingrese el monto para buscar préstamos anteriores:"));
            var prestamosAnteriores = simuladorCredito.buscarPorMonto(montoBusqueda);

            var mensajeBusqueda = "Préstamos anteriores por monto de $" + montoBusqueda + ":\n";

            if (prestamosAnteriores.length === 0) {
                mensajeBusqueda += "No se encontraron préstamos anteriores con ese monto.";
            } else {
                for (var i = 0; i < prestamosAnteriores.length; i++) {
                    var prestamo = prestamosAnteriores[i];
                    mensajeBusqueda += `Monto: $${prestamo.monto.toFixed(2)}, Tasa: ${prestamo.tasa}%, Plazo: ${prestamo.plazo} meses,\nCuota mensual: $${resultadoPrestamo.cuotaMensual.toFixed(2)}\nTotal a pagar: $${resultadoPrestamo.totalAPagar.toFixed(2)}\n`;
                }
            }

            alert(mensajeBusqueda);
            break;
        case 3:
            alert("Gracias por visitar nuestra web");
            lista = false;
            break;
        default:
            alert("La opcion invalida");
    }
}