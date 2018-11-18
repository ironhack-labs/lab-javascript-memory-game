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

  memoryGame.pairsClicked = 1; //no se por que pero poniendo esto se evita un bug (--> el primer click no lo cuenta)

    // Bind the click event of each element to a function
  $('.back').click(function () {

    memoryGame.pickedCards.push($(this).attr("name"));
    
    $("#pairs_clicked").html ("<span id=" + "pairs_clicked" + ">" + memoryGame.pairsClicked + "</span>");

    console.log(memoryGame.pickedCards);

    $(this).toggleClass("front");
    $(this).toggleClass("back");
    $(this).siblings().toggleClass("front");
    $(this).siblings().toggleClass("back");

    if( memoryGame.pickedCards.length === 2){

      if(memoryGame.checkIfPair (memoryGame.pickedCards[0],memoryGame.pickedCards[1])) {
        console.log (memoryGame.checkIfPair (memoryGame.pickedCards[0],memoryGame.pickedCards[1]));
        $(this).addClass(".card .front.blocked"); //deberia de bloquear el que se puedan dar la vuelta

        if (memoryGame.isFinished){
          
            setTimeout(function() {
              alert("You Win!");
            },1000);
        }
          
        $("#pairs_guessed").html ("<span id=" + "pairs_clicked" + ">" + memoryGame.pairsGuessed + "</span>"); //pintamos la pantalla
        memoryGame.pickedCards = [];
        memoryGame.pairsClicked = 0;
      }

      // setTimeout(function() {
 
      // },500);

      $(this).toggleClass("front");
      $(this).toggleClass("back");
      $(this).siblings().toggleClass("front");
      $(this).siblings().toggleClass("back"); 
      memoryGame.pickedCards = [];
      memoryGame.pairsClicked = 0;

    }
    memoryGame.pairsClicked ++; //dejando esta linea aqui tb se evita el bug
  });
});


