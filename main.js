function saludar() {
  let nombre = prompt("Ingrese su nombre");
  alert(nombre + ", Bienvenido/a a EyE INDUMENTARIA!");
}
saludar();

alert("Las compras en efectivo tienen un 20% de descuento, y las compras con tarjeta tienen un 10% de incremento.");

let descuento = 0;
let incremento = 0;
let respuesta = "";
let valorProducto = parseFloat(prompt("Ingrese el valor del producto seleccionado"));
let metodoPago = parseInt(prompt("Ingrese el método de pago (1 para efectivo, 2 para tarjeta)"));

if (metodoPago === 1) {
  descuento = 0.20; // Aplicar descuento del 20% para pago en efectivo
} else if (metodoPago === 2) {
  incremento = 0.10; // Aplicar incremento del 10% para pago con tarjeta
} else {

  while (metodoPago !== 1 && metodoPago !== 2) {
    metodoPago = parseInt(prompt("Método de pago inválido. Ingrese el método de pago nuevamente (1 para efectivo, 2 para tarjeta)"));
    if (metodoPago === 1) {
      descuento = 0.20; // Aplicar descuento del 20% para pago en efectivo
    } else if (metodoPago === 2) {
      incremento = 0.10; // Aplicar incremento del 10% para pago con tarjeta
    }
  }
}

let importeTotal = valorProducto - (valorProducto * descuento) + (valorProducto * incremento);

respuesta = prompt("¿Desea agregar más productos? (SI/NO)").toUpperCase();

while (respuesta === "SI") {
  alert("Hasta el momento lleva gastado: $" + importeTotal);
  valorProducto = parseFloat(prompt("Ingrese el valor del nuevo producto"));
  importeTotal += valorProducto - (valorProducto * descuento) + (valorProducto * incremento);
  if (metodoPago === 1) {
    descuento = 0.20; // Aplicar descuento del 20% para pago en efectivo
  } else if (metodoPago === 2) {
    incremento = 0.10; // Aplicar incremento del 10% para pago con tarjeta
  }
  respuesta = prompt("¿Desea agregar más productos? (SI/NO)").toUpperCase();
}

alert("El valor total de su compra es de: $" + importeTotal);

function despedir() {
  alert("¡MUCHAS GRACIAS POR SU COMPRA!. Vuelva Pronto");
}
despedir();


/* let descuento = 0;
let incremento = 0;
let respuesta = "";
let valorProducto = parseFloat(prompt("Ingrese el valor del producto seleccionado"));
let metodoPago = parseInt(prompt("Ingrese el método de pago (1 para efectivo, 2 para tarjeta)"));

if (metodoPago === 1) {
  descuento = 0.20; // Aplicar descuento del 20% para pago en efectivo
} else if (metodoPago === 2) {
  incremento = 0.10; // Aplicar incremento del 10% para pago con tarjeta
} else {
  while (metodoPago !== 1 && metodoPago !== 2) {
    metodoPago = parseInt(prompt("Método de pago inválido. Ingrese el método de pago nuevamente (1 para efectivo, 2 para tarjeta)"));
    if (metodoPago === 1) {
      descuento = 0.20; // Aplicar descuento del 20% para pago en efectivo
    } else if (metodoPago === 2) {
      incremento = 0.10; // Aplicar incremento del 10% para pago con tarjeta
    }
  }
}

// Calcular el precio final aplicando el descuento o incremento
let precioFinal = valorProducto * (1 - descuento + incremento);

console.log("El precio final es: " + precioFinal); */