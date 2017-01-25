//******************************************************************
// Game Logic
//******************************************************************

var myGame = null;
var semaphore = false;

function MemoryGame (){
  this.cards = [
    { id: 0,
      name: 'aquaman'
    },
    { id: 1,
      name: 'batman'},
    { id: 2,
      name: 'captain-america'},
    { id: 3,
      name: 'fantastic-four'},
    { id: 4,
      name: 'flash'},
    { id: 5,
      name: 'green-arrow'},
    { id: 6,
      name: 'green-lantern'},
    { id: 7,
      name: 'ironman'},
    { id: 8,
      name: 'spiderman'},
    { id: 9,
      name: 'superman'},
    { id: 10,
      name: 'the-avengers'},
    { id: 11,
      name: 'thor'}
  ];

  this.grid = [];
  this.pairsMatched = 0;
  this.onSecondPlay = false;
  this.firstCard = null;
  this.secondCard = null;
  this.cardFlips = 0;

  this.printGrid = function(){
    for (var i = 0; i < 24; ++i){
      if (this.grid[i].isShowing){
        console.log(i + ": " + this.grid[i].card.name.toUpperCase());
      } else {
        console.log(i + ": " + this.grid[i].card.name);
      }
    }
  };

  this.isWin = function(){
    this.pairsMatched++;
    return (this.pairsMatched === this.cards.length) ? true : false;
  };

  // think about timing. we should put a delay once the second card is
  // flipped over. Also, not allow someone to click on a third card while
  // this delay is in effect.
  this.play = function(x){
    this.secondCard = this.grid[x];
    if (!this.secondCard.isShowing){
      this.cardFlips++;
      this.secondCard.isShowing = true;
      showMe(this.secondCard.childNumber, this.secondCard.card.name);
      if (!this.onSecondPlay){
        this.firstCard = this.secondCard;
        this.onSecondPlay = true;
      } else {
        if (this.secondCard.card.id === this.firstCard.card.id){
          // MATCH!
          console.log("MATCH!");
          if(this.isWin()){
            console.log("YOU WIN!");  // game is done.
          }
        } else {
          semaphore = true;
          // No Match...
          console.log("sorry. no match...");
          this.secondCard.isShowing = false;
          //unShowMe(currentCard.childNumber);
          this.firstCard.isShowing = false;
          //unShowMe(this.firstCard.childNumber);
          var timeoutId = window.setTimeout (unShowBoth, 1000);
        }
        this.onSecondPlay = false;
      }
    }
    // else do nothing because user shows a showing card.
    // semaphore = false;
  };

  // returns id of random card from deck
  function shuffleCard(cards){
    return cards[Math.floor(Math.random() * cards.length)];
  }


  // lets fill the play grid
  var seen = [], i = 0, j = 0;
  for (i = 0; i < this.cards.length; ++i){
    seen.push(0);
  }

  for (i = 0; i < 24; ++i){
    //grid item will be random card
    var nextCard = shuffleCard(this.cards);
    while (seen[nextCard.id] === 2){
      nextCard = shuffleCard(this.cards);
    }
    //we got our card
    seen[nextCard.id] += 1;
    var gridItem = {card: nextCard, isShowing: false, childNumber: i};
    this.grid.push(gridItem);
  }

  console.log("New game has been created! Here's the board:");
  this.printGrid();
}


//******************************************************************
// HTML/CSS Interactions
//******************************************************************

function showMe(id, name){
  var cssID = String(id).length < 2 ?
    'card-0' + String(id) : 'card-' + String(id);
  console.log('stringID in showMe = ' + cssID);
  $('#' + cssID).attr('src', './img/' + name + '.jpg');

}

function unShowMe(id){
  var cssID = String(id).length < 2 ?
    'card-0' + String(id) : 'card-' + String(id);
  console.log('stringID in unShowMe = ' + cssID);
  $('#' + cssID).attr('src', '');
}

var unShowBoth = function (){
  unShowMe(myGame.firstCard.childNumber);
  unShowMe(myGame.secondCard.childNumber);
  semaphore = false;
};

$(document).ready(function(){
  //set listeners
  $("#memory_board").on('click', function(){
    myGame = (myGame === null) ? new MemoryGame() : myGame;
  });

  $(".pic").on('click', function(){
    if (semaphore) return;
    myGame = (myGame === null) ? new MemoryGame() : myGame;
    var cssID = $(this).attr('id');          //ex: "card-02"
    var cssIDString = cssID.slice(-2);          //ex: "02"
    var cssIDInt = parseInt(cssIDString);       //ex: 2
    var myGridItem = myGame.grid[cssIDInt];

    console.log("you chose " + myGridItem.card.name);

    myGame.play(cssIDInt);
    /*
    if (myGridItem.isShowing){
      $('#' + cssID).attr('src', './img/' + myGridItem.card.name + ".jpg");
    } else {
      $('#' + cssID).attr('src', '');
    }
    */
  });
});
