// ex 1 //

function multiply(x, y) {
    console.log(x);
    console.log(y);
} //no hay return.
b = multiply(2, 3);
console.log(b);
//Rsp: 2,3,undefined

// ex 2 //

function multiply(x, y) {
    return x * y;
}
b = multiply(2, 3);
console.log(b); //b=6
console.log(multiply(5, 2)); //10
//Rsp: 6,10

// ex 3 //

var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) { //i=0,3,4,7,8
    i = i + 3;
    console.log(i); //i=3,7
}
//Rsp: 3,7

// ex 4 //

var x = 15;
console.log(x); //15

function awesome() {
    var x = 10;
    console.log(x); //10
}
console.log(x); //15
awesome();
console.log(x); //15
//Rsp: 15,15,10,15

// ex 5 //

for (var i = 0; i < 15; i += 2) { //i=0,2,4,6,8,10,12,14,16
    console.log(i); //0,2,4,6,8,10,12,14
}
//Rsp: 0,2,4,6,8,10,12,14

// ex 6 //

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log(i * j); //0,0,0,1,0,2
    }
}
//Rsp: 0,0,0,1,0,2

// ex 7 //
function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < x; j++) {
            console.log(i * j); //0,0,0,0,1,2,0,2,4
        }
    }
}
z = looping(3, 3);
console.log(z); //undefined
//Rsp: 0,0,0,0,1,2,0,2,4,undefined

// ex 8 //

function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            console.log(i * j); //*0,0,0,0,0,0,1,2,3,4,0,2,4,6,8
        }
    }
    return x * y;
}
z = looping(3, 5); //15
console.log(z);
//Rsp: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

// PrintUpTo //

function printUpTo(x) {
    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
    if (x < 0) {
        console.log("nuemro negativo");
        return false;
    }
}
printUpTo(1000);
y = printUpTo(-10)
console.log(y)


// PrintSum //

function printSum(x) {
    var sum = 0;
    for (var i = 0; i < x; i++) {
        console.log(i);
        sum = sum + i;
        console.log(sum)
    }
    return sum
}
y = printSum(255)
console.log(y)

// PrintSumArray //

function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum;
}
console.log(printSumArray([1, 2, 3]));

// LargestElement //

function largestelement(x) {
    var mayor = x[0];
    for (var i = 0; i < x.length; i++) {
        if (x[i] > mayor) {
            mayor = x[i]
        }
    }
    return mayor
}

console.log(largestelement([1, 30, 5, 7]))