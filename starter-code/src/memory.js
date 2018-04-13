var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;  
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var currentIndex = cardsArr.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardsArr[currentIndex];
        cardsArr[currentIndex] = cardsArr[randomIndex];
        cardsArr[randomIndex] = temporaryValue;
    }
    this.cards = cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {  
  console.log("0");
  this.pairsClicked++ ;
  console.log("00");
  $('#pairs_clicked').text(this.pairsClicked);

  if (firstCard === secondCard){
    console.log("1");
    $('.back').addClass('blocked');
    console.log("2");
    $('.just-clicked').addClass('permaBlocked');
    this.pairsGuessed++;
    console.log("3");
    $('#pairs_guessed').text(this.pairsGuessed);
    console.log("4");
    $('.just-clicked').removeClass('just-clicked');
    console.log("5");
    $('.back').removeClass('blocked');
    // return true;

  }else 
  { 
    console.log("6");
    $('.back').addClass('blocked');
    // console.log("pairs not matching!")
    setTimeout(function (){
       console.log("a");
       $('.just-clicked').css("background", "#456783");
       console.log("b");
       $('.just-clicked').removeClass('just-clicked');
       console.log("c");
       $('.back').removeClass('blocked');
    }, 1000);
  }
    console.log("7");
    this.pickedCards = [];
    console.log("8");
    this.finished();
    // return false;
};

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed === 12){
    // console.log("YOU WON!!!");
    alert ("YOU WON!!!");
    return true;
  } else {return false;} 
};
