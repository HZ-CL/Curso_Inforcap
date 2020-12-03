//// Fundamentos Intermedios ////

/// -- 01 -- ///
//Sigma - Implementa una función sigma(num) que, dado un número, 
//devuelve la suma de todos los enteros positivos (incluyendo el número dado).
// Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

function sigma(num) {
    var sum = 0;
    for (i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sigma(5));


/// -- 02 -- ///
//Factorial - Escribe una función factorial(num) que, dado un número, 
//devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado).
// Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

function factorial(num) {
    var producto = 1;
    for (i = 1; i <= num; i++) {
        producto = producto * i;
    }
    return producto
}
console.log(factorial(3))


/// -- 03 -- ///
//Fibonacci - Crea una función para generar números de Fibonacci.
// En esta famosa secuencia matemática, cada número es la suma de las dos anteriores,
// partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, 
//un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc).
// Ejemplos: 
//fibonacci(0) = 0 (dado), 
//fibonacci(1) = 1 (dado), 
//fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), 
//fibonacci(3) = 2 (fib(1) + fib(2), o 1+1), 
//fibonacci(4) = 3 (1+2), 
//fibonacci(5) = 5 (2+3), 
//fibonacci(6) = 8 (3+5), 
//fibonacci(7) = 13 (5+8). 
//Haz esto primero sin usar recursión. 
//Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad.

function fibonacci(z) {
    var result = [0, 1];
    for (i = 1; i <= z; i++) {
        result[i] = result[result.length - 2] + result[result.length - 1]
    }
    return result[result.length - 1];
}
console.log(fibonacci(6))


/// -- 04 -- ///
//Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”.
// Si el array es muy pequeño, devuelve null.  

function penultimo(z) {
    if (z.length < 2) {
        return null
    } else {
        return z[z.length - 2];
    }
}
console.log(penultimo([42, true, 4, "Liam", 7]))



/// -- 05 -- ///
//Array: “N” último: Devuelve el elemento “N” último.
// Dado ([5,2,3,6,4,9,7],3], devuelve 4. Si el array es muy pequeño, devuelve null. 

function nulti(z, l) {
    if (z.length < 2) {
        return null
    } else {
        return z[z.length - l];
    }
}
console.log(nulti([5, 2, 3, 6, 4, 9, 7], 3))


/// -- 06 -- ///
//Array: Segundo más grande: Devuelve el segundo elemento más grande de un array.
// Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.

function matojo(p5) {
    var max = [];
    var max2 = [];
    for (i = 0; i < p5.length; i++) {
        if (max < p5[i]) {
            max = p5[i]
        }
    }
    for (i = 0; i < p5.length; i++) {
        if (p5[i] != max) {
            if (max2 < p5[i]) {
                max2 = p5[i]
            }
        }
    }
    return max2;
}
console.log(matojo([42, 1, 4, 3.14, 7]))



/// -- 07 -- ///
//Doble Problema Par: Crea una función que cambie un array dado 
//duplicando cada uno de sus elementos en una posición par,
// y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a   
// [4,4, "Ulysses", 42, 42, false].

function Convierte(t1) {
    var cont = []
    for (i = 0; i < t1.length; i++) {
        cont.push(t1[i]);
        cont.push(t1[i]);
    }
    return cont;
}
console.log(Convierte([4, "Ulysses", 42, false]))


//// recursiones ////

/*/ -- 01 -- /*/
/*Crea una función Fib(n) que devuelve el enésimo número Fibonacci.
Usa recursión para esto.*/

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n - 2) + fib(n - 1)
}
console.log(fib(4))


/*/ -- 02 -- /*/
/*Relleno recursivo*/