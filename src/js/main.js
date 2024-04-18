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

console.groupCollapsed("Operadores aritméticos")

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

// Operadores de incremento y decremento

console.groupCollapsed("Operadores de incremento y decremento")

let numeroIncrementar = 10
console.log(numeroIncrementar++) //11
console.log(numeroIncrementar++) //12
console.log(numeroIncrementar++) //13
console.log(numeroIncrementar++) //14
console.log(numeroIncrementar++) //15
console.log(numeroIncrementar+=2) //17
console.log(numeroIncrementar+=2) //19
console.log(numeroIncrementar++) //20

let numeroDescender = 100 
console.log(numeroDescender--) //99
console.log(numeroDescender--) //98
console.log(numeroDescender--) //97
console.log(numeroDescender--) //96
console.log(numeroDescender--) //95
console.log(numeroDescender-=40) //55

console.groupEnd()

// Operadores de comparación

console.groupCollapsed("Operadores de comparación")

console.log(5 + 9 == 20) // == igualdad -> false
console.log(9 ===  "9") // === estricto, compara tipo también -> false
console.log(2 != 9) // desigualdad -> true
console.log("2" !== 2) // estricto -> true

const contraseña = "12345"
const contraseñaConfirmacion = "12345"

if (contraseña === contraseñaConfirmacion) {
    console.log("Usuario registrado")
}

//Mayor que
console.log(8 > 5) //true 
console.log(8 > 8) //false
console.log(8 >= 8) //true 

//Menor que
console.log(8 < 5) //false
console.log(8 < 8) //true
console.log(8 <= 8) //true 

console.groupEnd()

// Operadores lógicos

console.groupCollapsed("Operadores lógicos")

//          true  && true 
console.log(1 < 5 && 8 > 2) // true -> con AND (&&) todas tienen que ser true, para que sea true

//            f        t        f        f  
console.log(1 > 6 || 5 > 1 || 8 < 2 || 9 > 50) // true -> con OR (||) minimo una true, para que sea true

// Mezclados -> paréntesis son muy importantes

//                   false            true             true          true
console.log(("usuario" == "Usuario" && 5 > 2) ||("rol" === "rol" && 6 == "6"))
//                                   F        ||                  T            ->True

let variable10 = true
!variable // false -> ! = not

console.groupEnd()
