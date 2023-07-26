function pedir() {
   alert('ok')
   var numPedido = prompt("Digite um número de 1 - 4 ?")

   // Laço para simplicar estrutura condicionais !
   switch(Number(numPedido)) {
    case 1: 
        alert('Selecionado 1 - Suco*')
        break; 
    case 2: 
        alert('Selecionado 2 - Agua gelada*')
        break;
    case 3: 
        alert('Selecionado 3 - Sorvete*')
        break;
    case 4: 
        alert('Selecionado 4 - Garçom*')
        break;
    default: 
        alert('Opções 1 (Suco), 2 (Agua gelada), 3 (Sorvete), 4 (Garçom)')
        break;
   }

   // Typeof consulta o tipo da variavel 
   console.log(typeof Number(numPedido))
}