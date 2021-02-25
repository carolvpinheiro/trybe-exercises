let peca;
peca = 'DAMA';

switch (peca) {
    case ("DAMA".toLowerCase()):
        console.log("Executa todos os movimentos menos o movimento do cavalo");
        break;

    case ("REI".toLowerCase()):
        console.log("Movimenta uma casa pra frente, pra trás ou para um dos lados");
        break;

    case ("PEÃO".toLowerCase()):
        console.log("Movimenta uma casa pra frente, pra trás ou para um dos lados");
        break;
    
    case ("CAVALO".toLowerCase()):
        console.log("Movimento em L");
        break;

    case ("BISPO".toLowerCase()):
        console.log("Movimenta na diagonal");
        break;

    case ("TORRE".toLowerCase()):
        console.log("Movimenta na vertical");
        break;

    default:
        console.log("ERRO");
}
