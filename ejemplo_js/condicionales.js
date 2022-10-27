// valor = parseInt(window.prompt("Ingrese la opcion que desee realizar", "1"))

// if (valor == 1) {
//     alert("seleccionaste la opcion 1")
// } else {
//     alert("seleccionaste algo diferente a la opcion 1")
// }



// console.log(valor)

// let time = new Date().getHours();
// // time = 5
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting)

// Ejercicios 
/*
- Realizar una funcion que salude Segun la hora del dia, usar 
"Buenos dias" si esta en el rango de 6 a 12 del dia
"Buenas tardes" si esta en el reango de 12 a 18 pm
"Buenas noches" si esta en el rango de 18 a 00
"Es muy tarde deberias estar durmiendo" si no esta en alguno de los rangos 


*/
function SaludarHora(time) {
    saludo = "Buenos Dias"

    if (time < 6) {
        saludo  = "es de madrugada"
    } else if (time < 12) {
        saludo  = "Buenos Dias"
    } else if ( time < 18) {
        saludo = "Buenas Tarde"
    } else {
        saludo = "Buenas noches"
    } 
    return saludo
}

time = 3
console.log(time, "para saludar: ",  SaludarHora(time))
time = 14
console.log(time, "para saludar: ",  SaludarHora(time))
time = 11
console.log(time, "para saludar: ",  SaludarHora(time))
time = 21
console.log(time, "para saludar: ",  SaludarHora(time))
time = 15
console.log(time, "para saludar: ",  SaludarHora(time))
time = 7
console.log(time, "para saludar: ",  SaludarHora(time))



// Ternaria 
var a = 2;
var b = 3;    
var c = ((a < b) ? 'minor' : 'major');

// if de toda al vida 
var a = 2;
var b = 3;   
var c; 
if (a < b) {
    c = 'minor';
} else {
    c = 'major';
}


// Ejercicios 2
/*
- definir una funcion con la formula x^2 + x + 1
- definir una funcion con la formula libre plolinomio,
reto: 
- artitmetico, calculadora de raices de una parabola 
una parabola se define con la formuna ax^2 + bx + c = 0
(-b +- (b^2 - 4*ac)^(1/2)) / 2a 


*/