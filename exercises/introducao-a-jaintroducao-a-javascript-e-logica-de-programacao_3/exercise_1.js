let nAsterisco = 5;

for (let indexLinha = 1; indexLinha <= nAsterisco; indexLinha += 1) {
    let asteriscoLinha = "";
    
    for (let indexColuna = 1; indexColuna <= nAsterisco; indexColuna += 1) {
        asteriscoLinha += "*";   
    }

    console.log(asteriscoLinha);
}

