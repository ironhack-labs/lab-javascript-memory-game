var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pair = [];
  this.clicked = 0
  this.guessed = 0
  this.thisPick = false
};

MemoryGame.prototype.shuffleCards = function (array) {
  var n = array.length, temp, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    temp = array[n];
    array[n] = array[i];
    array[i] = temp;
  }
  return array;
};

MemoryGame.prototype.checkIfPair = function () {
  // console.log(this.pair)

  console.log(this.pair[0]== this.pair[1])
  if(this.pair[0] === this.pair[1]){
    console.log("checkifpair if")
    this.pickedCards.push(this.pair[0],this.pair[1]);
    this.guessed++
    this.thisPick = true
  }else{
    console.log("checkifpair else")
    this.thisPick = false
  }
  // console.log(this)
  this.clicked++

  $("#pairs_clicked").text(this.clicked.toString())
  $("#pairs_guessed").text(this.guessed)
}

MemoryGame.prototype.isFinished = function () {
};