let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobrinha = [];

let direction = "right";

cobrinha[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightblue";
    context.fillRect(0,0, 16 * box, 16 * box);

}

function criarCobrinha(){
    for(i=0; i < cobrinha.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let cobrinhaX = cobrinha[0].x;
    let cobrinhaY = cobrinha[0].y;

    if(direction == "right") cobrinhaX+=box; //acrescenta um box na direita
    if(direction == "left") cobrinhaX-= box; // diminui 1 box na esquerda (pra dar impressão de movimento)
    if(direction == "up") cobrinhaY -= box;
    if(direction == "down") cobrinhaY += box;

    cobrinha.pop(); //retira o último elemento do array

    let newHead = {
        x: cobrinhaX,
        y: cobrinhaY
    }

    cobrinha.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);

