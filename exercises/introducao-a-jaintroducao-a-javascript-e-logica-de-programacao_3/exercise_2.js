let nAsterisco = 5;
let asteriscoLinha = "";

for (let indexLinha = 1; indexLinha <= nAsterisco; indexLinha += 1) {
    asteriscoLinha += '*';
    
    for (let indexColuna = 1; indexColuna <= nAsterisco; indexColuna += 1) {
        asteriscoLinha = asteriscoLinha;
    }
    
    console.log(asteriscoLinha);
}