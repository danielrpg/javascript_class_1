//console.log("Hello ES6");

var name = "daniel"; // Antigua
let lastName = "Fernandez";
const address = "Av St Barbara";

function sayHello() {
    console.log('Hola ' + name + ' \n ' + lastName);
    var name = `Hola ${name} ${lastName}`;
    console.log(`${name}`);
}

sayHello();