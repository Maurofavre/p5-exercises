//¿Cuál Es El Mayor?
// Deberás usar el método prompt para que el usuario ingrese 2 números distintos. *
// Tu programa los evaluará y le responderá cuál es el mayor.
// Si los números son iguales, deberá mostrar un mensaje para que ingrese un número distinto.
// El programa finalizará cuando alguno de los 2 números sea "0".

let num1 = parseInt(prompt("ingrese un numero del 0 al 50"));
let num2 = parseInt(prompt("ingrese un numero del 0 al 50"));

while (num1 > 0 && num1 < 50 && num2 > 0 && num2 < 50) {
  if (num1 > num2) {
    alert(num1 + " mayor a " + num2);
    break;
  } else if (num1 < num2) {
    alert(num2 + " mayor a " + num1);
    break;
  } else if (num1 == num2) {
    alert("Porfavor ingrese numeros distintos");
    num1 = parseInt(prompt("ingrese un numero del 0 al 50"));
    num2 = parseInt(prompt("ingrese un numero del 0 al 50"));
  }
}
alert("fin del programa, controle los numeros");

//Solucion Berni
// while (!(num1 === 0 || num2 === 0)) {
//   if (num1 === num2) {
//     alert("Ambos numeros sin iguales, ingrese un numero distinto");
//     // num1 = parseInt(prompt('Ingrese el 1er numero: '));
//     num2 = parseInt(prompt("Ingrese el 2do numero: "));
//   } else if (num1 > num2) {
//     alert("El primer numero es mayor al segundo numero");
//     break;
//   } else {
//     alert("El segundo numero es mayor al primero");
//     break;
//   }
// }
// alert("Fin del programa");
