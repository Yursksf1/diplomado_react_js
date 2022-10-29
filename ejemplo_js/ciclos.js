inicio = 0
fin = 0
// fin = parseInt(window.prompt('ingrese el numero para hacer el ciclo: '))    

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


// WHILE

contador = 0
bandera = true
while (bandera) {
    console.log('estoy dentro de un bucle w')
    console.log(contador)
    contador = contador + 1
    if (contador > 10) {
        // bandera = false
        break
    }
    value = window.prompt('insert de control: ')
    // console.log(value)
}
console.log('ya sali del ciclo while')


/**
 * Realizar un programa en Js
 * que calcule la suma de los valores ingresados por un alert
 * ya que el programa no es conciente de cuantos valores seran agregados
 * el programa dejara de sumar y recibir numeros cuando el valor ingresado sea 0
 * 
 * Ingresa un numero: 5
 * Ingresa un numero: 4
 * Ingresa un numero: 3
 * Ingresa un numero: 0
 * 
 * El valor total es: 12
 * 
 */


