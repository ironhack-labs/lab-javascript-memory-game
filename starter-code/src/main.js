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
  memoryGame.shuffleCards();

  console.log(memoryGame.cards);

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
  var cardsArray = [];
  // Bind the click event of each element to a function
  $(".back").click(function () {
     var button = $(event.target);
     showCards(button, cardsArray);
      
      if(cardsArray.length == 2){
        $(".back").addClass("blocked");
        
        var checkPair = memoryGame.checkIfPair(cardsArray[0], cardsArray[1]);
        $('#pairs_clicked').html(memoryGame.pairsClicked);
        if (checkPair == false){
          setTimeout(function(){
            hideCards(cardsArray);
            cardsArray = [];
            }, 500);
        } else {
          $('#pairs_guessed').html(memoryGame.pairsGuessed);
          cardsArray = [];
          $(".back").removeClass("blocked");
        }
      }
      
      memoryGame.isFinished();

  });

});

var memoryGame = new MemoryGame(cards);

function showCards(button, cardsArray){
  button.toggleClass("back");
  button.next().addClass("back");
  cardsArray.push(button.attr('name'));
}

function hideCards(array){
  var firstCard = document.getElementsByName(array[0]);
  var secondCard = document.getElementsByName(array[1]);
  $(firstCard).addClass("back")
  $(firstCard).next().removeClass("back")
  $(secondCard).addClass("back")
  $(secondCard).next().removeClass("back")
  $(".back").removeClass("blocked")
}