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
  var firstCard = 0
  var secondCard = 0
  var time = 0;


    $('.back').click(function(){
      if (turn ==0){
      firstCard = $(this);
      firstCard.toggle();
      firstCard.next().toggle();
      turn += 1
    } else if(turn==1){
      secondCard = $(this);
      secondCard.toggle();
      secondCard.next().toggle();
      turn += 1
      console.log(firstCard, secondCard)
      if(!memoryGame.checkIfPair(firstCard, secondCard)){
        flip();
        $("#pairs_clicked").html(memoryGame.pairsClicked);
      }
    }
  })

  function flip(){
  if (turn == 2){
    var interval = setInterval(function(){
    firstCard.next().toggle();
    secondCard.next().toggle();
    firstCard.toggle();
    secondCard.toggle();
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


