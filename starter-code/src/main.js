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
memoryGame.shuffleCards();
console.log(memoryGame.cards);

document.addEventListener("DOMContentLoaded", function(event) { 

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  var backvar = $('.back'); 

  backvar.click(function(){
    var childrenJQueryReference = $(this).parent().children();
      childrenJQueryReference.first().addClass('front').removeClass('back');
      childrenJQueryReference.last().addClass('back').removeClass('front');
    
    memoryGame.pickedCards.push(childrenJQueryReference);
    let sizePickedCards = memoryGame.pickedCards.length;

    if (sizePickedCards%2 == 0){
        
        let lastCard = memoryGame.pickedCards[sizePickedCards-1];
        let beforeLastCard = memoryGame.pickedCards[sizePickedCards-2];

        let areTheSame = memoryGame.checkIfPair(lastCard, beforeLastCard);

        $("#pairs_clicked").html(memoryGame.pairsClicked);
        $("#pairs_guessed").html(memoryGame.pairsGuessed);

        if(!areTheSame) {

          $("#memory_board").css({
            // "cursor": "wait",
            "pointer-events": "none"
        });

          setTimeout(function() { 
            lastCard.first().addClass('back').removeClass('front');
            lastCard.last().addClass('front').removeClass('back');

            beforeLastCard.first().addClass('back').removeClass('front');
            beforeLastCard.last().addClass('front').removeClass('back');
            
            $("#memory_board").css({
              // "cursor": "wait",
              "pointer-events": "auto"
          });
           }, 2000);
          
        }


    } // end of if (sizePickedCards%2 == 0)
    if (memoryGame.isFinished()) {
      setTimeout(alert('You Won!!!'), 500);
      
    }
  })

});


