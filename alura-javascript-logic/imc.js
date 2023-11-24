const readline = require("readline");

function pulaLinha() {
  console.log("\n");
}

function mostra(frase) {
  console.log(frase);
  pulaLinha();
}

function calculaImc(altura, peso) {
  return peso / (altura * altura);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o seu nome: ", (nome) => {
  rl.question(`${nome}, informe sua altura: `, (alturaInformada) => {
    rl.question(`${nome}, informe seu peso: `, (pesoInformado) => {
      alturaInformada = parseFloat(alturaInformada);
      pesoInformado = parseFloat(pesoInformado);

      const imc = calculaImc(alturaInformada, pesoInformado);

      mostra(`${nome}, o seu IMC é ${imc}`);

      if (imc < 18.5) {
        mostra("Você está abaixo do recomendado");
      } else if (imc > 35) {
        mostra("Você está acima do recomendado");
      } else {
        mostra("Seu IMC está excelente!");
      }

      mostra("FIM");
      rl.close();
    });
  });
});
