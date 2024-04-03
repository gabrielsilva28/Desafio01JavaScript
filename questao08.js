function calcularMulta(quantidadeDia) {
  let multa = 0.5;
  let totalMulta = 0;
  for (let i = 0; i < quantidadeDia; i++) {
    totalMulta = multa * quantidadeDia;
  }
  return totalMulta;
}

let dias = 7;
let valorFinal = calcularMulta(dias);
console.log(`O valor da multa em ${dias} dias, fica R$${valorFinal.toFixed(2)} reais`);
