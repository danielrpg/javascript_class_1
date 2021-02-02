// for 

let numbers = [5, 7, 8, 1];

numbers.forEach(function(element, index) {
    console.log(`${element} - ${index}`);
});

numbers.forEach((element, index) => console.log(`${element} - ${index}`));

let book = {
    titulo: "Introduccion a JavaScript",
    autor: "Rayan Dalh",
    numPaginas: 250,
    precio: 15.9
};

for(let prop in book) {
    console.log(`El titulo es: ${prop} - contiene: ${book[prop]}`);
}

numbers.map(number => console.log(number));

let newNumbers = numbers.map(number => number + 5);

console.log(newNumbers);

let newNumbers2 = numbers.map(number => {
    if(number == 7) {
        return number + 10;
    }

    return number + 5;
});

console.log(newNumbers2);

console.log(numbers.sort());

console.log(numbers.pop());

numbers.push(2);
console.log(numbers)
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

try {
  // some action
} catch(exception) {
    console.log(exception);
} finally {
    console.log(`otherwise`);
}

