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
  memoryGame.shuffleCard(cards)
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
  var firstCard;
  var secondCard;
  var loading = false;
  var pairsClicked = document.getElementById('pairs_clicked');
  var pairsGuessed = document.getElementById('pairs_guessed');
  
  $('.back').on('click', function () {
    // var clickedCardName = $(this).attr('name');
    
    if (!loading) {
      toggleCard($(this))
      addCard($(this))
    } else {
      console.log('please wait')
    }
   
    // console.log(clickedCardName)
  });
 
  
  function toggleCard(card) {
    console.log(card)
    card.addClass('front').removeClass('back')
    card.next().addClass('back').removeClass('front')
  }

  function disappear(card) {
    card.addClass('back').removeClass('front')
    card.next().addClass('front').removeClass('back')
  }
  function addCard(card) {
   
    if (memoryGame.pickedCards.length === 0) {
      firstCard = card;
      // console.log('1', firstCard)
      var cardName = card.attr('name');
      memoryGame.pickedCards.push(cardName)
      // console.log(cardName)
    } else if (memoryGame.pickedCards.length === 1) {
      secondCard = card;
      // console.log(secondCard)
      var cardName = card.attr('name');
      memoryGame.pickedCards.push(cardName)
      // console.log(cardName)

    }
    if (memoryGame.pickedCards.length === 2) {

      var result = checkResult();
      if (result) {
        console.log('do nothing')
        pairsGuessed.innerHTML = memoryGame.pairsGuessed;

        reset()
      } else {
        console.log('disappear')
        // firstCard.addClass('back')
        console.log('2', firstCard)
        loading = true;
        setTimeout(function() {
          console.log('interval')
          disappear(firstCard)
          disappear(secondCard)
          reset()
        }, 1000)

        
        
        // toggleCard(firstCard)
        // toggleCard(secondCard)
      }
    }
  }
  function checkResult() {
    var result = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
    pairsClicked.innerHTML = memoryGame.pairsClicked;
    return result;
  }

  function reset() {
    memoryGame.pickedCards = [];
    firstCard = undefined;
    secondCard = undefined;
    loading = false;
  }
});




