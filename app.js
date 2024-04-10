//numero aleatorio
let numeroAleatorio = gerarNumero();
console.log(numeroAleatorio);

//pontuacoes dos players inicial
let pontuacaoPlayer1 = 0;
let pontuacaoPlayer2 = 4;

//tentativas dos player
let tentativaP1 = 4;
let tentativaP2 = 5;
let tentativaGlobal = tentativaP1+tentativaP2;


//EXIBIR NUMERO DE TENTATIVAS INCIAL
exibirTexto('.tentativasNum-p1', tentativaP1);
exibirTexto('.tentativasNum-p2', tentativaP2);


//função de exibir texto na tela
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//pontuacao inicial = 0
exibirTexto('.pontuacaoNum-p1', pontuacaoPlayer1);
exibirTexto('.pontuacaoNum-p2', pontuacaoPlayer2);

//verificar chute do player 1 
function verificarChuteP1() {
    let chuteP1 = document.querySelector('.input-p1').value;

    if(chuteP1 == numeroAleatorio) {
        exibirTexto('.resultado', 'O Player 1 acertou o número secreto');
        exibirTexto('.pontuacaoNum-p1', ++pontuacaoPlayer1);
        console.log('Player 1 acertou');
        document.getElementById('confirme-p1').setAttribute('disabled', 'disabled');
        document.getElementById('confirme-p2').setAttribute('disabled', 'disabled');
        document.getElementById('restartGame').removeAttribute('disabled');
        playerVenceu();   
    }else {
        if(chuteP1 < numeroAleatorio) {
            exibirTexto('.resultado', `O numero secreto é maior que ${chuteP1}`);
        }
        if(chuteP1 > numeroAleatorio) {
            exibirTexto('.resultado', `O numero secreto é menor que ${chuteP1}`);
        }
        limparCampoP1();
        exibirTexto('.tentativasNum-p1', --tentativaP1);
        if (tentativaP1 == 0){
            exibirTexto('.resultado', 'O player 1 não tem mais tentativas');
            document.getElementById('confirme-p1').setAttribute('disabled', 'disabled');
        }
        zeroTentativas()
        
    }
    if(chuteP1 != numeroAleatorio && tentativaP2 > 0){
        document.getElementById('confirme-p1').setAttribute('disabled', 'disabled');
        document.getElementById('confirme-p2').removeAttribute('disabled');
    }else {
        document.getElementById('confirme-p1').setAttribute('disabled', 'disabled');
        document.getElementById('confirme-p2').setAttribute('disabled', 'disabled');
    }
}

//funcao verificar chute do player 2 
function verificarChuteP2() {
    let chuteP2 = document.querySelector('.input-p2').value;

    if(chuteP2 == numeroAleatorio) {
        exibirTexto('.resultado', 'O Player 2 acertou o número secreto');
        exibirTexto('.pontuacaoNum-p2', ++pontuacaoPlayer2);
        console.log('Player 2 acertou');
        document.getElementById('confirme-p1').setAttribute('disabled', 'dis;abled')
        document.getElementById('confirme-p2').setAttribute('disabled', 'di;sabled')
        document.getElementById('restartGame').removeAttribute('disabled');
        playerVenceu()
    }else {
        if(chuteP2 < numeroAleatorio) {
            exibirTexto('.resultado', `O numero secreto é maior que ${chuteP2}`);
        }
        if(chuteP2 > numeroAleatorio) {
            exibirTexto('.resultado', `O numero secreto é menor que ${chuteP2}`);
        }
        limparCampoP2();
        exibirTexto('.tentativasNum-p2', --tentativaP2);
        if (tentativaP2 == 0){
            exibirTexto('.resultado', 'O player 2 não tem mais tentativas');
            document.getElementById('confirme-p2').setAttribute('disabled', 'disabled');
        }
        zeroTentativas();
        
    }
    if(chuteP2 != numeroAleatorio && tentativaP1 > 0){
        document.getElementById('confirme-p2').setAttribute('disabled', 'disabled');
        document.getElementById('confirme-p1').removeAttribute('disabled');
    }else {
        document.getElementById('confirme-p2').setAttribute('disabled', 'disabled');
        document.getElementById('confirme-p1').setAttribute('disabled', 'disabled');
    }
}



//funcao quando acabar as tentativas
function zeroTentativas(){
    if(tentativaP1 == 0 && tentativaP2 == 0){
        document.getElementById('restartGame').removeAttribute('disabled');
        exibirTexto('.resultado', 'Acabaram as tentativas, clique em "REINCIAR"');
    }
}


//funcao de gerar numero aleatório
function gerarNumero() {
    return parseInt(Math.random() * 100 + 1);
}



//funcao limpar campo
function limparCampoP1() {
    chuteP1 = document.querySelector('.input-p1');
    chuteP1.value = '';
}
function limparCampoP2() {
    chuteP2 = document.querySelector('.input-p2');
    chuteP2.value = '';
}

//funcao restart game
function restartGame(){
    numeroAleatorio = gerarNumero();
    console.log(numeroAleatorio);
    exibirTexto('.tentativasNum-p1', 4);
    exibirTexto('.tentativasNum-p2', 4);
    tentativaP1 = 4;
    tentativaP2 = 4;
    exibirTexto('.resultado', '...');
    document.getElementById('restartGame').setAttribute('disabled', 'disabled');
    document.getElementById('confirme-p1').removeAttribute('disabled');
    document.getElementById('confirme-p2').removeAttribute('disabled');
    limparCampoP1();
    limparCampoP2();
    exibirTexto('.introducao-texto', 'ADIVINHE O NUMERO DE 1 A 100')
    if(pontuacaoPlayer1 ==5){
        pontuacaoPlayer1 = 0;
        exibirTexto('.pontuacaoNum-p1', 0)
    }
    if(pontuacaoPlayer2 ==5){
        pontuacaoPlayer2 = 0;
        exibirTexto('.pontuacaoNum-p2', 0)
    }
}

//FUNCAO VENCEDOR
function playerVenceu(){
    if(pontuacaoPlayer1 == 5){
        exibirTexto('.introducao-texto', 'PLAYER 1 GANHOU!');
        document.getElementById('confirme-p1').setAttribute('disabled', 'disabled');
        document.getElementById('confirme-p2').setAttribute('disabled', 'disabled');
        document.getElementById('restartGame').removeAttribute('disabled');
        
    }
    if(pontuacaoPlayer2 == 5){
        exibirTexto('.introducao-texto', 'PLAYER 2 GANHOU!');
        document.getElementById('confirme-p1').setAttribute('disabled', 'disabled');
        document.getElementById('confirme-p2').setAttribute('disabled', 'disabled');
        document.getElementById('restartGame').removeAttribute('disabled');        
    }
}
