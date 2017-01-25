//******************************************************************
// Game Logic

var game = {

cards : [
  {name: "aquaman", id: "aquaman1"},
  {name: "batman", id: "batman1"},
  {name: "captainAmerica", id: "captainAmerica1"},
  {name: "fantasticFour", id: "fantasticFour1"},
  {name: "flash", id: "flash1"},
  {name: "greenArrow", id: "greenArrow1"},
  {name: "greenLantern", id: "greenLantern1"},
  {name: "ironman", id: "ironman1"},
  {name: "spiderman", id: "spiderman1"},
  {name: "superman", id: "superman1"},
  {name: "theAvengers", id: "theAvengers1"},
  {name: "thor", id: "thor1"},
  {name: "aquaman", id: "aquaman2"},
  {name: "batman", id: "batman2"},
  {name: "captainAmerica", id: "captainAmerica2"},
  {name: "fantasticFour", id: "fantasticFour2"},
  {name: "flash", id: "flash2"},
  {name: "greenArrow", id: "greenArrow2"},
  {name: "greenLantern", id: "greenLantern2"},
  {name: "ironman", id: "ironman2"},
  {name: "spiderman", id: "spiderman2"},
  {name: "superman", id: "superman2"},
  {name: "theAvengers", id: "theAvengers2"},
  {name: "thor", id: "thor2"}
  ]
};

// cards = [
//   "aquaman",
//   "batman",
//   "captainAmerica",
//   "fantasticFour",
//   "flash",
//   "greenArrow",
//   "greenLantern",
//   "ironman",
//   "spiderman",
//   "superman",
//   "theAvengers",
//   "thor",
//   "aquaman",
//   "batman",
//   "captainAmerica",
//   "fantasticFour",
//   "flash",
//   "greenArrow",
//   "greenLantern",
//   "ironman",
//   "spiderman",
//   "superman",
//   "theAvengers",
//   "thor"
// ];



var length = game.cards.length;

for (var i = 0; i < length; i++) {
  var randomNumber = Math.floor((Math.random() * game.cards.length));

  $('#game-container').append(
  "<div id=" + game.cards[randomNumber].name + " class='hidden-img col-md-2 div-custom'>" + game.cards[randomNumber].name +" </div>");

  game.cards.splice(randomNumber,1);
}

var count = 0;
var guess1;
var guess2;
var score = 0;

$( ".hidden-img" ).on('click', function() {

    count++;

    if (count === 1) {
      var attrName = $(this).attr("id");
      $(this).append("<img class='img-responsive img-custom' src='img/" + attrName +".jpg' alt=''>");
      guess1 = attrName;

    }
    if (count === 2) {
      var attrName2 = $(this).attr("id");
      $(this).append("<img class='img-responsive img-custom' src='img/" + attrName2 +".jpg' alt=''>");
      guess2 = attrName2;

    }

    if (guess1 === guess2 && count === 2) {
      count = 0;
      console.log("YES, You guessed it right!!");
      score ++;
      $("#total-score").append(score);

    }

    if (guess1 != guess2 && count === 2) {
      count = 0;
      console.log("Im inside of the weird if" + guess1 + guess2);
      guess1 = $('#' + guess1);
      console.log(guess1);
      $(guess1).empty();
      guess2 = $('#' + guess2);
      $(guess2).empty();

    }

});


//click somewhere -> store that value as click1
//click somewehere else -> store that value as click2
//check if click1 === click2
//if so, keep those images up and add points
//if not, turn those images down again







//******************************************************************

//******************************************************************
// HTML/CSS Interactions
//******************************************************************

//
// $(document).ready(function(){
// });
