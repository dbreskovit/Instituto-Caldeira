function pulaLinha() {
  console.log("\n");
}

function mostra(frase) {
  console.log(frase);
  pulaLinha();
}

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
  mostra(7 * multiplicador);
}

mostra("FIM");
