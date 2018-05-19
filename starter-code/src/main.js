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
  //memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back" ';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  $('.back').on('click', function () {
    $(this).next("div").addClass("back");
    $(this).toggle();
    memoryGame.pickedCards[$(".front.back").length-1] = $(this).parent().attr("id");
    ($(".front.back").length == 2) &&
      ((!(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]))) ?
        $(".front.back").fadeOut(500,()=>{
          $(".front.back").toggleClass("back");
          $(".back:hidden, .front:hidden").toggle();
        }):
        $(".front.back").hide(500,()=>{
          $(".front.back").parent().remove();
          $("#pairs_guessed").prop("innerText",memoryGame.pairsGuessed);
          (memoryGame.finished()) && onGameFinished(memoryGame.pairsClicked);
        }));
    $("#pairs_clicked").prop("innerText",memoryGame.pairsClicked);
  });
});

function onGameFinished(tries){
  $("#pairs_clicked").prop("innerText",tries);
  var html = '';
  html += '<div><h1>Game Finished! Congratulations!!!</h1><div>';
  html += '<div><h1>You did it with ' + tries + ' tries</h1><div>';
  html += '<a href="javascript:window.location.reload(true)"><h2>Play Again!!!</h2></a>';
  document.getElementById('memory_board').innerHTML = html;
}