// Solucion Mauro

// let numero = parseInt(prompt("numero")); // parseInt convierte directamente un string en un número entero

// while (numero > 0) {
//   if (numero % 2 == 0) {
//     console.log("Es par");
//   } else if (numero % 2 == 1) {
//     console.log("Numero impar");
//   }
//   numero = parseInt(prompt("Ingrese un numero"));
// }
// alert("El numero ingresado es 0 o menor a 0");
//Solucion Berni
// let numUser = parseInt(prompt("Ingrese un numero por favor: ")); // parseInt convierte directamente un string en un número entero

// while (!(numUser === 0 || numUser < 0)) //El "!"" esta para dar vuelta el resultado de la condicion, de true a false{
//   if (numUser % 2 === 0) {
//     console.log("El numero: " + numUser + " es par");
//   } else {
//     console.log("El numero: " + numUser + " es impar");
//   }
//   numUser = parseInt(prompt("Ingrese un numero por favor: "));
// }

// alert("El numero ingresado es 0 o menor a 0");
// --------------------------------------------------------------------------
//                          OBLIGAR A QUE COMPLETEN SI O SI

// let input
// while( !(input = prompt('Escriba su nombre, por favor.')) ){
//   alert("No recibimos la información.")
// }
// alert("¡Gracias! Su nombre es: " + input + ".")
// -----------------------------------------------------------------------
// let i = 1;
// let j = 1;
// let final = 5;
// while (i <= final) {
//   j = 1;
//   while (j <= final) {
//     console.log(i + " - " + j);
//     j++;
//   }
//   i++;
// }

// ----------------------------------------------------------------
//    GASEOSA

// let stock = 100;
// let gaseosa = 1;

// while (gaseosa <= stock) {
//   if (gaseosa % 3 == 0 && gaseosa % 5 == 0) {
//     console.log("fizzBuzz");
//   } else if (gaseosa % 5 == 0) {
//     console.log("Buzz");
//   } else if (gaseosa % 3 == 0) {
//     console.log("fizz");
//   } else {
//     console.log(gaseosa);
//   }

//   gaseosa++;
// }

// -----------------------------------------------------------------------
// let i = 1;
// let final = 5;
// let acumulador = 0;
// while (i <= final) {
//   acumulador += i;
//   i++;
// }
// console.log(acumulador);

// ---------------------------------------------------------------------

// let palabraMagica = "abrete sesamo";
// let palabraIntento = prompt("Diga palabra secreta");

// while (palabraIntento != palabraMagica) {
//   alert("dijiste mal la palabra");
//   palabraIntento = prompt("Pruebe nuevamente");
// }
// alert("Bienvenido");

// while (condition) {
//     Ejecuta este codigo
//     Y hace algo para que la condicion deje de cumplir
//  }

// ------------------------------------------------------------------

// para saber si pueden jubilarse o no

// let edad = prompt("edad");
// let sexo = prompt("sexo");

// if (edad >= 60 && sexo == "femenino") {
//   alert("puedes jubilarte mujer");
// } else if (edad >= 65 && sexo == "masculino") {
//   alert("puedes jubilarte hombre");
// }
