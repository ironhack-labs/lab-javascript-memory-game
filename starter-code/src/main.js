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
  

  memoryGame.shuffleCards(cards);
  //Baraja las cartas

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  //crea los divs (back y front) en base al número de imágenes que haya en el array cards.

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function

  setTimeout (function () {
    $(".front").switchClass("front","back",100);
    $(".back").switchClass("back","front",100);
    },3000);
    $(".front").switchClass("front","back",100);
    $(".back").switchClass("back","front",100);

  $('.back').click(function () {
    memoryGame.pickedCards.push($(this).attr("name"));
    
    console.log(memoryGame.pickedCards);
    
    $(this).addClass("front")
      .removeClass("back");
    $(this).siblings()
      .addClass("back")
      .removeClass("front");
    $(this).addClass("control");

    if (memoryGame.pickedCards.length === 2) {
      var check = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
      //Creamos una variable para chequear si las dos cartas son iguales. Es un booleano.
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);

      if (check == true) {
        $(".control").removeClass("control");

      } else {
        console.log ("Aquí llega tambien");
        setTimeout( function () {
          $(".control").addClass("back");
          $(".control").removeClass("front");
          $(".control").siblings().addClass("front");
          $(".control").siblings().removeClass("back")
          $(".control").removeClass("control");
        },200);
      };
      memoryGame.pickedCards = [];
      if ( memoryGame.isFinished()) {
        setTimeout(function() {
          alert ("you win!");
        }) 
      };
      //Vacía el array de cartas seleccionadas
      }
  });

});

