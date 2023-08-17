// Rest Operators
function convidados(...nomes) {
    console.log(nomes)
}

convidados("Carlos", "Roberto", "Nadja", "Emily")

function sorteador(...numeros){
    console.log(numeros)
    const gerarNumero = Math.floor(Math.random() * numeros.length)
    // index
    console.log(numeros[gerarNumero])
}

sorteador(12, 32, 34, 55, 65)