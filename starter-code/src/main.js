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
    let nameOfClickedCard = $(this).attr("name");
    let clickedCard = {
      that: this,
      name: nameOfClickedCard
    };
    memoryGame.pickedCards.push(clickedCard);
        // test if there are 2 cards
        if (memoryGame.pickedCards[1]) {
          let card1 = memoryGame.pickedCards[0].name;
          let card2 = memoryGame.pickedCards[1].name;
          
          //if yes, are they equal?
          if (memoryGame.checkIfPair(card1, card2)){
            memoryGame.pickedCards = [];
          } else {
            // if not, let the cards stay open for 2 seconds, then close
            setTimeout(function() {
              switchCards(memoryGame.pickedCards[0].that);
              switchCards(memoryGame.pickedCards[1].that);
              memoryGame.pickedCards = [];
            }, 1000); 
            
          }
        } 
    switchCards(this);  
  });

  $('.front').click(function () {
    switchCards(this);
  });

  function switchCards(x) {
    if ($(x).parent().find("div:first").hasClass("back")) {
      $(x).parent().find("div:first").addClass("front").removeClass("back");
      $(x).parent().find("div:nth-child(2)").addClass("back").removeClass("front");
    } else if ($(x).parent().find("div:first").hasClass("front")) {
      $(x).parent().find("div:nth-child(2)").addClass("front").removeClass("back");
      $(x).parent().find("div:first").addClass("back").removeClass("front");
    }
  }

});


