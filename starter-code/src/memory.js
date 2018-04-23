var MemoryGame = function (cards) {
  this.cards = cards;
  //for checking current pair
  this.currentPair = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    // var shuffledArray =[];
    // //theCard = toeach elementin array, index is the index of array
    // cardsArr.forEach(function(theCard, theIndex){
    //     //math.floorrounds down which isuseful since array starts at index 0
    //     var randomCardIndex = Math.floor(Math.random() * cardsArr.length);
    //     //pushes card at randomindex(randomcardindex)
    //     shuffledArray.push(cardsArr[randomCardIndex]);
    //     //
    //     cardsArr.splice(randomCardIndex, 1);
    // });
    // //overriding original array
    // this.cards = shuffledArray;

    //using lodashs convenient shuffle method
   this.cards = _.shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    $('#pairs_clicked').text(this.pairsClicked);

if(firstCard === secondCard){
        $('.back').addClass('blocked');
        $('.just-clicked').addClass('permaBlocked');

        this.pairsGuessed++;

        $('#pairs_guessed').text(this.pairsGuessed);

        $('.just-clicked').removeClass('just-clicked');
        $('.back').removeClass('blocked');
}

else{
    $('.back').addClass('blocked');

    setTimeout(function(){
        $('.just-clicked').css("background", "#456783");
        $('just-clicked').removeClass('just-clicked');
        $('.back').removeClass('blocked');
    },500);
}
this.currentPair = [];
this.finished();
}

MemoryGame.prototype.finished = function() {
    if(this.pairsGuessed > 11){
        alert("Yay, you won")
    }
}
