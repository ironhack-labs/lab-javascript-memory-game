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

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard(memoryGame.cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
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

  var selectedCards = []; 
  var turn = true;
$('.back').on('click', function () {
  if(turn){
  $(this).toggleClass('back');
  $(this).next().toggleClass('back');
  selectedCards.push($(this).attr('name'));
  if(selectedCards.length === 2){
    turn = false;
    if (memoryGame.checkIfPair(selectedCards[0],selectedCards[1])){
      $('#pairs_guessed').text(memoryGame.pairsGuessed)
      selectedCards = [];

      $('div [class*="front back"]').addClass('front-blocked')
    }else{
      selectedCards = []
      setTimeout(function(){
        $('div [class*="front back"]:not(.front-blocked)').prev().toggleClass('back');
        $('div [class*="front back"]:not(.front-blocked)').removeClass('back');
        turn = true;
      }, 500)
    }
    $('#pairs_clicked').text(memoryGame.pairsClicked)
  }
  if(memoryGame.finished()){
    $('h1').text('YOU WON!')
  }
}
});




});