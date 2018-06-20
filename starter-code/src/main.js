var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

function toggleV(card) {
  card.toggleClass("back");
  card.toggleClass("front");

}
$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard(cards);
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
      toggleV($(this));
      toggleV($(this).next(".front"));


      memoryGame.pickedCards.push($(this));

      if (memoryGame.pickedCards.length === 2) {
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].attr("name"), memoryGame.pickedCards[1].attr("name"))) {
          setTimeout(function () {
            memoryGame.pickedCards.forEach(function (e) {
              toggleV(e);
              toggleV(e.next(".back"));
            });
            memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);
            $("#pairs_clicked").text(memoryGame.pairsClicked);
            $("#pairs_guessed").text(memoryGame.pairsGuessed);
          }, 1000)

        } else if (!memoryGame.finished()) {
          memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);
          $("#pairs_clicked").text(memoryGame.pairsClicked);
          $("#pairs_guessed").text(memoryGame.pairsGuessed);
        } else {
          location.reload();
        }
      }
    }
  });
});
