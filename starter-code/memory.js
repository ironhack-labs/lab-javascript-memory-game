// //******************************************************************
// // Game Logic
// //******************************************************************
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
  	];
    this.selectedCards = []
    this.pairsClicked = 0
    this.correctPairs = 0
}

MemoryGame.prototype.cardsAreEquals = function (){
  return this.selectedCards[0].cardName == this.selectedCards[1].cardName
}

MemoryGame.prototype._shuffleCards = function() {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.round(Math.random() * i)
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

MemoryGame.prototype.selectCard = function(cardName, cardIndex){
  this.selectedCards.push({'cardName': cardName, 'cardIndex': cardIndex})

  if(this.selectedCards.length == 2){
    $('#pairs_clicked').text(++this.pairsClicked)

    if(this.cardsAreEquals()){
      this.selectedCards = []
      $('#pairs_guessed').text(++this.correctPairs)
    }else{
      var selectedCards = this.selectedCards
      var flipCards = function(){
        flipCard(selectedCards[0].cardName, selectedCards[0].cardIndex)
        flipCard(selectedCards[1].cardName, selectedCards[1].cardIndex)
      }
      setTimeout(flipCards, 1000)

      this.selectedCards = []
    }
  }

  if(this.correctPairs != 0 && this.correctPairs == this.cards.length/2) this.finished()
}

MemoryGame.prototype.finished = function() {
  console.log('You win!!')
}


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame()
  var html = ''

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_')

    var $card = $('<div>').addClass('card')
    var cardName = 'card_' + sanitizedName
    $card.attr('name', cardName)

    var $backCard = $('<div>').addClass('back')
    var backName = pic.name
    $backCard.attr('name', backName)

    var $frontCard = $('<div>').addClass('front')
    var frontName = pic.name
    $frontCard.attr('name', frontName)
    var frontStyle = 'background: url(\'img/' + pic.img + '\') no-repeat'
    $frontCard.attr('style', frontStyle)

    $card.append($backCard)
    $card.append($frontCard)

    $('#memory_board').append($card)
  })

  $('.card').on('click', function(){
    flipCard($(this).attr('name'), $(this).index())
    $(this).children('.back').addClass('blocked')
    $(this).children('.front').addClass('blocked')
    memoryGame.selectCard($(this).attr('name'), $(this).index())
  })
})

function flipCard(cardName, cardIndex) {
  var $backCard = $($('#memory_board').children().get(cardIndex)).children(".back")
  var $frontCard = $($('#memory_board').children().get(cardIndex)).children(".front")

  $backCard.addClass('front')
  $backCard.removeClass('back')
  $frontCard.addClass('back')
  $frontCard.removeClass('front')
}
