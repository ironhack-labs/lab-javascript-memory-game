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
    // $(this).parent().find("div:first").addClass("front").removeClass("back");
    // $(this).parent().find("div:nth-child(2)").addClass("back").removeClass("front");
    
    // memoryGame.pickedCards.push($(this).attr("name"));

    // if (memoryGame.pickedCards[1]) {
    //   console.log("Before" +memoryGame.pickedCards)
    //   let card1 = memoryGame.pickedCards[0];
    //   console.log("Card1: "+card1);
    //   let card2 = memoryGame.pickedCards[1];
    //   console.log("Card2: "+card2);
    //   if (memoryGame.checkIfPair(card1, card2)){
    //     console.log("equal");
    //   } else {
    //     console.log("not equal");
    //   }
    //   memoryGame.pickedCards = [];

    //   console.log("after: " +memoryGame.pickedCards)
      
    // } 
    switchCards(this);
  });

  $('.front').click(function () {
    // $(this).parent().find("div:nth-child(2)").addClass("front").removeClass("back");
    // $(this).parent().find("div:first").addClass("back").removeClass("front");
    
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


