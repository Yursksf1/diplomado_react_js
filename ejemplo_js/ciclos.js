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



/**
 * 
 * Ejercicio de Interes

"""
Un prestamos de 10'000.000 a una tasa de interes del 1.5% NMV 
significa que mensualmente esta deuda generara interes de 150.000
es decir al final de mes tienes una deunda de: 10'150.000

asumiendo que haces un abono de 500.000 pesos mensual. en cuanto tiempo 
terminas de saldar la deuda? 

deuda: 10'000.000
mes 1: 10'150.000 - 500.000 = 9'650.000
mes 2: 9'650.000 + 150.000 - 500.000 = 9'300.000
....

mes n: 9'650.000 + 150.000 - 500.000 = 0 
"""

 * 
 */

/**
 * proponer una applicacion que permita poner el terminos de variables el ejercicio anterior
 * monto_prestamo --> ingresa el usuario
 * tasa_de_interes --> ingresa el usuario
 * abono_mensual --> ingresa el usuario
 * 
 * cantidad_de_meses --> resultado del programa
 * pago_total_de_la_deuda --> resultado del programa
 * 
 */