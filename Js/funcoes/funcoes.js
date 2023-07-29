var area = document.getElementById('area')

function entrar() {
    var nome = prompt("Digite o seu nome ?");

    // Condições
    if(nome == null || nome === "") {
        area.innerHTML = "Clique no botão para acessar..."
    } else {
        area.innerHTML = "Bem Vindo " + nome;

        // Criando button - botaõSair
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta"
        botaoSair.onclick = sair;
        
        area.appendChild(botaoSair)
    }

    function sair() {
        alert("Ate mais!")
        area.innerHTML = "Você saiu !"
    }
}

function mediaEscolar(nt1, nt2) {
    let media = (nt1+nt2)/2

    if(media >= 7) {
        console.log('Aluno aprovado com a media:  ' + media)
    } else if(media <= 7) {
        console.log('Aluno na recuperação com media: ' + media)
    } else {
        console.log('Aluno reprovado com media: ' + media)
    }
}

function aluno(nome, curso) {
    let mensagem = "Seja Bem Vindo " + nome + " ao Curso de " + curso
    console.log(mensagem)
}