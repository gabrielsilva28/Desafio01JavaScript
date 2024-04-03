function contaVida(hp, ataque) {
  let dano = 20;
  let hpFinal = 0;
  for (let i = 0; i < hp; i++) {
    if (ataque > 0) {
      hpFinal = hp - dano * ataque;
    }
  }
  return hpFinal;
}

let vida = 100;
let ataques = 4;
let combate = contaVida(vida, ataques);
console.log(`Após ${ataques} ataques restaram ${combate} de hp`);
