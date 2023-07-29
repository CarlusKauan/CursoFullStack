// Manipulando datas
var data = new Date()
// Consulta data, minutos, segundos e milisegundos
data.getDate()
data.getMinutes()
data.getSeconds()
data.getMilliseconds()

// Criando uma nova data passando dados
var datanova = new Date("January 20, 2023")
console.log(datanova)

// Converter a data em milisegundos
Date.parse(datanova)


