function pulaLinha() {
  console.log("\n");
}

function mostra(frase) {
  console.log(frase);
  pulaLinha();
}

const ano = 2016;

mostra("Flávio tem " + (ano - 1977) + " anos");

mostra("Joaquim tem " + (ano - 1996) + " anos");

const novoAno = 2017;

mostra("Barney tem " + (novoAno - 1976) + " anos");
