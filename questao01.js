let notas = [8.0, 9.0, 7.0];
let soma = 0.0;
let media = 0.0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
  media = soma / notas.length;
}

console.log(`Aline obteve média ${media.toFixed(2)}`);

