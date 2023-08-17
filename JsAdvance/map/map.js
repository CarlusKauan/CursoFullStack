let lista = ["CARLOS", "VITORIA", "NADJA", "MARIA"]

// Map, vai pecorrer todo um array !
lista.map((item, index) => {
    // arrow function 
    console.log(item)
})


let numeros = [5, 3, 2, 5]
// Reduce, busca reduzir um array e trazer detalhes importantes !
let total = numeros.reduce((acumulador, numero, indice,  original) => {
    console.log(`${acumulador}`)
    console.log(`${numero}`)
    console.log(`${indice}`)
    console.log(`${original}`)
    return acumulador += numero
})

console.log("Total da reduce:" + total)

let listagem = [5, 10, "Carlos"]
// arrow function ou função anonima usada mt para simplificar 
let busca = listagem.find((item) => {
    if(item === "Carlos") {
        return console.log("Item encontrado !")
    }
})


let palavras = ["Marcos", "Vestibular", "Emily", 19, "Faculdade"]
// Filter, filtrar itens de acordos com as suas preferências
let resultado = palavras.filter((item)=>{
    return item.length > 2
})

console.log(resultado)