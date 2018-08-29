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
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  var wait = false;
  var lastCard;
  $('.back').on('click',function() {
  
    if (wait === true) {
      return 0
    }

    var name = $(this).attr("name")
    var thisCard = $(this)

    memoryGame.pickedCards.push(name)

    $(thisCard).removeClass('back')
    $(thisCard).addClass('front')
    $(thisCard).next().removeClass('front')
    $(thisCard).next().addClass('back')

    if (memoryGame.pickedCards.length == 2) {
      wait = true

      var result = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
      memoryGame.pickedCards=[];
      $('#pairs_guessed').text(memoryGame.pairsGuessed)
      $('#pairs_clicked').text(memoryGame.pairsClicked)
      if (memoryGame.isFinished()) {
        setTimeout(()=>{
          alert('FInish the game')
        },100)
      }

      if (result === false) {
        setTimeout(()=>{
          $(thisCard).removeClass('back')
          $(thisCard).addClass('front')
          $(thisCard).next().removeClass('front')
          $(thisCard).next().addClass('back')

          $(lastCard).removeClass('front')
          $(lastCard).addClass('back')
          $(lastCard).next().removeClass('back')
          $(lastCard).next().addClass('front')
          wait=false

        },100)
      }else{
        wait=false
      }

    }else{
      lastCard = $(thisCard)
    }


  });
});


