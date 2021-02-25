let salarioBruto = 4000;
let alicotaInss;
let alicotaIr;

if (salarioBruto <= 1556.94) {
    alicotaInss = (salarioBruto * 0.08);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    alicotaInss = (salarioBruto * 0.09);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    alicotaInss = (salarioBruto * 0.11);
}
else if (salarioBruto > 5189.82) {
    alicotaInss = 570.88;
}

let salarioBase = salarioBruto - alicotaInss;

if (salarioBase <= 1903.98) {
    alicotaIr = null;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    alicotaIr = (salarioBase * 0.075) - 142,80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    alicotaIr = (salarioBase * 0.15) - 354,80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    alicotaIr = (salarioBase * 0.225) - 636.13;
}
else if (salarioBase > 4664.68) {
    alicotaIr = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - alicotaIr;

console.log(salarioLiquido);