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

$("#win").hide();

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

  //Create game function
  MemoryGame.prototype.playGame = function() {
        memoryGame.pairsClicked++;
        $("#pairs_clicked").text(Math.floor(memoryGame.pairsClicked / 2));
        //turn around card when clicked
        $(this).parent().children().toggleClass("front back");
        //store card info into variable to later push it into array
        var newCard = $(this).parent().attr("data-card-name");
        //initialize pickedCards array for new pairs
        if(memoryGame.pickedCards.length == 2) {
            memoryGame.pickedCards = [];
        };
        //push picked cards into array
        memoryGame.pickedCards.push(newCard);
        //define function to turn cards around when it's not a match
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
        //compare cards to see if they match
        if(memoryGame.pickedCards.length == 2) {
            var checkIfPairValue = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
          //   I used setTimout because javascript was executing too fast and you couldn't see the front of the second card
          checkIfPairValue ? $("#pairs_guessed").text(memoryGame.pairsGuessed) : setTimeout(function() {turnAround()}, 500);
        };
        //Check if you finished the game
        //NOTE: I assign the return value (true or false) of the function to a variable
        //so in the next if statement I can use this value without calling the function
        //but I'm not sure if this is the right way to use the return value of the function
        var isFinishedValue = memoryGame.isFinished();
        if(isFinishedValue) {
            $("#win").show(1000);
            $("#win").css("cursor", "pointer");
            $("#win").click(function () {
                $(this).hide(1000);
            })
            //You shuffle the array
            memoryGame.shuffleCards();
            //You update de DOM according to the new array
            var html = '';
            memoryGame.cards.forEach(function (pic) {
                html += '<div class="card" data-card-name="'+ pic.name +'">';
                html += '  <div class="back" name="'+ pic.img +'"></div>';
                html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
                html += '</div>';
            });
            $("#memory_board").empty();
            $("#memory_board").html(html);
            memoryGame.resetGame();
            $("#pairs_guessed").text("0");
            $("#pairs_clicked").text("0");
            $('.back').click(memoryGame.playGame);
          };
  };  
  // Bind the click event of each element to the function
  $('.back').click(memoryGame.playGame);
});