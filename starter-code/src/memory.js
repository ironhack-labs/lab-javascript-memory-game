var MemoryGame = function (cards) {
  this.cards = cards;
this.currentPair = [];

this.pairsClicked = 0;
this.pairsGuessed = 0;

// keep track of pairs in the hidden logic side

//create a function to text if 1 or 2 cards are in array

};

// ^constructor function (builds an object)
// cards array is passed into this.cards=[1,2,3,4]
// var whatever = new MemoryGames(something)
//whatever
// (cards: something)


MemoryGame.prototype.shuffleCard = function (cardsArr) {
  
  // loop through array
  // var shuffleArray = [];
  
// cardsArr.forEach(function(theCard, theIndex){
//grab variable from original array
// var randomCardIndex = Math.floor(Math.random() * cardsArr.length);
// //grab a random card. ! ^ is only a number 
// shuffledArray.push(cardsArr[randomCardIndex]);
// // remove number out of orginal array to prevent repeat numbers pulled
// cardsArr.splice(randomCardIndex,1);
//splice(index, count)
// return back to randdomCardIndex, 0


// return new array
// return shuffledArray; improved return function, overriding original array 

//using lodash technique 
this.cards = _.shuffle(cardsArr);
};




//construct action when clicking card
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
// console.log("check pair")
this.pairsClicked++;
$('#pairs_clicked').text(this.pairsClicked);
//look at 2 cards match, below


if(firstCard === secondCard) {
  $('.back').addClass('blocked');
  $('.just-clicked').addClass('permablocked');
  
  this.pairsGuessed++;
  // this.pairsGuessed+=1;
  //prevent clicking during fn run
$('#pairs_guessed').text(this.pairsGuessed);
$('.just-clicked').removeClass('just-clicked');
// $('.back').removeClass('blocked');
$('.back').removeClass('blocked');


//^checks pair with jq if statement and adds pairs guessed tally
  // this.currentPair = [];
  // works after first attempt(matching pairs) but after first pair
  //^blocked class is not operating. main.js below document, 
  // if (theGame) is not working

} else{
  $('.just-clicked').addClass('blocked');

  setTimeout(function(){

  $('.just-clicked').css("background","#456783")
  $('.just-clicked').removeClass('just-cliked');
  $('.just-clicked').removeClass('blocked');
},1000);
  
  //a-syncronous, read in chronological order

  //overriding backgound color in css to avoid repeating add colors to css background con't
  //added to both if and else to remove just clicked class

  }
  // no matter outcome, empty current pair and run remove class just clicked funcs
  this.currentPair = [];
  this.finished();
}


// }

MemoryGame.prototype.finished = function () {
// for production testing, ==== 12 
  if(this.pairsGuessed > 11){

  alert("Yay, you won!")
}
};
// responisible for alert, not figuring out end of game 