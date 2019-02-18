var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []; //where we will be storing the cards the user have clicked so we can compare them.
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


//where we will be storing the cards the user have clicked so we can compare them => pickedCards[]
//clicked 1st, clicked 2cnd = push to pickedCards[]

MemoryGame.prototype.picked = function () {
    if ($('.selected').length == 2) {
      var firstCard = $('.selected').first().data('pic.name');
      var secondCard = $('.selected').last().data('pic.name');

      this.pickedCards.push(firstCard);
      this.pickedCards.push(secondCard);
    }
  }


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
      if (firstCard == secondCard) {
        // remove the cars
        this.pairsGuessed += 1;
        //dom manipulation
        
        $('.selected').each(function () {
          $(this).animate({
            opacity: 0
          }).addClass('matched');
          $(this).removeClass('selected');
        })
          } else {
            // flip back over
            this.pairsClicked += 1;
                    //dom manipulation

            setTimeout(function() {
              $('.selected').each(function () {
                $(this).removeClass('selected'); // plus flip card on its back
              });
            }, 1000);
          };
        }
      }
    
    

    //we just need a 'Win' function, where we need to check if our property pairsGuessed reach the 
    //numbers of pairs the game has.

     MemoryGame.prototype.isFinished = function () {
       if($('.matched').length === 24){
         $('#memory_board').html('<h1>You Won!!</h1>')
       }
     };

    //MemoryGame.prototype.shuffleCards = function () {};

    this.picked();
    this.checkIfPair();
    this.isFinished();