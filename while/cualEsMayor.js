//Ejercicio cual es mayor

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
