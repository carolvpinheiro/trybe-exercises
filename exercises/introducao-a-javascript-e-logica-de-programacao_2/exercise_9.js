let incrementingArrayWithFor = [];

for (let index = 1; index <= 25; index += 1) {
   incrementingArrayWithFor.push(index);
}

console.log(incrementingArrayWithFor);

let divisão = 0;

for (let index2 = 0; index2 < incrementingArrayWithFor.length; index2 += 1) {
    let eachNumber = incrementingArrayWithFor[index2];

    console.log(eachNumber / 2);
}
