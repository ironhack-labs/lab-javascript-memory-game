var memorygame

$(document).ready(function(){

  memorygame = new MemoryGame()

  var board = $('#memory_board')
  var deck = memorygame.cards

  for( var i=0; i<deck.length; i++) {

    var container = $('<div></div>').text(deck[i].name)
    container.on('click', function() {
      console.log(this.innerHTML)
    })
    board.append(container)
  }
})
