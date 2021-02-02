// Arrays
let langs = ["javascript", "Python", "Java", "C#"];

console.log(langs.length);

console.log(langs[1]);

//objecto
let me = {
    firstName: "Daniel",
    lastName: "fernandez",
    address: "Av Santa Barabara",
    specialties: [
        {
            name:"Java",
            certification:false
        },
        {
            name: "JavaScript",
            certification: true
        }
    ]
}

console.log(`My name is ${me.firstName}`);

console.log(me.specialties[1].name);