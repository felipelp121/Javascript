const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

var techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'];

let cards = [];
startGame();
function startGame(){
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);
    initializeCards(cards);
    
}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard");
    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        
        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    
    })
}




function createCardContent(card, cardElement){
    
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
    
}


function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;
    
    while (currentIndex != 0){
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
    }
}




function createCardsFromTechs(techs){
    let cards = [];
    techs.forEach((tech) => {
        cards.push(createPairFromTech(tech));
    })
    return cards.flatMap(pair => pair);
    
}

function createPairFromTech(tech){
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    },{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}

function createIdWithTech(tech){
    return tech + parseInt(Math.random() * 1000);
}

let startTemp = 0

function flipCard(){
    this.classList.remove("reflip");
    this.classList.add("flip");
    let cartao = this;
    if(startTemp == 0){
        startTemp = 1;
        startCronometro();
    }
    equal(cartao);

}

function reflipCard(){
    setTimeout(() =>{
        animacao1.classList.remove("flip");
        animacao1.classList.add("reflip");
        
        animacao2.classList.remove("flip");
        animacao2.classList.add("reflip");
        setTimeout(() => {
            animacao1 = null;
            animacao2 = null;
        }, 50);
    }, 700);
}
let acertos = 0;
let erros = 0;
let card1 = "";
let card2 = "";
let contador = 0;
let animacao1 = null;
let animacao2 = null;




function equal(cartao){
    if (contador == 0){
        card1 = cartao.dataset.icon;
        animacao1 = cartao;
        contador++;
    }else{
        card2 = cartao.dataset.icon;
        animacao2 = cartao;
        contador--;
    }
    if (card1 != "" && card2 != ""){
        
        if (card1 == card2){
            acertos++
            let acerto = document.getElementById("acerto");
            acerto.innerHTML = "ACERTOS: "+ acertos;
            card1 = "";
            card2 = "";
            animacao1 = null;
            animacao2 = null; 
        }else{
            
            erros++;
            let erro = document.getElementById("erro");
            erro.innerHTML = "ERROS: " + erros;
            card1 = "";
            card2 = "";
            reflipCard();  
        }
    }


    if(acertos == 10){
        recomeco = document.getElementById("gameOver");
        recomeco.style.display = "flex";
        finishCronometro();
    }
    
}

function restart(){
    window.location.reload();
}
let tempo = 0;
var temporizador = null;
function startCronometro(){
    temporizador = setInterval(() => {
        tempo++
        document.getElementById("tempo").innerHTML = "TEMPO: " + tempo + "s";
        console.log("Estou no tempo " + tempo);
    }, 1000);

}

function finishCronometro(){
    startGame = 0;
    clearInterval(temporizador);
    resultado();
}

function resultado(){
    document.getElementById("resultado").innerHTML = "Resultado: " + tempo + " Segundos, " + acertos + " Acertos e " + erros + " Erros.";
}

