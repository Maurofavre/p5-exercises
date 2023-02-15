//Par o Impar 
//Crear un programa que le pregunte al usuario un número y que le devuelva un mensaje que indique si es par o impar. 
//El programa terminará si el usuario ingresa un 0 o un número negativo.

                                                   // Solucion Mauro

 let numero = parseInt(prompt("numero")); // parseInt convierte directamente un string en un número entero

 while (numero > 0) {
   if (numero % 2 == 0) {
     console.log("Es par");
   } else if (numero % 2 == 1) {
     console.log("Numero impar");
   }
   numero = parseInt(prompt("Ingrese un numero"));
 }/ alert("El numero ingresado es 0 o menor a 0");
                                               
                                                   //Solucion Berni
 let numUser = parseInt(prompt("Ingrese un numero por favor: ")); // parseInt convierte directamente un string en un número entero

 while (!(numUser === 0 || numUser < 0)) //El "!"" esta para dar vuelta el resultado de la condicion, de true a false{
   if (numUser % 2 === 0) {
     console.log("El numero: " + numUser + " es par");
   } else {
     console.log("El numero: " + numUser + " es impar");
   }
   numUser = parseInt(prompt("Ingrese un numero por favor: "));
 }

 alert("El numero ingresado es 0 o menor a 0");
