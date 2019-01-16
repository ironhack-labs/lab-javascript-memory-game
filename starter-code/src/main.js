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
  // memoryGame.shuffleCards(cards);  HÁ ALGUM ERRO NA FUNÇÃO SHUFFLECARDS QUE NAO RETORNA A QUANTIDADE TOTAL DE CARTAS NO CROWSER AO CARREGAR O HTML
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back " name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.card').click(function () {
    $(this).children().toggleClass('back front'); //change class from back to front between each card
    memoryGame.pickedCards.push($(this)); //add .card element data to 'pickedCards' array
    console.log(memoryGame.pickedCards); //print in console to test
    if (memoryGame.pickedCards.length === 2) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('data-card-name'), memoryGame.pickedCards[1].attr('data-card-name'))) { //conditional calling 'checkIfPair' function to test if both selected cards are equal
        $(memoryGame.pickedCards[0]).addClass('front blocked'); //if equal, add 'front block' classes to prevent this card to be unflipped
        $(memoryGame.pickedCards[1]).addClass('front blocked'); //if equal, add 'front block' classes to prevent this card to be unflipped
        memoryGame.pickedCards = []; //clear 'pickedCards' array to receive next pair of cards
        $('#pairs_clicked').text(memoryGame.pairsClicked); //add +1 to 'Pairs Clicked' score
        $('#pairs_guessed').text(memoryGame.pairsGuessed); //add +1 to 'Pairs Guessed' score
      } else { //if cards are NOT equal, it will process the below code
          setTimeout (function() { //setTimeOut called to give time to player see what cards he flipped before they unflip again.
          $('#pairs_clicked').text(memoryGame.pairsClicked); //add +1 to 'Pairs Clicked' score
          $(memoryGame.pickedCards[0]).children().toggleClass('back front'); //element related to pickedCards[0] will unflip by toggling classes 'back' and 'front'
          $(memoryGame.pickedCards[1]).children().toggleClass('back front'); ////element related to pickedCards[1] will unflip by toggling classes 'back' and 'front'
          memoryGame.pickedCards = []; //clear 'pickedCards' array to receive next pair of cards
        }, 500); 
      }
    }
    if(memoryGame.isFinished()) {
      alert('PARABENS!! ATUALIZE A PAGINA PARA REINICIAR O GAME!'); //display an alert in the browser with instructions to reset the game
    } 
  });
});