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



  //Shuffeling cards at the beggining:
memoryGame.cards = memoryGame.shuffleCard(cards);



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
  var pairsClicked = 0;
  var pairsGuessed = 0;

  

$('.back').on('click', function(){
  //Setting the Divs in variables to manage them easily:
  var coverDiv = $(this);
  var cardDiv = $(this).next();

  //Making visible the card;
  coverDiv.toggleClass('back front');
  cardDiv.css('display', 'block');

  //Keeping the cards in variables to check later on: 
  if (firstCard === undefined){
     firstCard = cardDiv;
  }
  else {
    //Get the pairsClicked++
    pairsClicked++;
    $('#pairs_clicked').html(pairsClicked)

    //Checking the cards;
     secondCard = cardDiv;
  
      var a = firstCard.css('background-image');
      var b = secondCard.css('background-image');


      //Wrong Guess: Reverts the cards and resetting the variable
      if (a !== b){

        firstCard.css('display', 'none')
        firstCard.prev().toggleClass('front back');

        secondCard.css('display', 'none')
        secondCard.prev().toggleClass('front back');

        firstCard = undefined;
      } 
      
      //Right Guess:
      if(a === b){
        pairsGuessed++;
        $('#pairs_guessed').html(pairsGuessed);

        firstCard = undefined;
      }
  };
});
})


