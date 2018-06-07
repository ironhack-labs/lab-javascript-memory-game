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
$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
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
    if (memoryGame.pickedCards.length < 2) {
      memoryGame.pickedCards.push($(this).parent().attr("id"));
      $(this).parent().toggleClass('selected'); //mark div card as selected
      $(this).toggleClass('front back');        //change div front to back
      $(this).next().toggleClass('front back'); //change div back to front

      if (memoryGame.pickedCards.length === 2) { //two cards selected. Compare id text
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          $('.selected').children().toggleClass('.blocked');
          $('.selected').toggleClass('selected');
        } else {
          setTimeout(function () {                 //delay for back the cards
            $('.selected').children().children().toggleClass('front back');
            $('.selected').children().toggleClass('front back');
            $('.selected').toggleClass('selected');
          }, 500);
        }
        memoryGame.pickedCards = []; //Clear pair
      }
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
      $("#pairs_clicked").text(memoryGame.pairsClicked);
    }
    if (memoryGame.finished()) { alert('\tCongratulations!!! end of game.\t\n \tall couples found\t') };
  });
});