const readline = require('readline');

function pulaLinha() {
  console.log("\n\n");
}

function mostra(frase) {
  console.log(frase);
  pulaLinha();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entre com a data limite: ', (answer) => {
  const limite = parseInt(answer);
  let anoCopa = 1930;

  while (anoCopa <= limite) {
    mostra(`Teve copa em ${anoCopa}`);
    anoCopa += 4;
  }

  mostra('FIM');
  rl.close();
});
