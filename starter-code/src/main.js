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
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  console.log(memoryGame.cards)

  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.name +  '">';
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

  function setScore(){
    $('#pairs_clicked').html(memoryGame.pairsClicked);
    $('#pairs_guessed').html(memoryGame.pairsGuessed);

    if(memoryGame.finished()){
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
  }

  function flipCard(card){
    var otherCard = card.siblings()
    card.toggleClass("back");
    card.toggleClass("front");

    otherCard.toggleClass("back");
    otherCard.toggleClass("front");
  }

  function checkCards(){
    var card1 = firstCard.attr("name")
    var card2 = secondCard.attr("name")

    if(!memoryGame.checkIfPair(card1, card2)){
      flipCard(firstCard)
      flipCard(secondCard)
    }
    firstCard = undefined;
    secondCard = undefined;
    setScore();
    $('.back').css('pointer-events', 'all');
  }

  $('.back').on('click', function () {
    if(firstCard){
      $('.back').css('pointer-events', 'none');
      secondCard = $(this);
      flipCard(secondCard);
      setTimeout(checkCards, 500);
    } else {
      firstCard = $(this);
      flipCard(firstCard);
    }
  });
});


