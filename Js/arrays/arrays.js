// Declarando um array
let lista = ["Carlos", "Emily", 2024]
console.log(lista)

let carros = ["Bmw", "Mercedes", "Ferrari"]

// Laço que percorre completamente a lista
for(let x = 0; x < carros.length ; x++) {
    console.log(carros[x])
}

// Quantidade de elementos na lista
lista.length

// Laço que exibe todos os elementos da array
for(var i = 0; i < lista.length ; i++) {
    console.log(lista[i])
}

// Buscar variaveis de uma lista
    lista.indexOf("Carlos")
    // Resultado seria 0 pelo fato da posição da lista
    lista.indexOf("Emily")  
    // Resultado seria 1 pelo fato da posição da lista

// Reatribuir valores da minha lista
    lista[2] = 2025
// Adicionar variavel na minha lista
    lista.push("Namoro")

    // Remove o primeiro item na minha lista
    lista.shift()
    // Remove o ultimo item na minha lista
    lista.pop()
    // Retornar todos os items em um formato especifico 
    lista.join("->")