 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };

 MemoryGame.prototype.shuffleCard = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
while(currentIndex !==0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}
return array;
 };

  MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked += 1;
    $('#pairs_clicked').html(this.pairsClicked);
    if(firstCard === secondCard){
      console.log("Match found!");
      this.pairGuessed += 1;
      $("#pairs_guessed").html(this.pairsGuessed);
      this.pickedCards = [];
      sameCards = 0;
      $('.back.active').addClass('blocked');
      this.finished();
      return true;
    }else{
      this.pickedCards = [];
      setTimeout(function(){
        $('.back.active:not(.blocked)').removeClass('active').css(
          {'background':'#456783'});
          sameCards= 0;
        }, 100);
          return false;
      }
    }
//}

MemoryGame.prototype.finished = function () {
if(this.pairsGuessed < 12){
  return false;
} else{
  console.log("You win!")
  return true;
}


 };
