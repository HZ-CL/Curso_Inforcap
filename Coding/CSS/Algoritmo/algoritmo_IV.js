// 1

//Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 

function cantidad(arreglo, y) {
    var contador = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > y) {
            contador = contador + 1;
        }
    }
    return contador
}

// 2

//Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array

function maxminpro(x) {
    let max = x[0]
    let min = x[0]
    let suma = 0
    let prom = [0]
    for (let i = 0; i < x.length; i++) {
        if (max < x[i]) {
            max = x[i]
        }
        if (min > x[i]) {
            min = x[i]
        }
        suma = suma + x[i]
    }
    prom = suma / x.length
    return ([max, min, prom])
}

z = maxminpro([2, 5, 7, 9])
console.log(z)


// 3

//Dado un array de números, crea una función que dé como resultado un nuevo array
//donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. 
//Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].


function reemplazarNegativos(x) {
    var noneNeg = []
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            noneNeg.push("Dojo")
        }
        if (x[i] > 0) {
            noneNeg.push(x[i])
        }
    }
    return noneNeg
}
console.log(reemplazarNegativos([1, 2, -3, -5, 5]));


// 4

//Dado un array y su respectivo índice,
// remueve los valores en el rango del índice dado( acortando el array). 
//Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removerRango(z, x, y) {
    let zreturn = [];
    for (let i = 0; i < z.length; i++) {
        if (i < x || i > y) {
            zreturn.push(z[i])
        }
    }
    return zreturn
}

h = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(h);