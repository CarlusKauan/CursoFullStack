// Spreads Operators
let primeiros = [1, 2, 3]
let lista = [...primeiros, 4, 5, 6, 7]

console.log(lista)

// Combinar objetos como feito nas arrays
let Pessoa = {
    nome: "Carlos",
    idade: 19,
    cargo: "Programador"
}
// Nova Pessoa com dados do objeto Pessoa
let novaPessoa = {
    ...Pessoa,
    status: "ATIVO",
    inicio: 10/10/2019,
    codigo: "A21DS23D"
}

console.log(novaPessoa)

// Usando spreadOperator '...' em funções !
function newUser(info) {
    let dados = {
        ...info,
        ...novaPessoa
    }
    console.log(dados)
}

newUser({nome: "Carlos", sobrenome: "Kauan", cargo: "Back-end"})