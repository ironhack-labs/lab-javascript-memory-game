var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  
  var memoryGame = new MemoryGame(cards);
  
  // memoryGame.shuffleCard(cards);
  
  var html = '';
  memoryGame.cards.forEach(function (elem, index) {
    html += '<div class= "card" data="'+index+'" id="card_' + elem.name + '">';
    html += '<div class="back"';
    html += '    name="'       + elem.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + elem.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  
  // Bind the click event of each element to a function
  $('.card').on('click', function (e) {
    memoryGame.flipCard(this, null);
    
    
    memoryGame.addCardToPickedCards($(this));
    
    var card1 = memoryGame.pickedCards[0];
    var card2 = memoryGame.pickedCards[1];
    
    if (memoryGame.pickedCards.length === 2) {
      memoryGame.checkIfPair(card1, card2);      
    }
    
  });
  
  
});


