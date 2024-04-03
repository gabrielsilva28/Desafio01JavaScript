function calcularIdade(nascimento){
  let dataNascimento = new Date(nascimento);
  let diaAtual = new Date();
  let idade = diaAtual.getFullYear() - dataNascimento.getFullYear(); 
  if ((diaAtual.getMonth() < dataNascimento.getMonth()) || (diaAtual.getMonth() == dataNascimento.getMonth()) && (diaAtual.getDate() < dataNascimento.getDate())){
    idade --;
  }
  return idade;
}

let dataNascimento = new Date('2000-02-29');
let idadeAtual = calcularIdade(dataNascimento);
console.log(`A idade é : ${idadeAtual} anos`);