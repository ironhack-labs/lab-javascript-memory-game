// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function () {
  this.cards = [
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
    { name: "thor", img: "thor.jpg" },
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};

//Card mixer

MemoryGame.prototype._shuffleCards = function () {
  this.cards = this.cards.sort(function () {
    return Math.random() - 0.5;
  });
};

//Save the cards in an array

MemoryGame.prototype.selectCards = function (card) {
  this.selectedCards.push(card);
};

//We compare the cards, if they are the same, we leave them face up if they are not we turn them upside down

MemoryGame.prototype.evalCards = function () {

  this.pairsClicked += 1;
  $("#pairs_clicked").text(this.pairsClicked);

  if ($(this.selectedCards[0]).attr("name") === $(this.selectedCards[1]).attr("name")) {
    console.log("Enhorabuena");
    this.correctPairs += 1;
    this.selectedCards = [];
    $("#pairs_guessed").text(this.correctPairs);
    this.finished();
  } else {
    var that = this;
    $(".back").addClass("blocked");
    setTimeout(function () {
      that.selectedCards[0].find(".front.back").removeClass("back");
      that.selectedCards[0].find(".back").show();
      that.selectedCards[1].find(".front.back").removeClass("back");
      that.selectedCards[1].find(".back").show();
      that.selectedCards = [];
      $(".back").removeClass("blocked");
    }, 1000);
  }
}

//After winning the game we erase the container and add text and a button to restart the game

MemoryGame.prototype.finished = function () {
  if (this.correctPairs === 12) {
    $("#memory_board").text("");
    var finishText = $("<h1 class='finish'>You've won!!</h1>");
    $("#memory_board").append(finishText);
    var div = $("<div style='text-align: center'><button id='playAgain' style='font-size: 40px' onClick='window.location.reload()'>Play again</button></div>");
    $("#memory_board").append(div);
  }
};
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
var myGame;
var reload;
$(document).ready(function () {
  myGame = new MemoryGame();
  var html = '';

  // myGame._shuffleCards();

  myGame.cards.forEach(function (pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });


  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  //The click event flips the cards and checks if there are two cards selected, if so it launches two functions

  $(".back").on("click", function () {
    $(this).hide();
    $(this).next().toggleClass("back");
    myGame.selectCards($(this).parent());
    if (myGame.selectedCards.length == 2) {
      myGame.evalCards();
      myGame.finished();
    }
  });

  // reload = function(){
  //   window.location.reload();
  // }

  // $("button#playAgain").on("click", function () {
  //   reload();
  // });
});