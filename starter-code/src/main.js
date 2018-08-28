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
    $(this).toggleClass("front back");
    $(this).next().toggleClass("back front");
    
    memoryGame.pickedCards.push($(this).attr("name"));
    if (memoryGame.pickedCards.length === 2) {
    
     if (memoryGame.pickedCards[0]=== memoryGame.pickedCards[1]) {
       //mostraria en la id pairs_guessed de la ventana de puntuacion del html, memoryGame.pairsGuessed
       //haria un slice(1,1)  para vaciar el array pickedCards, dejando asi hueco para el siguiente par dejaria la posicion de las cartas tal cual

      
    }else {//mostraria en la id pairs_cliked de la ventana de puntuacion del html, memoryGame.pairsClicked
    //haria un slice(1,1)  para vaciar el array pickedCards, dejando asi hueco para el siguiente par dejaria la posicion de las cartas tal cual
    //giraria las cartas de nuevo
  }
// if (memoryGame.isFinished()== true)
//haria un alert("ahora si eres un vengador!!")


    }
    
  });
    
    
    
    // TODO: write some code here
  });



