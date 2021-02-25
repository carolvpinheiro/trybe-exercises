let peca;
peca = 'DAMA';

switch (peca) {
    case ('DAMA'.toLowerCase()):
        console.log("Executa todos os movimentos menos o movimento do cavalo");
        break;

    case ("REI".toLowerCase()):
        console.log("Movimenta uma casa pra frente, pra trás ou para um dos lados");
        break;

    case ("peão"):
        console.log("Movimenta uma casa pra frente, pra trás ou para um dos lados");
        break;
    
    case ("cavalo"):
        console.log("Movimento em L");
        break;

    case ("bispo"):
        console.log("Movimenta na diagonal");
        break;

    case ("torre"):
        console.log("Movimenta na vertical");
        break;

    default:
        console.log("ERRO");
}
