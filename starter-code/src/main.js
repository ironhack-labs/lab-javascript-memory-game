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
  memoryGame.shuffleCards();

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {

    if(memoryGame.pickedCards.length === 2) {
      return;
    }

      let $siblDiv = $(this).next();
      let $pairsClicked = $('#pairs_clicked');
      let $pairsGuessed = $('#pairs_guessed');

      if(!(memoryGame.pickedCards.length >= 2)) {
          memoryGame.pickedCards.push($(this));

          $(this).toggleClass('back');
          $(this).toggleClass('front');

          $siblDiv.toggleClass('front');
          $siblDiv.toggleClass('back');
      }

      if(memoryGame.pickedCards.length === 2) {

          let checkRes = memoryGame.checkIfPair(...(memoryGame.pickedCards.map(card => {
            return card.attr('name').replace('.jpg', ' ').trim();
          })));
          $pairsClicked.text(memoryGame.pairsClicked);
          $pairsGuessed.text(memoryGame.pairsGuessed);

          if(memoryGame.isFinished()) {
              alert("YOU WIN THIS GAME!!!!");
          }

          if(!checkRes) {

            setTimeout(() => {
                let $card1 = memoryGame.pickedCards[0];
                let $card2 = memoryGame.pickedCards[1];
                let $siblCard1 = $card1.next();
                let $siblCard2 = $card2.next();

                $card1.toggleClass('back');
                $card1.toggleClass('front');
                $siblCard1.toggleClass('back');
                $siblCard1.toggleClass('front');

                $card2.toggleClass('back');
                $card2.toggleClass('front');
                $siblCard2.toggleClass('back');
                $siblCard2.toggleClass('front');

                memoryGame.pickedCards.length = 0;

            }, 1500);

          } else {
              memoryGame.pickedCards.length = 0;
          }

      }
  });
});




