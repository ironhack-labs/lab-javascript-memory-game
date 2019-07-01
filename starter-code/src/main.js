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
var memoryGame = new MemoryGame(cards);


document.addEventListener("DOMContentLoaded", function (event) {
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;
  $('.back').click(function () {
    let target = $(this)
    if (memoryGame.pickedCards.length < 2) {
      target.siblings().addClass('back')
      target.siblings().addClass('unmatch')
      target.removeClass('back')
      memoryGame.pickedCards.push(target)
    }
    if (memoryGame.pickedCards.length > 1) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].parent().attr('data-card-name'), memoryGame.pickedCards[1].parent().attr('data-card-name')) === true) {
        memoryGame.pickedCards[0].siblings().removeClass('unmatch');
        memoryGame.pickedCards[1].siblings().removeClass('unmatch');

      } else {
        setTimeout(function () {
          reverseElement()
          console.log(memoryGame.pickedCards)

        }, 1000)

      }
      memoryGame.isFinished();
      memoryGame.pickedCards = []
    }
  })
})



function reverseElement() {
  $('.unmatch').each(function () {
    $(this).click();
    $(this).removeClass('back')
    $(this).prev().addClass('back')
  });
}
