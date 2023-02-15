let numero = parseInt(prompt("Ingrese un numero"));
let acumulador = 0;

while (numero > 0) {
  numero = parseInt(prompt("Ingrese un numero")); // Si numero es positivo, entonces true, le pido de vuelta un numero
  acumulador++; // va sumando en 1 las veces que se lleva acabo el ciclo
}
alert("Numero ingresado es negativo, intentaste " + acumulador);
