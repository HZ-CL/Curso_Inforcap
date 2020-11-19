/// errores 3 de 15 ///

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --//



//// Ex 01 ////

function a() {
    return 35;
}
console.log(a())
    //Rsp. 35
    //Output 35


//// Ex 02 ////

function a() {
    return 4;
}
console.log(a() + a());
//Rsp. 8
//Output: 8



////Ex 03 ////

function a(b) {
    return b;
}
console.log(a(2) + a(4));
//Rsp. 6
//Output: 6



//// Ex 04 ////

function a(b) {    
    console.log(b);
    return b * 3;
}
console.log(a(3));
//Rsp. 3,9
//Output: 3,9



//// Ex 05 ////

function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));
//Rsp. 40
//Output: 40


//// Ex 06 ////

function a(b) {
    if (b < 10) {
        return 2;
    }    
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//Rsp. 4 
//Output: 4


//// Ex 07 ////

function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));
//Rsp. 30, 30
//Output: 10,3,30


//// Ex 08 ////

function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Rsp. 3,4
//Output: 3,4


//// Ex 09 ////

function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();
//Rsp. 2,5,8,11
//Output: 2,5,8,11


//// Ex 10 ////

function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));
//Rsp.    0,1,2,3,4,5,6,7,8,9,0
//Output: 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0



//// Ex 11 ////

function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}
//Rsp. 
//Output



//// Ex 12 ////

function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}
//Rsp. 
//Output:



//// EX 13 ////

var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
console.log(z);
//Rsp. 10
//Output: 10



//// Ex 14 ////

var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//Rsp. 10
//Output: 15,10



//// Ex 15 ////

var z = 10;

function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//Rsp. 15,15
//Output: 15,15