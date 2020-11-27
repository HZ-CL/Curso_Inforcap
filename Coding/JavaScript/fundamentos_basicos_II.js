//// Fundamentos_Basicos ////

//// --- 01 --- ////
// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”.
// Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function grande(z) {
    for (i = 0; i < z.length; i++) {
        if (z[i] > 0) {
            z[i] = "big"
        }
    }
    return z;
}

console.log(grande([-1, 3, 5, -5]))



//// --- 02 --- ////
//Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números.
// La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.

function printreturn(a) {
    let min = a[i];
    let max = a[i];
    for (let i = 0; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i]
        }
        if (max < a[i]) {
            max = a[i]
        }
    }
    console.log(min);
    return max;
}

console.log(printreturn([5, 4, 3, 2, 1, 0]))

//// --- 03 --- ////
//Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números.
// La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function printreturn(m) {
    console.log(m[m.length - 2]);
    for (i = 0; i < m.length; i++) {
        if (m[i] % 2 != 0) {
            return m[i]
        }
    }
}

console.log(printreturn([0, 4, 6, 7, 8, 3]))


//// --- 04 --- ////
//Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique.
// Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doble(b) {
    let doblereturn = [];
    for (i = 0; i < b.length; i++) {
        doblereturn.push(b[i] * 2)
    }
    return doblereturn;
}
console.log(doble([1, 2, 3]))

//// --- 05 --- ////
//Contar Positivos -  Dado un array de números, crea una función para
// reemplazar el último valor con el número de valores positivos encontrados en el array. 
//Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function contarPositivos(r) {
    var sumapositivo = 0;
    for (i = 0; i < r.length; i++) {
        if (r[i] > 0) {
            sumapositivo = sumapositivo + 1
        }
    }
    r[r.length - 1] = sumapositivo;
    return r;
}
console.log(contarPositivos([-1, 1, 1, 1]))

//// --- 06 --- ////
//Pares e Impares - Crea una función que acepte un array. 
//Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”,
// y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function paresimpares(a) {
    var cantpar = 0;
    var cantimpar = 0;
    for (i = 0; i < a.length; i++) { //0
        if (a[i] % 2 == 0) { //
            cantpar = cantpar + 1;
            cantimpar = 0;
        } else {
            cantimpar = cantimpar + 1;
            cantpar = 0;
        }
        if (cantpar == 3) { //0
            console.log("¡Es para bien!")
        }
        if (cantimpar == 3) { //0
            console.log("¡Qué imparcial!")
        }
    }
}

function paresimpares(array) {
    let cuenta = 0;
    let cuenta2 = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 != 0) {
            cuenta = cuenta + 1;
            if (cuenta >= 3) {
                return "¡Qué imparcial!";
            }
        }
        if (array[index] % 2 == 0) {
            cuenta2 = cuenta2 + 1;
            if (cuenta2 >= 3) {
                return "¡Es para bien!";
            }
        }
    }
}

console.log(paresimpares([1, 1, 1, 2, 2, 2, 5, 5]))


//// --- 07 --- ////
//Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento,
// específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc).
// Luego, console.log cada valor del array y devuelve arr. 

function sumauno(n) {
    for (i = 0; i < n.length; i++) {
        if (i % 2 != 0) {
            n[i] = n[i] + 1;
        }
        console.log(n[i])
    }
    return n;
}
console.log(sumauno([2, 3, 4, 5, 6, 7, 8]))



//// --- 08 --- ////
//Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’)
// que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior.
// Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”])
// debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?

function array(o) {
    for (i = o.length - 2; i >= 0; i--) { //1
        var numleng = o[i].length; //o[1].length>4
        o[i + 1] = numleng;
    }
    return o;
}
console.log(array(["programar", "dojo", "genial"]))



//// --- 09 --- ////
//Agrega Siete - Construye una función que acepte un array.
// Devuelve un nuevo array con todos los valores del original,
// pero sumando 7 a cada uno. No alteres el array original.
// Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

function agregaSiete(h) {
    var agregado = [];
    for (i = 0; i < h.length; i++) {
        agregado.push(h[i] + 7);
    }
    return agregado;
}
agregaSiete([1, 2, 3])



//// --- 10 --- ////
//Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar.
// Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3].
// Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function invertir(e) {
    for (i = 0; i <= e.length / 2; i++) {
        var cont = 0;
        cont = e[i];
        e[i] = e[e.length - (i + 1)];
        e[e.length - (i + 1)] = cont;
    }
    return e;
}

console.log(invertir([3, 1, 6, 4, 2]))



//// --- 11 --- ////
//Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original,
// pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function saleN(c) {
    var negat = [];
    for (i = 0; i < c.length; i++) {
        if (c[i] > 0) {
            negat.push(c[i] * -1);
        } else {
            negat.push(c[i]);
        }
    }
    return negat;
}

console.log(saleN([1, -3, 5]))


//// --- 12 --- ////
//Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”.
// Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function food(t) {
    var snack = 0;
    for (i = 0; i < t.length; i++) {
        if (t[i] == "comida") {
            console.log("yummy");
            snack = snack + 1;
        }
    }
    if (snack == 0) {
        console.log("tengo hambre")
    }
}
food([1, "comida", 4, 7, "comida"]) // yummy, yummy



//// --- 13 --- ////
//Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc.
// Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true].
// cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

function cambiopos(o) {
    for (i = 0; i <= o.length / 2; i += 2) {
        var cont = 0;
        cont = o[o.length - (i + 1)];
        o[o.length - (i + 1)] = o[i];
        o[i] = cont;
    }
    console.log(o)
}
cambiopos([1, 2, 3, 4, 5, 6]) //[6,2,4,3,5,1]

//// --- 14 --- ////
//Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num,
// y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function array(arr, num) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

console.log(array([1, 2, 3], 3))