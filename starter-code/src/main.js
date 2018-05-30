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
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" data-name="card_' + pic.name + '">';
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
  $('.back').on('click', function () {
    if (memoryGame.pickedCards.length === 2) {
      return;
    }

    if (memoryGame.pickedCards.length < 2) {
      $(this).toggleClass('front back');
      $(this).next().toggleClass('front back');
      
      $(this).parent().addClass('picked');
      
      memoryGame.pickedCards.push($(this).parent().attr('data-name'));
      console.log(memoryGame.pickedCards);   
    } 
    if (memoryGame.pickedCards.length === 2) {
      var firstCard = memoryGame.pickedCards[0];
      var secondCard = memoryGame.pickedCards[1];
      var isMatch = memoryGame.checkIfPair(firstCard, secondCard); 

      updateScore();
      
      // setTimeout(function() {
      //   if (!isMatch) {
      //     $('.picked').children().toggleClass('front back');
      //   }
      //   memoryGame.pickedCards = [];
      //   $('.picked').removeClass('picked');
      // }, 2000);

      
      if (!isMatch) {
        setTimeout(function() {
          $('.picked').children().toggleClass('front back');
          memoryGame.pickedCards = [];
          $('.picked').removeClass('picked');
          
        }, 2000);
      }
      else {
        memoryGame.pickedCards = [];
        $('.picked').removeClass('picked');
      }

      if (memoryGame.finished()) {
        $('.card').fadeOut(5000, function() {
          $('#memory_board').html('<h1>Game Over</h1>')
        });
      }
    }
  });

  function updateScore() {
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsGuessed);
  }
});