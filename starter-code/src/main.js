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

var g;
var firstCard;

$(document).ready(function(){
  

  var g = new MemoryGame(cards);
  var html = '';
  g.cards.forEach(function (pic, index) {
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
  $('#memory_board').html(html);
  // Bind the click event of each element to a function
  function displayCard(card){
    $(card).parent().children().toggleClass('front back');
  }

  
  $('.back').on('click', function () {
    if (g.pickedCards.length === 0){
        console.log('first card picked executed');
        g.pickedCards.push( $(this).parent().attr('id'));
        displayCard($(this));
        firstCard = $(this);
  }else{
      console.log('case 2 executed');
      var secondCard = $(this);
      displayCard($(this));
      g.pickedCards.push( $(this).parent().attr('id'));
      var checkCards = (g.checkIfPair(g.pickedCards[0],g.pickedCards[1]))
       if (!checkCards){
            console.log('Not a match');
            setTimeout(function(){
              displayCard(secondCard);
              displayCard(firstCard);
              ;},1500);
            
               
       }else{
        console.log('A match');

       }
       g.pickedCards=[]
    }
    updateScore(g)
    if(g.finished()){
      setTimeout(function(){alert("You Win");},500)
    }
    //END of CLICK FUNCTION
  })
  // End of document load	
});
function updateScore(g){
$('#pairs_guessed').text(g.pairsGuessed)
$('#pairs_clicked').text(g.pairsClicked)
}