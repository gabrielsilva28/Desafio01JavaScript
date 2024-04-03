//let readlineSync = require('readline-sync');
//let numero = readlineSync.question('Digite um numero: ');
let numero = 12;
let fatorial = numero;

for (let i = fatorial - 1; i > 1; i--){
  if (fatorial == 0){
    fatorial = 1;
  }
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);