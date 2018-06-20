// Variables defintion
const FADETIME=700;
var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

$(document).ready(function () {

  var game = new MemoryGame(cards);
  let bckImage = "https://techsalesgroup.files.wordpress.com/2016/10/ironhack-logo-negro1.jpg"
  var html = '';

  game.shuffleCards().forEach(function (pic) {  
    html += '<div class="flex-aligner">';
    html += '<div class="card-wrapper">';// id="card_' + pic.name + '">';
    html += '<img class="card" src="img/' + pic.img + '" alt="">';
    html += '<img class="back" id="' + pic.img + '" src="' + bckImage + '" name="' + pic.name + '" alt="">'; //utilizo el atributo name.
    html += '</div>';
    html += '</div>';
  });

  const updateScore = function (game) {
    document.getElementById('pairs_clicked').innerHTML = game.pairsClicked.length.toString();
    document.getElementById('pairs_guessed').innerHTML = game.pairsGuessed.length.toString();
  }
  

    document.getElementById('flex-container').innerHTML = html;

  $('.back').click(function () {

    $(this).fadeOut(FADETIME);
    //$(this).css({'opacity':0});
    //$(this).css("display","none");

    if (game.finished())
      alert("Congratulations!\nYou've finished the Game!\n\nPRESS F5 TO START A NEW GAME");
    else {
      if (game.bufferCard($(this))) {
        if (!game.checkIfPair({ name: game.pickedCards[0][0].name, img:game.pickedCards[0][0].id },
                              { name: game.pickedCards[1][0].name, img:game.pickedCards[1][0].id })) {
          game.pairsClicked[0].fadeIn(FADETIME);
          game.pairsClicked[1].fadeIn(FADETIME);
        }
        game.pairsClicked=[]; //flush buffer!
        updateScore(game);
      }

    }
  });
});



