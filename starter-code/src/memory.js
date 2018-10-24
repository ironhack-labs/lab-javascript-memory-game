var MemoryGame = function(cards) {
  this.cards = cards;
  this.shuffled = false;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.totalPairs = this.cards.length / 2;
};

MemoryGame.prototype.shuffleCards = function() {
  console.log("shuffling cards");
  this.shuffled = true;
  //ARRAY TO STORE CARDS IN RANDOMLY SELECTED CARDS
  let shuffledCards = [];
  let randomNum;
  randomNum = Math.floor(Math.random() * cards.length);

  //USE NUM AS THE INDEX TO SELECT RANDOM CARD IN THE ARRAY
  let randomIndexArray = function(num) {
    //CHECK IF RANDOM CARD IS IN THE SUFFLEDCARDS ARRAY
    if (shuffledCards.indexOf(cards[num]) !== -1) {
    } else {
      //IF NOT IN THE ARRAY PUSH IT
      shuffledCards.push(cards[num]);
      return shuffledCards;
    }
  };

  while (shuffledCards.length < cards.length) {
    //CREATE A RANDOM NUMBER BETWEEN 0 AND THE MAX INDEX OF THE ARRAY
    randomNum = Math.floor(Math.random() * cards.length);
    //SEND THIS NUMBER AS AN ARGUMENT TO RANDOMINDEXARRAY
    randomIndexArray(randomNum);
  }
  //ASSIGN SHUFFLEDCARDS ARRAY TO ORIGINAL CARDS ARRAY
  this.cards = shuffledCards;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  console.log("checking");
  if (firstCard !== secondCard) {
    return false;
  } else if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed < this.totalPairs) {
    return false;
  } else {
    return true;
  }
}; /* 

let randomNum;
let arrayInOrder = [1, 2, 3, 4, 5, 6];
let ranArray = [];
randomNum = Math.floor(Math.random() * arrayInOrder.length);

let randomIndex = function(n) {
  randomNum = Math.floor(Math.random() * arrayInOrder.length);
  randomIndexArray(randomNum);
};

//num is numbers in order like foreach
let randomIndexArray = function(num) {
  if (ranArray.indexOf(num) !== -1) {

  } else {
    ranArray.push(num);
    return ranArray;
  }
};

while (ranArray.length < arrayInOrder.length) {
  randomNum = Math.floor(Math.random() * arrayInOrder.length) + 1;
  randomIndexArray(randomNum);
}
 */

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
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
});

// Set initial value of pairs clicked
$("#pairs_clicked").text(memoryGame.pairsClicked)

// Set initial value of pairs guessed correctly
$("#pairs_guessed").text(memoryGame.pairsGuessed)

// Add all the div's to the HTML
$("#memory_board").html(html);

// Bind the click event of each element to a function
$(".back").click(function() {
  if (memoryGame.isFinished()) {
    console.log("The game is finished");
  } else {
    //$(this).css("background-color", "transparent")
    if ($(this).hasClass("paired-up")) {
      console.log("this pair was paired up already");
      memoryGame.pickedCards = [];
    } else {
      if (memoryGame.pickedCards.length < 1) {
        memoryGame.pickedCards.push(this);
        console.log(memoryGame.pickedCards);
      } else if (memoryGame.pickedCards.length < 2) {
        if(memoryGame.pickedCards.indexOf(this) === -1){
          memoryGame.pickedCards.push(this);
          console.log(memoryGame.pickedCards);
        }else {
          console.log("You can't pick the same card two times, start again")
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
        $(this).toggleClass("paired-up");
        memoryGame.pickedCards = [];
        $("#pairs_clicked").text(memoryGame.pairsClicked)
        $("#pairs_guessed").text(memoryGame.pairsGuessed)
      } else {
        console.log("not a pair");
        memoryGame.pickedCards = [];
        $("#pairs_clicked").text(memoryGame.pairsClicked)
      }
    }
  }
});
//});
