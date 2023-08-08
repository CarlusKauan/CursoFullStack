// Criando objeto pessoa !
let pessoa = {
    nome: "Carlos",
    sobrenome: "Kauan",
    idade:  19,
    sexo: "Masculino",
    cargo: "Programador",
    empresa: "IBM"
}

// Descontruindo objeto pegando somente algumas props
const {nome, sobrenome} = pessoa
console.log(nome)
console.log(sobrenome)


// Desconstruindo Array
let nomes = ["Carlos", "Kewen", "Kaique"]

let {0: Carlos, 1: Kewen} = nomes;
console.log(Carlos, Kewen)

let [primeironome, segundonome, terceironome] = nomes
console.log(primeironome, segundonome, terceironome)

