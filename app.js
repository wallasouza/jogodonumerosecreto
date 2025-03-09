
let listaNumSecreto = [];
let base = parseInt(10);
let numeroSecreto = gerarNumeroAleatorio(base);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha entre 1 e ${base}`); 
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
           
        }else{
            exibirTextoNaTela('p','O numero secreto é maior');
        }
        limparCampo();
        tentativas++;
    }

    
}

function gerarNumeroAleatorio(base){

    let qtdElemntosLista = listaNumSecreto.length;

    if(qtdElemntosLista == base){
        listaNumSecreto = [];
        alert('Voce zerou o game');
    }
    let numeroEscolhido = parseInt(Math.random() * base + 1);
    if (listaNumSecreto.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(base);
    } else {
        listaNumSecreto.push(numeroEscolhido);
        return numeroEscolhido;
        
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(base);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}