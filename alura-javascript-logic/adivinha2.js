const readline = require('readline');

function sorteia() {
  return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {
  const segredos = [];
  let numero = 1;

  while (numero <= quantidade) {
    const numeroAleatorio = sorteia();

    if (numeroAleatorio !== 0 && !segredos.includes(numeroAleatorio)) {
      segredos.push(numeroAleatorio);
      numero++;
    }
  }

  return segredos;
}

const segredos = sorteiaNumeros(5);
console.log(segredos);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verifica() {
  rl.question('Digite seu palpite: ', (answer) => {
    const palpite = parseInt(answer);
    let achou = false;

    for (let posicao = 0; posicao < segredos.length; posicao++) {
      if (palpite === segredos[posicao]) {
        console.log('Você ACERTOU!');
        achou = true;
        break;
      }
    }

    if (!achou) {
      console.log('Você ERROU!');
    }

    if (segredos.length > 0) {
      verifica();
    } else {
      rl.close();
    }
  });
}

verifica();
