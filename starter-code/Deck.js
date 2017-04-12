var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	]
  this.picked_cards  = []
  this.pairs_clicked = 0
  this.pairs_guessed = 0
  this._shuffleCard()
}

MemoryGame.prototype._shuffleCard = function() {
  var counter = this.cards.length

  while (counter > 0) {
    index = Math.floor(Math.random() * counter)
    counter--
    temp = this.cards[counter]
    this.cards[counter] = this.cards[index]
    this.cards[index] = temp
  }
  return
}

MemoryGame.prototype.pushCardIntoPickedCards = function(card) {
  return this.picked_cards.push(card)
}
MemoryGame.prototype.compareCards = function(card1, card2) {
  return card1 === card2
}

MemoryGame.prototype.checkPickedCardsSize = function() {
  if (memorygame.picked_cards.length == 2) {
    console.log('Toma pipiiiii!')
  }
}
