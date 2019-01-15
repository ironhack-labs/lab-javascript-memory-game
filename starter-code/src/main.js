var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },// Bind the click event of each element to a function
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
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  
  $('#memory_board').html(html);

  var card1;
  var card2;
  $('.back').click(function () {
    if(card1 == undefined){
      card1 = $(this);
      $(this).toggleClass("back front");
      $(this).next().toggleClass("back front");
    } 
    else {
      card2 = $(this);
      $(this).toggleClass("back front");
      $(this).next().toggleClass("back front");
      var result = memoryGame.checkIfPair($(card1).attr("name"),$(card2).attr("name"));
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
      setTimeout(function(){
        if(result){
          card1 = undefined;
          card2 = undefined;
          var fin = memoryGame.isFinished();
          if(fin) alert("Congatulations, you win with " + memoryGame.pairsClicked + " moves");
        }
        else{
          $(card2).toggleClass("back front");
          $(card2).next().toggleClass("back front");
          $(card1).toggleClass("back front");
          $(card1).next().toggleClass("back front");
          card1 = undefined;
          card2 = undefined;
        } 
      },200);
    }
  });
});


