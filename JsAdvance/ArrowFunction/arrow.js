// Funções Anonimas

function somar(a, b) {
    let total = a + b
    return console.log(total)
}

somar(10, 30)

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2
    console.log(total)
}

subtrair(10, 30)

let numeros = [1, 3, 7]

numeros.map((item) => {
    console.log(item)   
})