let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let eachNumber = numbers[index];

    if (eachNumber > higherNumber) {
        higherNumber = eachNumber;
    }
}

console.log(higherNumber);