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

//$(document).ready(function(){

var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();
var html = "";
memoryGame.cards.forEach(function(pic) {
  html += '<div class="card" data-card-name="' + pic.name + '">';
  html +=
    '<div class="front" style="background-image: url(img/' +
    pic.img +
    ')"><div class="back back-show" name="' +
    pic.img +
    '">' +
    "</div></div>";
  html += "</div>";
});

// Set initial value of pairs clicked
$("#pairs_clicked").text(memoryGame.pairsClicked);

// Set initial value of pairs guessed correctly
$("#pairs_guessed").text(memoryGame.pairsGuessed);

// Add all the div's to the HTML
$("#memory_board").html(html);

// Bind the click event of each element to a function
$(".back").on("click", function(e) {
  let isSecond;
  
// VARIABLES SUPPOSED TO HELP WITH MAKING BOTH CARDS VISIBLE IF THEY ARE GUESSED BUT NOT IN USE BECAUSE IDK
  let firstPick;
  let secondPick;

//Trying to keep the previous this to check during the second this
  function usefullDelay(){
    firstPick = this;
  }

  usefullDelay.prototype.start=function(){
    window.setTimeout(this.show.bind(this),1000);
  }

  usefullDelay.prototype.show=function(){
    return firstPick
  }


//SHOW AND HIDE ANIMATION WHEN CARD IS CLICKED  
$(this).hide(500)
  
  if (memoryGame.isFinished()) {
    console.log("The game is finished");
    $(".back").removeClass("back-show");
  } else {
    if ($(this).hasClass("paired-up")) {
      console.log("this pair was paired up already");
      memoryGame.pickedCards = [];
    } else {
      if (memoryGame.pickedCards.length < 1) {
//the this stuff related above
        isSecond;
        console.log(isSecond)
        var ud = new usefullDelay();
        ud.start();
//----------------------------
        firstPick = $(this);
        console.log(firstPick)
        console.log("first pick above")
        memoryGame.pickedCards.push(this);
        console.log(memoryGame.pickedCards);
      } else if (memoryGame.pickedCards.length < 2) {
        if (memoryGame.pickedCards.indexOf(this) === -1) {
          isSecond = true;
          console.log(isSecond)
          secondPick = $(this);
          memoryGame.pickedCards.push(this);
          console.log(memoryGame.pickedCards);
        } else {
          console.log("You can't pick the same card two times, start again");
          memoryGame.pickedCards = [];
        }
      }
      if (
        memoryGame.checkIfPair(
          memoryGame.pickedCards[0].attributes.name.nodeValue,
          memoryGame.pickedCards[1].attributes.name.nodeValue
        )
      ) {
        console.log("It's a pair!");
        $(this).toggleClass("paired-up")
        $(firstPick).addClass("paired-up")
        console.log(firstPick)
        memoryGame.pickedCards = [];
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
      } else {
        console.log("not a pair");
        memoryGame.pickedCards = [];
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        $(this).show()

      }
    }
  }
  if(isSecond){
    $(".back").show()
  }
});
//});
