function pulaLinha() {
  console.log("\n");
}

function mostra(frase) {
  console.log(frase);
  pulaLinha();
}

for (let linha = 1; linha <= 3; linha++) {
  let asteriscos = "";

  for (let coluna = 1; coluna <= 10; coluna++) {
    asteriscos += "*";
  }

  mostra(asteriscos);
}
