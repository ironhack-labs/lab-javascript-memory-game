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
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

MemoryGame.prototype._shuffle = function () {
  var array = this.cards
  var m = array.length, t, i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

MemoryGame.prototype._select = function (e) {
  
}

  
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame._shuffle()
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  function comparePairs(a, b) {
    var x = $(a).attr('name')
    var y = $(b).attr('name')
    memoryGame.selectedCards = []
    if(x == y) {
      memoryGame.correctPairs ++
      $('#pairs_guessed').text(memoryGame.correctPairs)
      (memoryGame.correctPairs == 12) ? console.log('YOU WIN!!') : console.log('Great!')
    } else {
      console.log('Fail')
      removeBlocks(a, b)
      setTimeout(function() {
        $(a).prop('style', '')
        $(b).prop('style', '')
      }, 500)
    }
  }

  function removeBlocks(a, b) {
    $(a).removeClass('blocked')
    $(b).removeClass('blocked')
  }

  $('#memory_board div.card').on("click", function() {
    $div = $(this).find('div:first-child')
    $name = $($div).attr('name')
    $($div).addClass('blocked')
    $style = $(this).find('div.front').attr('style')
    $($div).prop('style', $style)
    console.log($name)

    switch (memoryGame.selectedCards.length) {
      case 1:
        memoryGame.selectedCards.push($div)
        comparePairs(memoryGame.selectedCards[0], $div)
        memoryGame.pairsClicked ++
        $('#pairs_clicked').text(memoryGame.pairsClicked)
        break
      default:
        memoryGame.selectedCards.push($div)
        break;
    }
  })

});
