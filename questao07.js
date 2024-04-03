function calcularCompras(valor){
  let somador=0;
  for (let i = 0; i < valor.length; i++){
    somador += valor[i];
  }
  return somador;
}

let valores = [2.50, 3.75, 1.99];
let valorFinal = calcularCompras(valores);

console.log(`O valor total das compras é: R$${valorFinal} reais`);