var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = ;
  this.pairsClicked = ;
  this.pairsGuessed = ;
};

MemoryGame.prototype.shuffleCards = function () {
  let length = this.cards.length;
  for(let i = 0; i < length; i++) {
    let r = Math.floor(Math.random() * length);
    let card = this.cards.splice(r,1)(0);
    this.cards.push(card);
  }
  console.log(this.cards);
};

  array2[Math.floor(Math.random()*array3.lenth)]
  for(let i=0; i < array2.length; i++) {
    finalLetters.push(array2)[Math.floor(Math.random()*array3.lenth)]] //e verificar se o elemento está repetido. Se estiver não pode aparecer de novo (pode usar indexOf)
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard) {
    this.pairsClicked += 1;
    this.pairsGuessed += 1;
  } else {
    this.pairsClicked += 1;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (firstCard === secondCard) {
    return true;
  } else {
    return false;
  }
};