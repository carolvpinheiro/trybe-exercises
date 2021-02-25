let valorCusto = 80;
let valorVenda = 180;
let lucro;

if (valorCusto > 0) {
    lucro = (valorVenda - valorCusto) - (valorCusto * 0.2);
    console.log(lucro);
}
else {
    console.log("ERRO");
}