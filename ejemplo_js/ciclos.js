inicio = 0
fin = 10
fin = parseInt(window.prompt('ingrese el numero para hacer el ciclo: '))    

for (let index = inicio; index < fin; index++) {
    console.log(index)
    valor = parseInt(window.prompt('ingrese el numero para hacer el ciclo: '))    
    console.log("ingresaste ", valor)
    
}
console.log('se acabo la ejecucion de mi codigo')


/**
 * Ejeccicio 
 * Hacer un programa en Js que pregunte al usuario cuantos valores desea ingresar 
 * dichos valores deben ser numericos.
 * cuando termine de ingresar los valores el programa debe visualizar el promedio.
 * 
 * Ejemplo:
 * valores a ingresar: 3
 * valor 1: 5
 * valor 2: 10
 * valor 3: 15
 * 
 * operacion = (5 + 10 + 15) / 3  ==> 10 (promedio)
 * 
 * promedio: 10 
 */