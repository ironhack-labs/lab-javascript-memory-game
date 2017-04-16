
function putCardsOnBoard(card, i) {
  $("#memory_board div:nth-child("+(i+2)+")").attr({
    "name": card.name,
    "class": "pic",
    "imagen": card.img,
    "id": "card"+i
  });
}

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var card1, card2;
  var id1, id2;
  var board = $("#memory_board");
  board.append("<h1>Superhero Memory Game</h1>");

  var grid = memoryGame.Cards;
  for(var i=0; i<grid.length; i++) {
    var card = grid[i];
    board.append("<div>");
    putCardsOnBoard(card, i);
  }


  //player clicks, game starts evaluation
  $(".pic").on("click", function (e){
    if (!card1 && !card2) {
      id1= $(e.currentTarget).prop("id");
      card1 = memoryGame.selectCard(e);
    } else if (!card2){
      id2= $(e.currentTarget).prop("id");
      card2 = memoryGame.selectCard(e);
      var timeoutId = setTimeout(function () {
        var check = memoryGame.compareCards(card1,card2);
        if(!check){
          $("#"+id1).css("background-image", "");
          $("#"+id2).css("background-image", "");
        }
        if(memoryGame.pairs_guessed === (memoryGame.Cards.length/2)){
          memoryGame.finished();
        }
        card1 = false;
        card2 = false;
        clearTimeout(timeoutId);
      }, 1000);
    }
  });

});
