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
  memoryGame.shuffleCards ();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

setTimeout(function(){
  $(".front").switchClass( "front", "back", 100 );
  $(".back").switchClass( "back", "front", 100 );
}, 3000);

  $(".front").switchClass( "front", "back", 100 );
  $(".back").switchClass( "back", "front", 100 );

  memoryGame.pairsClicked = 0; //no se por que pero poniendo esto se evita un bug (--> el primer click no lo cuenta)

    // Bind the click event of each element to a function
  $('.back').click(function () {
    memoryGame.pickedCards.push(this);
    
    $("#pairs_clicked").html ("<span id=" + "pairs_clicked" + ">" + memoryGame.pairsClicked + "</span>");


    flipCard(this)

    if( memoryGame.pickedCards.length === 2){
        memoryGame.pairsClicked ++;

      if(memoryGame.checkIfPair ($(memoryGame.pickedCards[0]).attr('name'),$(memoryGame.pickedCards[1]).attr('name'))) {
        
        
        if (memoryGame.isFinished()){
            setTimeout(function() {
              alert("You Win!");
            },500);
        }
        
        $("#pairs_guessed").html ("<span id=" + "pairs_clicked" + ">" + memoryGame.pairsGuessed + "</span>"); //pintamos la pantalla
        
        memoryGame.pickedCards = [];
      
      } else {
        turnBack(memoryGame.pickedCards[0])
        turnBack(memoryGame.pickedCards[1])
        memoryGame.pickedCards = [];
       

      }
    }
    
  });

  $('#pairs_clicked').text(memoryGame.pairsClicked)
});

function flipCard(card) {
  $(card).toggleClass('back front')
  $(card).siblings().toggleClass('front back')
}

function turnBack(card) {
  setTimeout(function() {
    $(card).toggleClass('front back')
    $(card).siblings().toggleClass('back front')
  }, 300)  
}
