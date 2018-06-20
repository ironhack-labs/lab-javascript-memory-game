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
  
  //Start new game and declare needed vars
  var game = new MemoryGame(cards);
  cards = game.shuffleCard(game.cards);
  var firstClick = true;
  var firstCard, secondCard, isPair;

  //Add cards to board (HTML)
  var html = '';
  cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back" ';
    html += 'name="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  $('#memory-board').html(html);


  // Bind the click event of each element to a function
  $('.back').on('click', function() {
    if(firstClick) {
      firstCard = $(this);
      $(firstCard).toggleClass('back').next().toggleClass('blocked');
      firstClick = false;      
    } else {
      secondCard = $(this);
      $(secondCard).toggleClass('back').next().toggleClass('blocked');
      firstClick = true;
      //Card's name attributes is used for comparison, because the checkIfPair()
      //method only checks whether the received arguments are strickly equal
      isPair = game.checkIfPair($(firstCard).attr("name"), $(secondCard).attr("name"));
      $("#pairs_clicked").html(game.pairsClicked);      
      if(!isPair) {
        setTimeout(function(){
          $(firstCard).toggleClass('back').next().toggleClass('blocked');
          $(secondCard).toggleClass('back').next().toggleClass('blocked');
        }, 300);
      } else {
        $("#pairs_guessed").html(game.pairsGuessed);
        setTimeout(function(){
          if(game.finished()) {
            alert("Congratulations!!\n You helped our heroes save the world!!");
          }
        }, 300);
      }
    }
  });
});