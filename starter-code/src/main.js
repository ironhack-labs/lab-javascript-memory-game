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
  
  memoryGame.shuffleCard(cards);

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
  $(".front").hide();
  var turn =0;
  var backFirstCard = 0
  var backSecondCard = 0
  var frontFirstCard =0;
  var frontSecondCard = 0;
  var time = 0;


    $('.back').click(function(){
      if (turn ==0){
      backFirstCard = $(this);
      backFirstCard.toggle();
      frontFirstCard = backFirstCard.next();
      frontFirstCard.toggle();
      turn += 1
    } else if(turn==1){
      backSecondCard = $(this);
      backSecondCard.toggle();
      frontSecondCard = backSecondCard.next();
      frontSecondCard.toggle();
      turn += 1
      if(!memoryGame.checkIfPair(frontFirstCard.attr("style"), frontSecondCard.attr("style"))){
        flip();
        $("#pairs_clicked").html(memoryGame.pairsClicked);
      } else{
        $("#pairs_guessed").html(memoryGame.pairGuessed);
        $("#pairs_clicked").html(memoryGame.pairsClicked);
        turn=0;
        memoryGame.finished(cards);
        win();
      }
    }
  })

  function win(){
    if (memoryGame.finished(cards)){
      $("#score h2:first-child").html("You Won!")
    }
  }

  function flip(){
  if (turn == 2){
    var interval = setInterval(function(){
    frontFirstCard.toggle();
    frontSecondCard.toggle();
    backFirstCard.toggle();
    backSecondCard.toggle();
    time+=1;
    turn=0;
    if (time == 1) {
      clearInterval(interval);
      time =0;
    }
  }, 1000)
  }
  }
 
});
