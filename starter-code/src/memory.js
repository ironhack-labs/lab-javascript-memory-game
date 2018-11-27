var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  console.log("imagen 2 ",nameofImage);
    this.pairsClicked ++;

 // add pairsClikced into Dom element with id "isclicked"
 $("#pairs_clicked").html(this.pairsClicked);

  if(firstCard === secondCard){

    this.pairsGuessed ++ ;

    $(".back").addClass("blocked");
    $(".justClicked").addClass("reallyBlocked");
  

    // $(".click").css("background" , "url(img/" + nameofImage + ")");
    $("#pairs_guessed").html(this.pairsGuessed);
    $(".justClicked").removeClass("justClicked");
    $(".back").removeClass("blocked");
    
  }
  else{ 
    console.log("differnete");
    $(".back").addClass("blocked");
      
     // $(".back").addClass("block");
      setTimeout(function() {
       // $(this).css("background","green");
        $(".justClicked").css("background","grey");
        $(".justClicked").removeClass("justClicked");
        $(".back").removeClass("blocked");
       // $(".click").css("background" , "url(img/" + nameofImage + ")");
      
      }, 1000);
    
   // Clear the array since it always has the max two numbers
      this.pickedCards = [];
  }

}

MemoryGame.prototype.isFinished = function () {
};



