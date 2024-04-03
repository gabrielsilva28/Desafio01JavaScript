function contaVida(hp, ataque) {
  let dano = 20;
  let hpFinal = 0;
  for (let i = 0; i < hp; i++) {
    if (ataque <= 5) {
        hpFinal = hp - dano * ataque;
    }
    else{
      hpFinal = 0;
    }
  }
  return hpFinal;
}

let vida = 100;
let ataques = 3;
let combate = contaVida(vida, ataques);
console.log(`Após ${ataques} ataques restaram ${combate} de hp`);

