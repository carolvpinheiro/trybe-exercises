//EX-1
let a = 8;
let b = 4;

let soma = a + b;
let subitracao = a - b;
let multiplicacao = a * b;
let divisão = a / b;
let mod = (a % b) == 0;

//EX-2
let numMaior = 20;
let numMenor = 10;

if (numMaior > numMenor) {
    console.log(numMaior);
}
else {
    console.log(numMenor);
}

//EX-3
let num1 = 3;
let num2 = 17;
let num3 = 9;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2)
}
else {
    console.log(num3);
}

//EX-4
let valor = 6;

if (valor % 2 == 0) {
    console.log("positivo");
}
else if (valor % 2 != 0) {
    console.log("negativo");
}
else {
    console.log("zero");
}

//EX-5
let angulo1 = 60;
let angulo2 = 40;
let angulo3 = 80;

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("true");
}
else if (angulo1 + angulo2 + angulo3 != 180) {
    console.log("flase");
}
else {
    console.log("ERRO");
}

//EX-6
let peca;
peca = "dama";

switch (peca) {
    case ("dama"):
        console.log("Todos os movimentos menos o movimento do cavalo");
        break;

    case ("rei"):
        console.log("Movimenta uma casa pra frente, pra trás ou para um dos lados");
        break;

    case ("pião"):
        console.log("Movimenta uma casa pra frente, pra trás ou para um dos lados");
        break;
    
    case ("cavalo"):
        console.log("Movimento em L para esquerda ou direita");
        break;

    case ("bispo"):
        console.log("Movimenta na diagonal");
        break;

    case ("torre"):
        console.log("Movimenta na vertical");
        break;
}

//EX-7
let nota = 0.4;

if (nota >= 0.9) {
    console.log("A");
}
else if (nota >= 0.8) {
    console.log("B");
}
else if (nota >= 0.7) {
    console.log("C");
}
else if (nota >= 0.6) {
    console.log("D");
}
else if (nota >= 0.5) {
    console.log("E");
}
else if (nota < 0.5) {
    console.log("F")
}
else {
    console.log("ERRO")
}

//EX-8
let num1 = 11;
let num2 = 78;
let num3 = 22;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

//EX-9
let num1 = 11;
let num2 = 78;
let num3 = 22;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    console.log(true);
}
else {
    console.log(false);
}

//EX-10
let valorCusto = 100;
let valorVenda = 180;
let lucro;

if (valorCusto > 0) {
    lucro = (valorCusto * 0.2) + (valorCusto - valorVenda);
    console.log(lucro);
}
else {
    console.log("ERRO");
}

//EX-11
/*
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
*/
let salarioBruto = 4000;
let alicotaInss;
let salarioBase = salarioBruto - alicotaInss;
let alicotaIr;

if (salarioBruto <= 1556,94) {
    alicotaInss = (salarioBruto * 0.08);
}
else if (salarioBruto >= 1556,95 && salarioBruto <= 2594.92) {
    alicotaInss = (salarioBruto * 0.09);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    alicotaInss = (salarioBruto * 0.11);
}
else if (salarioBruto > 5189.82) {
    alicotaInss = 570,88;
}

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



