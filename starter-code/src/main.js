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
var memoryGame = new MemoryGame(cards);

$(document).ready(function(){
  memoryGame.shuffleCard(cards);
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
$('.back').on('click', function () {
   $(this).hide(0);
   $(this).next().toggleClass('back');

   memoryGame.pickedCards.push(this);
   if (memoryGame.pickedCards.length === 2) {
    isMatch = memoryGame.checkIfPair($(memoryGame.pickedCards[0]).attr('name'), $(memoryGame.pickedCards[1]).attr('name'));
    console.log(memoryGame.pickedCards)
    
   } 
   if (!memoryGame.isMatch && memoryGame.pickedCards.length === 2) {
      setTimeout(() => {
        $(memoryGame.pickedCards[0]).show(0);
        $(memoryGame.pickedCards[0]).next().toggleClass('back');
        $(memoryGame.pickedCards[1]).show(0);
        $(memoryGame.pickedCards[1]).next().toggleClass('back');
        memoryGame.pickedCards.splice(0,2);
      }, 700);
  } else if (memoryGame.isMatch) {
    // $("[name = '" + pickedCard + "']")
    // $(memoryGame.pickedCards[0]).next().css('border', '2px solid red');
    // $(memoryGame.pickedCards[1]).next().css('border', '2px solid red');
    memoryGame.isMatch = false;
    memoryGame.pickedCards.splice(0,2);
  }
  var $pairsClicked = $('#pairs_clicked');
  var $pairsGuessed = $('#pairs_guessed');
  $pairsClicked.text(memoryGame.pairsClicked);
  $pairsGuessed.text(memoryGame.pairsGuessed);
  });
});

