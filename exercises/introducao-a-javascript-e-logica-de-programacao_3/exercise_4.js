let size = 5;
let linha = "";
let asterisco = "*";

let meioDaPiramede =  (size + 1) /2;
let ladoEsquerdo = meioDaPiramede;
let ladoDireito = meioDaPiramede;

for (let indexLinha = 1; indexLinha <= meioDaPiramede; indexLinha += 1) {
    for (let indexColuna = 1; indexColuna <= size; indexColuna += 1) {
      if (indexColuna > ladoEsquerdo || indexColuna < ladoDireito) {
          linha += ' ';
      } else {
          linha += asterisco;
      }
    }
    console.log(linha);
    linha = '';
    ladoEsquerdo += 1;
    ladoDireito -= 1;
  }