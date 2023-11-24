const readline = require("readline");

function pulaLinha() {
  console.log("\n\n");
}

function mostra(frase) {
  console.log(frase);
  pulaLinha();
}

function gerarNumeroAleatorio() {
  return Math.round(Math.random() * 10);
}

async function realizarChutes() {
  const numeroPensado = gerarNumeroAleatorio();
  let tentativas = 1;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (tentativas <= 3) {
    const chute = await new Promise((resolve) => {
      rl.question("Digite seu chute! ", (answer) => {
        resolve(parseInt(answer));
      });
    });

    if (chute === numeroPensado) {
      mostra("Você ACERTOU, o número pensado era " + numeroPensado);
      break;
    } else {
      mostra("Você ERROU!");
    }

    tentativas++;
  }

  rl.close();
  mostra("FIM");
}

realizarChutes();
