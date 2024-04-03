function ehPrimo(numero) {
  if (numero < 2 || (numero % 2 == 0 && numero > 2)) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(numero)+1; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

let numeros = [23, 16, 11, 8, 19, 14, 5, 21];
console.log(`Os números primos da lista são: `);
for (let i = 0; i < numeros.length; i++){
  if (ehPrimo(numeros[i])){
    console.log(numeros[i]);
  }
}