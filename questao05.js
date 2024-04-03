function regex(texto) {
  let caracteres = texto.replace(/[^\w\s]/g, '');
  let numeros = caracteres.replace(/[\d]/g, '');
  let limpador = numeros;
  return limpador; 
} 

function contarPalavras(texto){
  let limpaEspeciais = regex(texto);
  let palavras = limpaEspeciais.split(' ');
  palavrasFiltrar = palavras.filter(function(palavra) {
    return palavra.length > 0;
  });
  return palavrasFiltrar.length;
}

let texto = 'What is Lorem Ipsum?'
let valor = contarPalavras(texto);
let valorFinal = valor == 1 ? 'palavra' : 'palavras';
console.log(`O texto tem ${valor} ${valorFinal}`);