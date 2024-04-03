let numeros = [15, 8, 90, 75, 102, 6, 2];
/*
//digitar os numeros desejados

//baixar npm install readline-sync
let readlineSync = require('readline-sync');
let numeros = readlineSync.question('Digite os números separados por vírgula: ').split(',');
*/
let numerosOrdenados = numeros.sort(function(a,b){return a - b});

menorElemento = numerosOrdenados[0];
maiorElemeto = numerosOrdenados[numerosOrdenados.length - 1];

console.log(`O Menor número é o ${menorElemento} e o Maior número é o ${maiorElemeto}`);