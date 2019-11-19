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
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Toma el Div del HTML
  $('#memory_board').html(html);

  // Voltea la carta, con un click
  $('.back').click(function () {
    //REmueve la clase al voltear la carta y l regresa sino concuerda con la condicion
    $(this).removeClass('back')
    $(this).siblings().addClass('back')
    $(this).siblings().removeClass('front')
    $(this).siblings().addClass('picked')
    let card = $(this).parent().attr('data-card-name')
    memoryGame.pickedCards.push(card)
    if (memoryGame.pickedCards.length === 2) {
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])) {
        $('.picked').addClass('found')
        $('.picked').removeClass('picked')
        if(memoryGame.isFinished()){
          setTimeout(function(){
             alert(`Congratulations, you completed the game in ${memoryGame.pairsClicked} moves.`)
            }, 500);
        }
      } else {
        $('.back').addClass('blocked')
        setTimeout(function(){
          $('.picked').siblings().addClass('back')
          $('.picked').removeClass('back')
          $('.picked').removeClass('picked')
          $('.blocked').removeClass('blocked')
        }, 1000);
      
      }
      $('#pairs_clicked').text(memoryGame.pairsClicked)
      $('#pairs_guessed').text(memoryGame.pairsGuessed)    
      
      //console.log(memoryGame.pickedCards)
      memoryGame.pickedCards=[]
    }
  });
});




