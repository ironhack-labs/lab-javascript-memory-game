
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

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards()

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  var counter = 0;


  // Bind the click event of each element to a function
  $('.back').click(function (e) {
    e.preventDefault()
    
    var nombre = (this.getAttribute("name"))
    $(this).toggleClass("back front")
    $(this).siblings().toggleClass("front back")

    memoryGame.pickedCards.push(nombre)
    
    var comparados1=memoryGame.pickedCards[0];
    var comparados2=memoryGame.pickedCards[1];

    console.log(comparados1, comparados2)

    counter++;

    if (counter === 2) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        console.log("si")
        counter = 0
        memoryGame.pickedCards = []
        var cardsDone = memoryGame.pairsGuessed;
        $('#pairs_guessed').text(cardsDone)

      } else {
        console.log("no")
        counter = 0
        $(comparados1).addClass("back")
        $(comparados2).addClass("back")
        memoryGame.pickedCards = []
        
      }
      var paresClick = Math.ceil(memoryGame.pairsClicked++/2)
      $('#pairs_clicked').text(paresClick)
    }
  })
});
