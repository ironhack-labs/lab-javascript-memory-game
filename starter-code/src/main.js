var cardsBefore = [
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

var currentGame = new MemoryGame(cardsBefore);
function printScore() {
  $("#pairs_clicked").html(currentGame.pairsClicked);
  $("#pairs_guessed").html(currentGame.pairsGuessed);
}

$(document).ready(function(){
  var html = '';
  currentGame.shuffleCards();
  currentGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    var parentName = $(this).parent().attr("data-card-name");
    if (currentGame.pickedCards.length === 0) {
      currentGame.pickedCards.push(parentName);
      $(this).parent().toggleClass("first-card");
      $(this).toggleClass("back front");
      $(this).next().toggleClass("front back");
    } else {
      currentGame.pickedCards.push(parentName);
      $(this).parent().toggleClass("second-card");
      $(this).toggleClass("back front");
      $(this).next().toggleClass("front back");
      if (currentGame.checkIfPair()) {
        printScore();
        $(".first-card").toggleClass("first-card");
        $(".second-card").toggleClass("second-card");
        currentGame.isFinished();
      } else {
        printScore();
        $("#ooops").toggle();
        setTimeout(function(){
          $(".first-card").children().toggleClass("front back");
          $(".second-card").children().toggleClass("front back");
          $(".first-card").toggleClass("first-card");
          $(".second-card").toggleClass("second-card");
          $("#ooops").toggle();
        }, 900);
      }
    }
  });

  




});


