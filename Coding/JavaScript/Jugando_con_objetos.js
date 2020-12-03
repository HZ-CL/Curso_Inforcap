var users = [{
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

//¿Cómo harías print/log de la edad de John?

function edad(nn) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == nn) {
            return users[i].age;
        }
    }
}
console.log(edad("John"))


//¿Cómo harías print/log del nombre del primer objeto?

console.log(users[0].name)




//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop?
// Tu output debería verse algo como esto
/*  Michael - 37
    John - 30
    David - 27*/

function list() {
    for (i = 0; i < users.length; i++) {
        console.log(users[i].name, "-", users[i].age);
    }
}
console.log(list());




//¿Cómo harías para imprimir el nombre de los mayores de edad?

function adult() {
    for (i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            console.log(users[i].name)
        }
    }
}
console.log(adult())