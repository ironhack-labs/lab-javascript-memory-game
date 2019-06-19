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

memoryGame.shuffleCards(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  let blocked = function(whatToBlock) {
    $(whatToBlock).toggleClass('blocked');
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.onclick = function() {
      $(this.children).toggleClass('back front');

      if ($('div:first-child.front')[1] !== undefined) {
        
        // let dataCardName = $(this).attr('data-card-name');
        let cardOne = document.querySelector('div:first-child.front').getAttribute('name');
        let cardTwo = document.querySelectorAll('div:first-child.front')[1].getAttribute('name');

        memoryGame.checkIfPair(cardOne, cardTwo);
        $('#pairs_clicked').html(memoryGame.pairsClicked);
        $('#pairs_guessed').html(memoryGame.pairsGuessed);

        if (cardOne !== cardTwo) {
          function flipCardsBack() {
            blocked(".card div");
            $(`[name*="${cardOne}"].front, [name*="${cardOne}"].front + div`).toggleClass('front back');
            $(`[name*="${cardTwo}"].front, [name*="${cardTwo}"].front + div`).toggleClass('front back');
          }
          setTimeout(flipCardsBack, 2000);
          blocked(".card div");
        } else {
          $(`[name*="${cardOne}"]`).toggleClass('front');
        }
      }

      if (memoryGame.isFinished()) {
        alert('Good job! :D');
        window.location.reload();
      }
    }
  });
});