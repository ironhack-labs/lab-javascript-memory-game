var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  var pairsClicked = $('#pairs_clicked');
  var pairsGuessed = $('#pairs_guessed');
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard(cards);
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });

  /*VARIABLES DEFINITION*/

  function turnCard(card){
    card.parent().children().toggleClass('back').toggleClass('front')
    memoryGame.pickedCards.push(card);
  }

  function resetCards(arr){
    for(var i=0; i < arr.length; i++){
      arr[i].parent().children().toggleClass('back').toggleClass('front');
    }
  }

  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  var turnCounter = 0;
  $(".back").on("click", function() {
    turnCard($(this));
    turnCounter++;
    if(turnCounter == 2){
      $('#memory_board').addClass("noclick");
      var firstCard = memoryGame.pickedCards[0];
      var secondCard = memoryGame.pickedCards[1];
      if(memoryGame.checkIfPair(firstCard.parent().attr('id'), secondCard.parent().attr('id'))){
          memoryGame.pickedCards = [];
          $('#memory_board').removeClass("noclick");
      }else{
        setTimeout(function(){
          resetCards(memoryGame.pickedCards);
          memoryGame.pickedCards = [];
          $('#memory_board').removeClass("noclick");
        }, 1000);
      }
      turnCounter = 0;
      pairsClicked.text(memoryGame.pairsClicked);
      pairsGuessed.text(memoryGame.pairsGuessed);
    }
    if(memoryGame.finished()){
      alert("Has ganado");
    }
  });
});
