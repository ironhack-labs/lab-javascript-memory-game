var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked =0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCard = function (inputArr) {
    var inputArr =inputArr.slice();
    var outputArr = [];

    while(inputArr.length>0) {
        var selectElementId = Math.floor(Math.random()*inputArr.length);
        var selectElement=inputArr.splice(selectElementId,1)[0];
        outputArr.push(selectElement);
    }
    return outputArr;
};

// MemoryGame.prototype.shuffleCard = function () {
//         var counter =this.cards.length;
//         var outputArr = [];
    
//         while(counter>0) {
//             var selectElementId = Math.floor(Math.random()*counter);
//             var selectElement=this.cards.splice(selectElementId,1);
//             outputArr.push(selectElement);
//             counter =this.cards.length;
//         }

//         this.cards=outputArr.slice(0);
//         return outputArr;
//     };







MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard===secondCard) {
        this.pairsGuessed ++;
        return true;
    } else {
        return false;
    }

    // var equal = true;
    //var shuffledCards= memoryGame.shuffleCard(memoryGame.cards);

    // for (var i = 0; i < firstCard.length; i++) {
    //     var keyFirstCard = firstCard[i];

    //     // If values of same property are not equal,
    //     // objects are not equivalent
    //     if (firstCard[keyFirstCard] !== secondCard[keyFirstCard]) {
    //         equal= false;
    //         break;
    //     } 
    // }

};

MemoryGame.prototype.finished = function () {
 if (this.pairsGuessed === cards.length/2)
 {
     return true;
 } else {
     return false;
 }
};



