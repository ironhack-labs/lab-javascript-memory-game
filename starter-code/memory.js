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
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};

MemoryGame.prototype._shuffleCards = function(array) {
  return _.shuffle(array);
}
//THIS SE REFIERE OBJETO - CARD SE REFIERE AL DIV
MemoryGame.prototype.selectedCard = function(position) {
  this.selectedCards.push(this.cards[position]);
  if(this.selectedCards.length === 2) {
    if(this.selectedCards[0] === this.selectedCards[1]){
      console.log("you win");
      this.correctPairs += 1;
      this.selectedCards = [];
    } else {
      this.pairsClicked +=1;
      console.log("You lost");
      this.selectedCards = [];
    }
  }
};

  //tenemos que comprobar cuantas cartas hay en el array, si hay 2 cartas tendremos que comprobar si ambas son iguales y que vaciar el array
  //si no es tendras que sumar una a intentos y vaciar el array


//
// if (array[0]==array[1]) {
//   console.log("you win")
// }
