// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [{
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
    {
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
  ];
  this.selectedCards = ["",""];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};

// Shuffle cards method. Returns the cards shuffled!

MemoryGame.prototype.shuffleCards = function() {
  var i = 0,
    aleatorio = 0,
    nonShuffledCards = this.cards,
    shuffledCards = [];
  for (i = nonShuffledCards.length - 1; i > -1; i--) {
    aleatorio = Math.round(Math.random() * i);
    shuffledCards.push(nonShuffledCards[aleatorio]);
    nonShuffledCards.splice([aleatorio], 1);
  }
  return (shuffledCards);
};

MemoryGame.prototype.selectCard = function(card) {
  if (this.selectedCards[0] == "") {
    this.selectedCards[0] = card;
    console.log("First card is " + this.selectedCards[0]);
  } else {
    this.pairsClicked++;
    this.selectedCards[1]=card;
    console.log("Second card is " + this.selectedCards[1]);
    if (this.selectedCards[0] == this.selectedCards[1]) {
      this.correctPairs++;
      this.selectedCards = ["",""];
      console.log("You got a couple! Good work");
    } else {
      setTimeout(function(){
        alert("Wrong Choice");},1000);
      //$('div[name=this.selectedCards[0]]').addClass("back"); //I need help using this attribute contains selector.
      //$('div[name=this.selectedCards[1]]').addClass("back"); //I need help using this attribute contains selector.
      this.selectedCards = ["",""];
      console.log("Next round!",this.selectedCards);
    }
  }
};

// $( "div[name=" + this.selectedCards[0] + "]").removeClass("front");
// $( "div[name=" + this.selectedCards[1] + "]").removeClass("front");
// Selected Cards - Array with 1, 2 or 0 values

// Pairs Clicked - Keeps track of the amount of cicks

// Correct Pairs - Number of correct clicks
