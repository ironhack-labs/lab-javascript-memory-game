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
  var lastCard;
  var wait = false;
  $('.back').on('click', function () {

    if ( wait === true){
      return 0;
    }
    var thisCard = $(this)
    var name = $(this).attr('name')
    var result;
    memoryGame.pickedCards.push(name)
    $(thisCard).removeClass('back')
    $(thisCard).addClass('front')
    $(thisCard).next().removeClass('front')
    $(thisCard).next().addClass('back')
    if ( memoryGame.pickedCards.length == 2 ){
      wait = true;
      result = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
      memoryGame.pickedCards = [];
      $('#pairs_guessed').text(memoryGame.pairsGuessed)
      $('#pairs_clicked').text(memoryGame.pairsClicked)
      if ( memoryGame.finished()){
        setTimeout(function(){
          alert("Congrats you finished the game !\n Reload to play again :)");
        },1500)
      }
      if ( result == false){
        setTimeout(function(){
          $(thisCard).removeClass('front')
          $(thisCard).addClass('back')
          $(thisCard).next().removeClass('back')
          $(thisCard).next().addClass('front')

          $(lastCard).removeClass('front')
          $(lastCard).addClass('back')
          $(lastCard).next().removeClass('back')
          $(lastCard).next().addClass('front')
          wait = false;
        }, 1000)
      }
      else{
        wait = false;
      }
    }
    else{
      lastCard = $(thisCard)
    }
});
})
