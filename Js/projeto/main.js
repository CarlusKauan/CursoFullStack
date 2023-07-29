// Declaração geral de variaveis
var altura;
var peso; 
var imc;
var resultado;
    
// função calcular
function calcular(event) {
    // Previne que os dados sumam depois das consultas 
    event.preventDefault();

    // busca os valores dos inputs de altura e peso como o proprio resultado do imc*
    altura = document.getElementById('altura').value
    peso = document.getElementById('peso').value
    nome = document.getElementById('nome').value
    resultado = document.getElementById('resultado')

    // calcular imc, que é peso / ( altura * 2 )
    imc = peso / Math.pow(altura, 2)

    // condicional da imc
    if(imc < 17) {
        resultado.innerHTML = '<h3> <br/> * tatus do ' + nome + ': Muito abaixo do seu peso <br /> * Resultado: ' + imc.toFixed(2) + '</h3>'
    } else if(imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<h3> <br/> * Status do ' + nome + ': Abaixo do peso <br /> * Resultado: ' + imc.toFixed(2) + '</h3>'
    } else if(imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML = '<h3> <br/> * Status do ' + nome + ': Peso normal / padrão <br/> * Resultado: ' + imc.toFixed(2) + '</h3>'
    } else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML = '<h3> <br/> * Status do ' + nome + ': Peso ideal / Excelente <br/> * Resultado: ' + imc.toFixed(2) + '</h3>'
    } else if(imc >= 30){
        resultado.innerHTML = '<h3> <br/> * Status do ' + nome + ': Cuidado obesidade <br/> * Resultado: ' + imc.toFixed(2) + '</h3>'
    }

    console.log(nome)
    console.log(altura)
    console.log(peso)
    console.log(imc)

    document.getElementById('').value = ''
    document.getElementById('').value = ''
}
