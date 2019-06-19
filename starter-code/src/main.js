$(document).ready(function(){

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
  memoryGame.shuffleCards(memoryGame.cards);

  var html = '';
  memoryGame.cards.forEach(function (pic, i) {
    html += '<div id="'+i+'" class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  $('#memory_board').append(html);

  $('.card').click(function(){

    memoryGame.showCard(this);
    memoryGame.addToClickedCards(this);

    let pair =  memoryGame.checkIfPair();
    let gameFinished = memoryGame.isFinished();

    if(gameFinished){
      console.log('Done!!!');
      return;
    }

    if(pair == true){
      memoryGame.clearClickedCards();
      memoryGame.updateCardsGuessed();
    }

    if(pair == false){
      memoryGame.hideCards();
      memoryGame.clearClickedCards();
      memoryGame.updateCardsClicked();
    }
  });

});


