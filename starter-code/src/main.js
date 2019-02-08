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

//First I declare the global variable so I can reach it from the other js file
var memoryGame = undefined;

$(document).ready(function(){
  memoryGame = new MemoryGame(cards);
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
      memoryGame.pairsClicked++;
      $("#pairs_clicked").text(Math.floor(memoryGame.pairsClicked / 2));
      $(this).parent().children().toggleClass("front back");
      var newCard = $(this).parent().attr("data-card-name");
      //initialize pickedCards array for new pairs
      if(memoryGame.pickedCards.length == 2) {
          memoryGame.pickedCards = [];
      };
      //push picked cards into array
      memoryGame.pickedCards.push(newCard);
      var turnAround = function() {
          var firstCard = $('[data-card-name="' + memoryGame.pickedCards[0] + '"]');
          var firstChildFirstCard = $(firstCard).children(".front[name]");
          var secondChildFirstCard = $(firstCard).children(".front[name]").next();
          var secondCard = $('[data-card-name="' + memoryGame.pickedCards[1] + '"]');
          var firstChildSecondCard = $(secondCard).children(".front[name]");
          var secondChildSecondCard = $(secondCard).children(".front[name]").next();
          firstChildFirstCard.toggleClass("front back");
          secondChildFirstCard.toggleClass("front back");
          firstChildSecondCard.toggleClass("front back");
          secondChildSecondCard.toggleClass("front back");
      };
      if(memoryGame.pickedCards.length == 2) {
          var checkIfPairValue = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
        //   //I used setTimout because javascript was executing too fast and you couldn't see the front of the second card
        //   if (!checkIfPairValue) setTimeout(function() {turnAround()}, 500);
        checkIfPairValue ? $("#pairs_guessed").text(memoryGame.pairsGuessed) : setTimeout(function() {turnAround()}, 500);
      };
      console.log("pairs Guessed" + memoryGame.pairsGuessed);
      memoryGame.isFinished();
  });
});

// $('[data-card-name="' + memoryGame.pickedCards[0] + '"]').children(".front[name]")

//si no encuentro ninguna otra solución, puedo añadir un id numérico a cada carta y store eso en el array
//de memory.pickedCards como un objeto en plan primer atributo el id y de segundo atributo
//el atributo que ya he metido

//$('[data-card-name="' + memoryGame.pickedCards[0] + '"]')


// $(this).is(".active") ? priceObject.addPrice(3) : priceObject.reducePrice(3);


// if(memoryGame.pickedCards.length == 2) {
//     checkIfPairValue ? console.log("true") : console.log("false");
// };



//   // Bind the click event of each element to a function
//   $('.back').click(function () {
//     $(this).parent().children().toggleClass("front back");
//     var newCard = $(this).parent().attr("data-card-name");
//     //initialize pickedCards array for new pairs
//     if(memoryGame.pickedCards.length == 2) {
//         memoryGame.pickedCards = [];
//     };
//     //push picked cards into array
//     memoryGame.pickedCards.push(newCard);
//     memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
//     var checkIfPairValue = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
//     //si el valor de la función que llamo es true,
//     //dejar las cartas así
//     //si es false, girar las cartas de nuevo
//     var turnAround = function() {
//         //ver cómo selecciono cada carta para girarla
//         var firstCard = $('[data-card-name="' + memoryGame.pickedCards[0] + '"]');
//         var secondCard = $('[data-card-name="' + memoryGame.pickedCards[1] + '"]');
//         if ($(firstCard).children().eq(0).hasClass("front")) {
//             console.log(firstCard);
//             console.log(secondCard);
//             $(firstCard).children().eq(0).removeClass("front").addClass("back");
//             $(firstCard).children().eq(1).removeClass("back").addClass("front");
//           };
//         if ($(secondCard).children().eq(0).hasClass("front")) {
//           console.log(firstCard);
//           console.log(secondCard);
//           // debugger
//             $(secondCard).children().eq(0).removeClass("front").addClass("back");
//             $(secondCard).children().eq(1).removeClass("back").addClass("front");
//           };
//     };
//     if(memoryGame.pickedCards.length == 2) {
//         checkIfPairValue ? alert("You found a pair!") : turnAround();
//     };
// });
// });