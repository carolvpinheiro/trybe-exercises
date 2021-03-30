// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. 

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const totalrighttAnswers = (rightAnswers, studentAnswers, rightStudentAnswers) => {
    return rightStudentAnswers(rightAnswers, studentAnswers);
};

const checkAnswers = (arrayRightAnswers, arrayStudentAnswers) => {
    let counter = 0;
    for (index in arrayRightAnswers) {
        let eachtRightAnswer = arrayRightAnswers[index];
        let eachStudentAnswers = arrayStudentAnswers[index];
        if (eachtRightAnswer === eachStudentAnswers) {
            counter += 1;
            console.log(counter)
        } else if (eachStudentAnswers === 'N.A') {
            counter += 0;
            console.log(counter)
        } else if (eachtRightAnswer !== eachStudentAnswers) {
            counter -= 0.5;
            console.log(counter)
        } 
    }
    return counter;
};

console.log(totalrighttAnswers(rightAnswers, studentAnswers, checkAnswers));