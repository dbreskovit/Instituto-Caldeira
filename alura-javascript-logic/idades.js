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

rl.question('Quantidade de familiares? ', (totalFamiliares) => {
  totalFamiliares = parseInt(totalFamiliares);
  let numero = 1;
  let totalIdades = 0;

  const recebeIdade = () => {
    rl.question('Informe a idade do familiar: ', (idade) => {
      idade = parseInt(idade);
      totalIdades += idade;
      numero++;

      if (numero <= totalFamiliares) {
        recebeIdade();
      } else {
        const mediaDasIdades = totalIdades / totalFamiliares;
        mostra(`A média das idades dos familiares é ${mediaDasIdades}`);
        mostra('FIM');
        rl.close();
      }
    });
  };

  recebeIdade();
});
