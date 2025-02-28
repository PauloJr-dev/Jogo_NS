//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = []
let totalDeNumeros = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function apresentarTextoNaTela (tag, texto){
    let titulo = document.querySelector(tag);
titulo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function mesagemInicial(){
apresentarTextoNaTela('h1','Jogo do número secreto' );
apresentarTextoNaTela('p','Escolha um número entre 1 e 100');
}
mesagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if ( numeroSecreto==chute){
        let palavraTentativa = tentativas>1? 'tentativas':'tentativa';
        let mensagemTentativas = `Excelente, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        apresentarTextoNaTela('h1','Você acertou o número secreto!');
        apresentarTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if(chute<numeroSecreto){
            apresentarTextoNaTela('p','O número secreto é maior');
        } else{
            apresentarTextoNaTela('p','O número secreto é menor ');
        }
        tentativas++;
        limparCampo();
    }

}


function gerarNumeroAleatorio() {
    numeroSorteado = parseInt(Math.random ()*totalDeNumeros+1);
    numeroDeelementosDaLista = listaDeNumerosSorteados.length;
    if (numeroDeelementosDaLista == totalDeNumeros){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroSorteado)){
        
        return gerarNumeroAleatorio();
        
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
 numeroSecreto = gerarNumeroAleatorio();
 tentativas = 1;
mesagemInicial();
limparCampo();
document.getElementById('reiniciar').setAttribute('disabled',true);

}