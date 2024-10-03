let listaNumeros =[];
let numeroLImite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

    function exibirTextoNaTela ( tag , texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'brazilian portuguese female',{rate: 1.2});
    }
function exibirMensagemInicial(){
    exibirTextoNaTela ( 'h1' , 'jogo secreto');
    exibirTextoNaTela('p' , 'escolha um numero de 1 a 10');
}

exibirMensagemInicial();

function verificarChute (){
let chute = document.querySelector('input').value;

if ( chute == numeroSecreto){
    exibirTextoNaTela ('h1' , ' parabens voce acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
   let mensagemTentativas = `voce descubriu numero secreto com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela ('p' , mensagemTentativas );
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if ( chute > numeroSecreto){ 
        exibirTextoNaTela ('p' , 'o numero secreto é menor');
    } else {
        exibirTextoNaTela ('p' , ' o numero secreto é maior');
    }
    tentativas++;
    limparCampo();
}
}
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random () * numeroLImite + 1);
    let quantidadeDeElementosNaLista = listaNumeros.length;

if ( quantidadeDeElementosNaLista == numeroLImite){
    listaNumeros = [];
}
    if (listaNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio ();
    }else{
        listaNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    Document.getElementById('reiniciar').seTATTRIbute('disabled' , true);
}









