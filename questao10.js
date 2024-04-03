function contaMaiuscula(texto){
  let contador = 0;
  for (let i = 0; i < texto.length; i++){
    if (texto[i] == texto[i].toUpperCase().trim()){
      contador++;
    }
  }
  return contador;
}

let texto = 'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY'
let totalMaisculas = contaMaiuscula(texto);

console.log(`O texto possui ${totalMaisculas} letras maiúsculas`);