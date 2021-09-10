let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobrinha = [];

let direction = "up";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,

    y: Math.floor(Math.random() * 15 + 1) * box
}
cobrinha[0] = {
    x: 16 * box,
    y: 16 * box
}

function criarBG(){
    context.fillStyle = "lightblue";
    context.fillRect(0,0, 32 * box, 32 * box);

}

function criarCobrinha(){
    for(i=0; i < cobrinha.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, 31.5, 31.5);
    }
}

function drawComida(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    
    if(cobrinha[0].x >= 16 * box && direction == "right") cobrinha[0].x = 0;
    if(cobrinha[0].x < 0 && direction == "left") cobrinha[0].x = 16 * box;
    if(cobrinha[0].y >= 16 * box && direction == "down") cobrinha[0].y = 0;
    if(cobrinha[0].y < 1 && direction =="up") cobrinha[0].y = 16 * box;
    
    criarBG();
    criarCobrinha();
    drawComida();

    let cobrinhaX = cobrinha[0].x;
    let cobrinhaY = cobrinha[0].y;

    if(direction == "right") cobrinhaX+=box; //acrescenta um box na direita
    if(direction == "left") cobrinhaX-= box; // diminui 1 box na esquerda (pra dar impressão de movimento)
    if(direction == "up") cobrinhaY -= box;
    if(direction == "down") cobrinhaY += box;

    if(cobrinhaX != food.x || cobrinhaY != food.y){
        cobrinha.pop(); //retira o último elemento do array

    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        console.log("Delicia de maça!");
        
    }

    let newHead = {
        x: cobrinhaX,
        y: cobrinhaY
    }

    cobrinha.unshift(newHead);

    for(i = 1; i < cobrinha.length; i++){
        if(cobrinha[0].x == cobrinha[i].x && cobrinha[0].y == cobrinha[i].y){
            // clearInterval(jogo);
            // alert('Game Over! Pressione OK.')
            // reloadPage();
            cobrinha.pop();
            cobrinha.pop();
            cobrinha.pop();
        }
    }
}

// let jogo = setInterval(iniciarJogo, 100);

function reloadPage(){
    location.reload();
    return false;
}

//tentar adicionar botão para iniciar jogo
function chamarJogo(){
    let jogo = setInterval(iniciarJogo, 130);
}
