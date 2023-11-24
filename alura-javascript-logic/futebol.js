const readline = require('readline');

function pulaLinha() {
  console.log("\n");
}

function mostra(frase) {
  console.log(frase);
  pulaLinha();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entre com o número de vitórias: ', (vitorias) => {
  rl.question('Entre com o número de empates: ', (empates) => {
    vitorias = parseInt(vitorias);
    empates = parseInt(empates);

    const pontos = vitorias * 3 + empates;

    mostra(`Os pontos do seu time são ${pontos}`);

    if (pontos > 28) {
      mostra('Seu time está melhor do que o ano passado.');
    } else if (pontos < 28) {
      mostra('Seu time está pior do que o ano passado.');
    } else {
      mostra('Seu time está igual ao ano passado.');
    }

    mostra('FIM');
    rl.close();
  });
});
