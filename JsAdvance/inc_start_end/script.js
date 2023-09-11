// includes, startsWith, endsWith.
let nomes = [`Marcos`, `Carlos`, `Danillo`];
console.log(nomes.includes(`Marcos`));

if (nomes.includes(`Marcos`)) {
  console.log(`Você está na Lista de usúarios !`);
} else {
  console.log(`Você não está na Lista de usúarios`);
}

let nome = `Matheus`;
console.log(nome.startsWith(`Mat`));

let sobrenome = `Costa`;
console.log(sobrenome.endsWith(`sta`));

// Lógica de Premiação com o final da placa de Carro !
const carro = `A232-2`;
if (carro.endsWith(`2`)) {
  console.log(carro.endsWith(`2`));
  console.log(`Carro Premiado da Semana de Ouro !!`);
} else {
  console.log(`Tente na Proxima`);
}
