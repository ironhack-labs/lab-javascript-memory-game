var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  var currentCard, firstChoice, secondChoice, firstSelector, secondSelector
  var cardSelectors = []

  // Lo primero, barajamos
  memoryGame.shuffleCards()
  
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  $('#memory_board').html(html);
  // Bind the click event of each element to a function
  $('.back').click(function () {
    
    currentCard = $(this)
    cardSelectors.push(currentCard) // Almaceno las cartas como objetos en un array para tener sus selectores en el futuro
    currentCardName = $(this).parent().attr("data-card-name")
    memoryGame.pickedCards.push(currentCardName) // Almaceno las cartas como nombres para que sea fácil compararlas y ver si son la misma

    // Le doy la vuelta a la carta clicada
    $(this).toggleClass("back front") 
    $(this).next().toggleClass("back front")

    // Por legibilidad, meto en las variables creadas para ello las elecciones de cartas del usuario
    firstChoice = memoryGame.pickedCards[memoryGame.pickedCards.length - 1]
    firstSelector = cardSelectors[cardSelectors.length - 1]
    secondChoice = memoryGame.pickedCards[memoryGame.pickedCards.length - 2]
    secondSelector = cardSelectors[cardSelectors.length - 2]

    // Si ya ha elegido dos (el array es par) y si NO son iguales (ha fallado), vuelvo a girarlas pasado 1 segundo
    // Si fueran iguales, ya se quedarían levantadas
    if(memoryGame.pickedCards.length % 2 === 0 && !memoryGame.checkIfPair(firstChoice,secondChoice)){
      setTimeout (function (){

        $(firstSelector).toggleClass("back front")
        $(firstSelector).next().toggleClass("back front")
        $(secondSelector).next().toggleClass("back front")
        $(secondSelector).toggleClass("back front")

      }, 1000)
    }

    // Actualizo los contadores
    $("#pairs_clicked").text(memoryGame.pairsClicked)
    $("#pairs_guessed").text(memoryGame.pairsGuessed)

    //Cuando se acaba la partida, tiro una alerta de enhorabuena
    if (memoryGame.isFinished()){
      alert("¡Lo conseguiste! Has ganado la partida")
    }
  })
});


