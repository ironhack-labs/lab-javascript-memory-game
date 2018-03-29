var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked += 1;
    $('#pairs_clicked').html(this.pairsClicked);
    if(firstCard === secondCard){
        console.log('You found a pair!')
        this.pairsGuessed += 1;
        $('#pairs_guessed').html(this.pairsGuessed);
        this.pickedCards = [];
        nbCards = 0;
        $('.back.active').addClass('blocked');
        this.finished();
        return true;
    }
    else {
        // console.log('Not this time!')
        this.pickedCards = [];
        // $('.back.active:not(.blocked)').css({'background':'#f00'});
        setTimeout(function(){
            $('.back.active:not(.blocked)').removeClass('active').css({'background':'#456783'});
            nbCards = 0;
        }, 3000);
        return false;
    }
};

MemoryGame.prototype.finished = function () {
    if(this.pairsGuessed < 12){
        return false;
    }
    else{
        console.log("Congratulation! You win!")
        return true;
    }
};
