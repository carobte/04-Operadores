console.log("Operadores JS")

// Tipos de datos

console.groupCollapsed("Tipos de datos")

let variable = 156
let variable2 = "854"
let variable3 = "hola mundo"
let variable4 = true
let variable5 // undefined
let variable6 = null
let variable7 = ["Caro", "Pablo", "Santi", "Juanjo"]
let variable8 = { "nombre": "Caro", "edad": 26 } // El key funciona sin "" también
let variable9 = function name(params) { }

console.log(
    `Variable: ${(typeof variable)}
Variable 2: ${(typeof variable2)}
Variable 3: ${(typeof variable3)}
Variable 4: ${(typeof variable4)}
Variable 5: ${(typeof variable5)}
Variable 6: ${(typeof variable6)}
Variable 7: ${(typeof variable7)}
Variable 8: ${(typeof variable8)}
Variable 9: ${(typeof variable9)}

`)

console.groupEnd()

// Operadores aritméticos

console.group("Operadores aritméticos")

let num1 = 10
let num2 = 5

let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let division = num1 / num2
let potencia = num1 ** 5 //Math.pow -> método de JS
let resto = num1 % num2

console.log(`Suma: ${suma}
Resta: ${resta}
Multiplicación: ${multiplicacion}
División: ${division}
Potencia: ${potencia}
Resto: ${resto}
`)

console.groupEnd()