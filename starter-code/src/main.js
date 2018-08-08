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

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  
  $("memory_board").html(html);
  document.getElementById('memory_board').innerHTML = html;

$('.back').on('click', function () {

    if (memoryGame.pickedCards.length >= 2)
      return;

   console.log("click");
   $(this).parent().children().toggleClass("front back");
   memoryGame.pickedCards.push($(this).parent());
  console.log(memoryGame.pickedCards)
  
   if (memoryGame.pickedCards.length === 2) {
    var card1 = memoryGame.pickedCards[0];
    var card2 = memoryGame.pickedCards[1];
      if (memoryGame.checkIfPair(card1.attr("id"), card2.attr("id"))) {
        console.log("match");
        $(card1).children().addClass("blocked")
        $(card2).children().addClass("blocked")
        }
       else {setTimeout (function() {
        console.log("no Match")
        $(card1).children().toggleClass("front back")
        $(card2).children().toggleClass("front back")
        memoryGame.pickedCards = [];
      }, 2000);
      
    }
      
   }
  $("#pairs_clicked").text((memoryGame.pairsClicked));
  $("#pairs_guessed").text((memoryGame.pairsGuessed));
  console.log(memoryGame.pairsGuessed)
  if (memoryGame.finished() === true) {
    setTimeout (function () {alert("Great, Job! Click Ok to start again!")}, 1000);
    setTimeout (function() {location.reload()}, 2000);
    console.log("finished");
  }
});



});