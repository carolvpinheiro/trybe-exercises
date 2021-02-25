let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
let mediaAritmetica = 0;

for (let counter = 0; counter < numbers.length; counter += 1) {
    somaNumbers += numbers[counter];
}

mediaAritmetica = somaNumbers / 2;
console.log(mediaAritmetica);
