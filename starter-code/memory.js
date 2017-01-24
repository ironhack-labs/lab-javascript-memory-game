//******************************************************************
// Game Logic
//******************************************************************

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
  this.cardFlips = 0;

  this.printGrid = function(){
    for (var i = 0; i < 4; ++i){
      var pString = "[";
      for (var j = 0; j < 6; ++j){
        if (this.grid[i][j].isShowing)
          pString += this.grid[i][j].card.name.toUpperCase() + ", ";
        else pString += this.grid[i][j].card.name + ", ";
      }
      console.log(pString + "]");
    }
  };

  this.isWin = function(){
    this.pairsMatched++;
    return (this.pairsMatched === this.cards.length/2) ? true : false;
  };

  // think about timing. we should put a delay once the second card is
  // flipped over. Also, not allow someone to click on a third card while
  // this delay is in effect.
  this.play = function(x, y){
    var currentCard = this.grid[x][y];
    if (!currentCard.isShowing){
      this.cardFlips++;
      currentCard.isShowing = true;
      if (!this.onSecondPlay){
        this.firstCard = currentCard;
        this.onSecondPlay = true;
      } else {
        if (currentCard.card.id === this.firstCard.card.id){
          // MATCH!
          console.log("MATCH!");
          if(this.isWin()) console.log("YOU WIN!");  // game is done.
        } else {
          // No Match...
          console.log("sorry. no match...");
          currentCard.isShowing = false;
          this.firstCard.isShowing = false;
        }
        this.onSecondPlay = false;
      }
    }
    // else do nothing because user shows a showing card.
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

  for (i = 0; i < 4; ++i){
    var row = [];
    for (j = 0; j < 6; ++j){
      //grid item will be random card
      var nextCard = shuffleCard(this.cards);
      while (seen[nextCard.id] === 2){
        nextCard = shuffleCard(this.cards);
      }
      //we got our card
      seen[nextCard.id] += 1;
      var gridItem = {card: nextCard, isShowing: false};
      row.push(gridItem);
    }
    this.grid.push(row);
  }


}


//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){
});
