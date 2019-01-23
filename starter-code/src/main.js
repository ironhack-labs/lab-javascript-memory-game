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
  let globalClicks = 0
  // memoryGame.shuffleCards(cards)
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
    $(this).toggleClass('back') //NO TIENE LIMITE Y SI HACES CLICK EN UNA YA ABIERTA SE VA A CERRAR Y VOLVER A EVALUAR PERO EQUIS
    $(this).next().toggleClass('back')

    memoryGame.pickedCards.push(this)
    if (memoryGame.checkIfPair(memoryGame.pickedCards)) {
      $("#pairs_guessed").text(memoryGame.pairsGuessed)
    } else {
      if (memoryGame.pickedCards.length === 2) {
        $(memoryGame.pickedCards[0]).toggleClass('back')
        $(memoryGame.pickedCards[1]).toggleClass('back')
      }
    }
    globalClicks++
    if (globalClicks%2 === 0) {
      memoryGame.pairsClicked++
      $("#pairs_clicked").text(memoryGame.pairsClicked)
      memoryGame.pickedCards = [] 
    }

    // for (let i = 0; i < 2; i++) {
      // $(pickedCards).append($(this)) //NO SIRVE PUTAMADREEEEE
      // MemoryGame.checkIfPair(pickedCards)
    // }
    
  })

})


