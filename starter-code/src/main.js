var cards = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' },
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);

function toggleCard(card){
    var firstChildren = card.children[0];
    var shownClass = firstChildren.classList[0];
    var hiddenClass = firstChildren.nextSibling.classList[0];

    firstChildren.classList = hiddenClass;
    firstChildren.nextSibling.classList = shownClass;
    
    if(firstChildren.classList[0] === 'front'){
        memoryGame.pickCard(firstChildren);
    }
    if(firstChildren.classList[0] === 'back'){
        memoryGame.deleteCard(firstChildren);
    }

    if(memoryGame.pickedCards.length === 2){
        evaluateCards();
    }

}

function evaluateCards(){
    var firstCard = memoryGame.pickedCards[0];
    var secondCard = memoryGame.pickedCards[1];
    checkPair(firstCard, secondCard);
    updateScore();
    checkIfWon();
}

function checkPair(firstCard, secondCard){
    var firstCardName = firstCard.getAttribute('name');
    var secondCardName = secondCard.getAttribute('name');
    if(memoryGame.checkIfPair(firstCardName, secondCardName)){
        firstCard.parentElement.onclick = null;
        secondCard.parentElement.onclick = null;
        memoryGame.deleteCards();
    }else{
        toggleCard(firstCard.parentElement);
        setTimeout(() => toggleCard(secondCard.parentElement), 150);
    }
}

function updateScore(){
    document.querySelector('#score p:nth-of-type(1)').innerHTML = `Pairs Clicked: ${memoryGame.pairsClicked}`;
    document.querySelector('#score p:nth-of-type(2)').innerHTML = `Pairs Guessed: ${memoryGame.pairsGuessed}`;
}

function checkIfWon(){
    if(memoryGame.isFinished()){
        alert(`You have finished the game on attempt ${memoryGame.pairsClicked}!`);
        memoryGame = new MemoryGame(cards);
        loadGame(memoryGame);
        updateScore();
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    loadGame(memoryGame);
});

function loadGame(){

    var html = '';
    memoryGame.shuffleCards();
    memoryGame.cards.forEach(function(pic) {
        html += '<div class="card" data-card-name="' + pic.name + '">';
        html += '<div class="back" name="' + pic.img + '"></div>';
        html += '<div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
        html += '</div>';
    });
    
    // Add all the div's to the HTML
    document.querySelector('#memory_board').innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach(function(card) {
        card.onclick = function() {
            // TODO: write some code here
            toggleCard(card);
        }
    });
}