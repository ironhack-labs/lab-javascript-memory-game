var memorygame

$(document).ready(function(){

  memorygame = new MemoryGame()

  var board = $('#memory_board')
  var deck = memorygame.cards

  for( var i=0; i<deck.length; i++) {

    var card = $('<div></div>').text(deck[i].name)

    card.on('click', function() {
      var textoCarta = this.innerHTML
      memorygame.pushCardIntoPickedCards(textoCarta)
      memorygame.checkPickedCardsSize()

    })

    board.append(card)
  }

})
