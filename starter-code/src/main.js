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

var memoryGame 

function flipCard(card){
  if($(card).hasClass("back")){
    $(card).switchClass("back", "front", 0)
    $(card).next().switchClass("front", "back", 0)
  }else{
    setTimeout(function(){
      $(card).switchClass("font", "back", 0)
      $(card).next().switchClass("back", "front", 0)
    }, 1000)
    
  }
  
}

function blockCard(card){
  $(card).toggleClass("blocked")
  $(card).next().toggleClass("blocked")
}


$(document).ready(function(){
  memoryGame = new MemoryGame(cards);
  // memoryGame.shuffleCards()
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
    var picked = $(this)

    memoryGame.pickedCards.push(picked)
    flipCard(picked)
    blockCard(picked)

    if(memoryGame.pickedCards.length == 2){
      if(!memoryGame.checkIfPair($(memoryGame.pickedCards[0]).attr("name"), $(memoryGame.pickedCards[1]).attr("name"))){
        blockCard(memoryGame.pickedCards[0])
        blockCard(memoryGame.pickedCards[1])
        flipCard(memoryGame.pickedCards[0])
        flipCard(memoryGame.pickedCards[1])
      }
      memoryGame.pickedCards = []
    }
    if(memoryGame.isFinished()) alert("You won!")
  });

});


