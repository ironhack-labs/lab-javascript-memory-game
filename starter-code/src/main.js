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
  memoryGame.shuffleCards();
  var html = '';
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
    var self = this;
    
    $(self).toggleClass('back');
    $(self).next().toggleClass('back');
    memoryGame.pickedCards.push($(self));

    if(memoryGame.pickedCards.length == 2){     
      var pair = memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('name'), memoryGame.pickedCards[1].attr('name'));
      document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
      document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed;
      
      if (pair == true) {
        memoryGame.pickedCards = [];
        if (memoryGame.isFinished()){
          //END
        }
      } else {
        //TURN BACK     
        setTimeout (function(){
          memoryGame.pickedCards.forEach(function(e){     
            e.toggleClass('back');
            e.next().toggleClass('back');
          });
          memoryGame.pickedCards = [];
          }, 2000 );
      }

    }

  });
});


