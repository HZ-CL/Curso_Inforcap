//// -- 01 -- /////
//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function a() {
    let array = []
    for (i = 1; i <= 255; i++) {
        array.push(i)
    }
    return array
}

console.log(a())

//// -- 02 -- /////
//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - 
//Puedes usar un operador de módulo para este ejercicio. 

function sumapares() {
    var suma = 0;
    for (i = 0; i <= 1000; i++) {
        if (i / 2) {
            suma = suma + i
        }
    }
    return suma
}
sumapares()


//// -- 03 -- /////
//Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
//(ej: 1+3+5+...+4997+4999).

function impar() {
    var sumaimpar = 0;
    for (i = 1; i <= 5000; i += 2) {
        if (i % 2 != 0) {
            sumaimpar = sumaimpar + i
        }
    }
    return sumaimpar
}
console.log(impar())


//// -- 04 -- /////
//Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
//(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).

function a(x) {
    var sumavalores = 0;
    for (i = 0; i < x.length; i++) {
        sumavalores = sumavalores + x[i]
    }
    return sumavalores
}
console.log(a([1, 2, 3, 4, 5])) // Output 15


//// -- 05 -- /////
//Encuentra el mayor (max): Dado un array con múltiples valores, 
//escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function max(array) {
    var max = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    return max
}
console.log(max([-3, 3, 5, 7]))

//// -- 06 -- /////
//Encuentra el promedio (avg): Dado un array con múltiples valores, 
//escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function a(arr) {
    var sumprom = 0;
    for (i = 0; i < arr.length; i++) {
        sumprom = sumprom + arr[i]
    }
    return sumprom / arr.length
}
console.log(a([1, 2, 3, 4, 30])) //Output 3


//// -- 07 -- /////
//Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50
// (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function a() {
    var impar = [];
    for (i = 1; i < 50; i += 2) {
        impar.push(i)
    }
    return impar
}
a()

//// -- 08 -- /////
//Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
//Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).

function a(z, y) {
    var sumcant = 0;
    for (i = 0; i < z.length; i++) {
        if (z[i] > y) {
            sumcant = sumcant + 1
        }
    }
    return sumcant
}
console.log(a([1, 3, 5, 7], 3))


//// -- 09 -- /////
//Cuadrados: Dado un array con múltiples valores, 
//escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function a(z) {
    for (i = 0; i < z.length; i++) {
        z[i] = z[i] * z[i]
    }
    return z
}
console.log(a([1, 5, 10, -2]))


//// -- 10 -- /////
//Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. 
//Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function negativos(z) {
    for (i = 0; i < z.length; i++) {
        if (z[i] < 0) {
            z[i] = 0
        }
    }
    return z
}
console.log(negativos([1, 5, 10, -2]))


//// -- 11 -- /////
//Max/Min/Avg: Dado un array con múltiples valores, 
//escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), 
//menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function mmp(z) {
    var max = z[0];
    var min = z[0];
    var sum = 0;
    var zreturn = [];
    for (i = 0; i < z.length; i++) {
        if (max < z[i]) {
            max = z[i]
        }
        if (min > z[i]) {
            min = z[i]
        }
        sum = sum + z[i];
    }
    zreturn.push(max);
    zreturn.push(min);
    zreturn.push(sum / z.length);
    return zreturn;
}
console.log(mmp([1, 5, 10, -2]))

//// -- 12 -- /////
//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function intercambio(z) {
    if (z.length > 1) {
        var cont = z[z.length - 1];
        z[z.length - 1] = z[0];
        z[0] = cont;
    }
    return z
}
console.log(intercambio([1, 5, 10, -2]))

//// -- 13 -- /////
//De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. 
//Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]

function dojo(h) {
    for (i = 0; i < h.length; i++) {
        if (h[i] < 0) {
            h[i] = "Dojo"
        }
    }
    return h
}
console.log(dojo([-1, -3, 2]))