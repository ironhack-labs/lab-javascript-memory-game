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
  { name: 'thor',            img: 'thor.jpg' },
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
  { name: 'thor',            img: 'thor.jpg' }
];

var pairsClicked = 0;
var pairsGuessed = 0;

$(document).ready(function(){
  var myGame = new MemoryGame(cards);
  var html = '';
  myGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  function displayCard(card){
    card.toggleClass('back front');
    card.next().toggleClass('front back');
    console.log(myGame.pickedCards);
  }
  
  $('.back').on('click', function () {
    if(myGame.pickedCards.length === 0){
      myGame.pickedCards.push( $(this).parent().attr('id'));
      displayCard($(this));
    }else{
      myGame.pickedCards.push( $(this).parent().attr('id'));
      displayCard($(this));
      console.log('timer activated')
      setTimeout(function(){
        if (myGame.checkIfPair(myGame.pickedCards[0],myGame.pickedCards[1]))
        {
          console.log('a match!');
    }else{
      console.log('not a match');
      $(this).toggleClass('back front');
      $(this).last().toggleClass('front back');
    },500)
  }
}
}

  
// End of document load	
});
