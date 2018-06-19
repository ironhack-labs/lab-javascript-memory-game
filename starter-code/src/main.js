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

//Function that runs the game
// function startGame(memoryGame) {
//   var id = setInterval(function () {
//
//
//     //Check if pair
//
//     //Check if fiished
//     if (checkIfFinished(memoryGame.pairsGuessed)) {
//       clearInterval(id)
//     }
//   }, 2000)
// }


// function storeCard(card) {
//   if
//   memoryGame.pickedCards.push(card)
// }

//Function that returns if a pair es equal
// function checkIfPair(card1, card2) {
//   return memoryGame.checkIfPair(card1, card2)
// }

//Function that return if the game is finished
// function checkIfFinished(pairsGuessed) {
//   return memoryGame.finished(pairsGuessed)
// }


//Function that is called just after the docuents loads
$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards)
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
    if (memoryGame.pickedCards.length < 2) {
      //Change the cards order
      $(this).removeClass('back')
      $(this).addClass('front')
      $(this).next().addClass('back')
      $(this).next().removeClass('front')
      memoryGame.pickedCards.push($(this))

      if (memoryGame.pickedCards.length > 1) {
        var that = $(this)
        setTimeout(function() {
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].name, memoryGame.pickedCards[1])) {
            $(that).addClass('blocked')
            $(that).next().addClass('blocked')
          } else {
            $(that).removeClass('front')
            $(that).addClass('back')
            $(that).next().addClass('front')
            $(that).next().removeClass('back')
            memoryGame.pickedCards = []
          }
        }, 1500)
      }
    }
  });

  //startGame(memoryGame)
});
