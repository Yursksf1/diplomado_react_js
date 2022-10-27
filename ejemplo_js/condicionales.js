valor = parseInt(window.prompt("Ingrese la opcion que desee realizar", "1"))

if (valor == 1) {
    alert("seleccionaste la opcion 1")
} else {
    alert("seleccionaste algo diferente a la opcion 1")
}



console.log(valor)

let time = new Date().getHours();
// time = 5
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting)

// Ejercicios 
/*
- Realizar una funcion que salude Segun la hora del dia, usar 
"Buenos dias" si esta en el rango de 6 a 12 del dia
"Buenas tardes" si esta en el reango de 12 a 18 pm
"Buenas noches" si esta en el rango de 18 a 00
"Es muy tarde deberias estar durmiendo" si no esta en alguno de los rangos 


*/