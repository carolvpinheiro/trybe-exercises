let size = 5;
let linha = "";
let asterisco = "*";
let basePiramede = size;

for (let indexLinha = 1; indexLinha <= size; indexLinha += 1) {
  for (let indexColuna = 1; indexColuna <= size; indexColuna += 1) {
    if (indexColuna < basePiramede) {
        linha = linha + ' ';
    } else {
        linha = linha + asterisco;
    }
  }
  console.log(linha)
  linha = '';
  basePiramede -= 1;
}