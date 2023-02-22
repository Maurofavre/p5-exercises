// function nombreEnCamelCase() {
// Los paréntesis deben quedar vacíos y, luego,
// se abre una llave para alojar las instrucciones.
//   console.log("¡Soy una Función!");
// Bloque de código que se ejecutará luego.
// } // Se cierra la llave.

// -----------------------------------------------------------------------

// function cantarCumpleA(nombre) { // nombre es el paramentro
//   console.log("Que lo cumplas " + nombre + " ! ");
// }

// cantarCumpleA("marcos"); //Marcos, matias, claudia son los arguementos
// cantarCumpleA("matia");
// cantarCumpleA("claudia");
// cantarCumpleA("jose");

// ----------------------------------------------------------------------

// function decirHola(saludo) {
//   console.log("Decir hola a " + saludo);
// }

// decirHola("horacio");
// decirHola("lucas");
// decirHola("magolla");
// decirHola("Magollo");

// ------------------------------------------------------------------------

// function multiply(a, b = 1) {
//   console.log(a * b);
// }
// multiply(3, 2);
// multiply(5);

// // saber diferenciar entre variables y funciones, las funciones se declaran para darle valor a las variables
// -------------------------------------------------------------------------------------

//scoope: Alcanze de la variable, scoope local y global

// function ccontarHasta(numeroLimite) {
//   let contador = 1;
//   while (contador <= numeroLimite) {
//     console.log(contador);
//     contador++;
//   }
// }
// ccontarHasta(20);

// let nombre = "Juan"; // nombre es una Variable Global
// function saludar() {
//   let apellido = "Lopez"; // apellido es una Variable Local
//   console.log("Hola, " + nombre + " " + apellido);
// }
// saludar();
// --------------------------------------------------------------------------

// function sumarLosTres(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// let sumarLosTre = (num1, num2, num3) => num1 + num2 + num3;

// function cuadrado(num) {
//   return num * num;
// }

// let cuadrad = (num) => num * num;

// function decirHola() {
//   console.log("¡Hola!");
// }

// let decirHol = () => console.log("Hola ");

// -----------------------------------------------------------------------------------

// let mayusculas = () => str.toUpperCase();

// //console.log(nombreCompleto("Ada", "Lovelace")); // Ada Lovelace
// //console.log(exclamar("Hedy")); // ¡Hedy!
// console.log(mayusculas("grace")); // GRACE
// // console.log(minusculas("SHERYL")); // sheryl

// Creá una función fn que reciba como Parámetros un número y una función fnCallback.
// fn deberá retornar el resultado de fnCallback pasándole como argumento el número que llega por parámetro a fn.

// function fn(num, fnCallback) {
//   return fnCallback(num);
// }
// fn(5, (a) => a * 10);

// function triplicador(num) {
//   return (num *= 3);
// }

// console.log(triplicador(5));

// let multiplicador = (num1, num2) => num1 * num2;

// let division = (num1, num2) => num1 / num2;

// -----------------------------------------------------------------------------------

function contarDeA(contar_de_a, contar_hasta) {
  let i = 1;
  while (i <= contar_hasta) {
    console.log(i);
    i += contar_de_a;
  }
}
console.log(contarDeA(2, 10));
