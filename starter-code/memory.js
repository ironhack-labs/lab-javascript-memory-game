var MemoryGame = function() {
  this.Cards = [
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
  var counter = this.Cards.length

  while (counter > 0) {
    index = Math.floor(Math.random() * counter)
    counter--
    temp = this.Cards[counter]
    this.Cards[counter] = this.Cards[index]
    this.Cards[index] = temp
  }
  return
}

MemoryGame.prototype.compareCards = function(card1, card2) {
  var result = false
  if (card1.name === card2.name) {
    result = true
  }
  return result
}





var memoryGame
$(document).ready(function(){
  memoryGame = new MemoryGame()





})
