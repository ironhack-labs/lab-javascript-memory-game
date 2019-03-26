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
    // Cambia las clases
    firstChildren.classList = hiddenClass;
    firstChildren.nextSibling.classList = shownClass;
    // Añade
    if(firstChildren.classList[0] === 'front'){
        memoryGame.pickCard(firstChildren);
    }
    if(firstChildren.classList[0] === 'back'){
        memoryGame.deleteCard(firstChildren);
    }
    // Si hay dos cartas seleccionadas hay que evaluarlas
    if(memoryGame.pickedCards.length === 2){
        var first = memoryGame.pickedCards[0];
        var firstName = first.getAttribute('name');
        var second = memoryGame.pickedCards[1];
        var secondName = second.getAttribute('name');
        if(memoryGame.checkIfPair(firstName, secondName)){
            first.parentElement.onclick = null;
            second.parentElement.onclick = null;
            memoryGame.deleteCards();
        }else{
            toggleCard(first.parentElement);
            setTimeout(() => toggleCard(second.parentElement), 150);
        }
        // Actualizamos la puntuación
        document.querySelector('#score p:nth-of-type(1)').innerHTML = `Pairs Clicked: ${memoryGame.pairsClicked}`;
        document.querySelector('#score p:nth-of-type(2)').innerHTML = `Pairs Guessed: ${memoryGame.pairsGuessed}`;
    }

    // Comprobar si hemos ganado. En caso afirmativo, reiniciar el juego

}

document.addEventListener("DOMContentLoaded", function(event) {
    var html = '';
    //memoryGame.shuffleCards();
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
            toggleCard(card);
            // TODO: write some code here
            
        }
    });
});