let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let eachNumber = numbers[index];  

    if (eachNumber % 2 !== 0) {
        oddNumbers += 1;
    }     
}

if (oddNumbers > 0) {
    console.log(oddNumbers);
}
else {
    console.log("nenhum valor ímpar encontrado");
}

