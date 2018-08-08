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
      var firstCard = $()
    }else{
      myGame.pickedCards.push( $(this).parent().attr('id'));
      displayCard($(this));
      console.log('timer activated')
      var checkCards = (myGame.checkIfPair(myGame.pickedCards[0],myGame.pickedCards[1]))
    if (checkCards == false){
      console.log('condition false');
      myGame.pickedCards=[];

      for (var i = 1; i <= 5; i++) {
        var tick = function(i) {
            return function() {
                console.log(i);
            }
            if(i==5){
              console.log('waiting completed')
            $(this).toggleClass('back front');
            $(this).next().toggleClass('front back');
            }
        };
        setTimeout(tick(i), 500 * i);
    }



    } else {
      console.log('condition true')
      myGame.pickedCards=[];
      if(myGame.finished() == true){
        console.log('bingo')
      }
    }
    $('#pairs_guessed').text(myGame.pairsGuessed)
    $('#pairs_clicked').text(myGame.pairsClicked)
      //END of CLICK FUNCTION
    }})
// End of document load	
});
