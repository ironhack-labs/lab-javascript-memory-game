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
  memoryGame.shuffleCards();
  var html = '';
  var card1="";
  var card2="";
  var card1Name="";
  var card2Name="";

  creaTablero();
  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $(document).on("click",".back",function(){

    $(this).parent().find("div:nth-child(1)").toggleClass("back front blocked");
    $(this).parent().find("div:nth-child(2)").toggleClass("front back blocked");

    if(card1===""){
      card1=$(this).parent();
      card1Name=$(this).parent().attr("data-card-name");
      }
    else{
      card2=$(this).parent();
      card2Name=$(this).parent().attr("data-card-name");
      }

    if(validaSeleccionadas())
      if(card1.parent()!==card2.parent()){
        console.log("Son diferentes")
      }
      else {
        console.log("Son iguaes");
      }

    if(validaSeleccionadas()){
      if(memoryGame.checkIfPair(card1Name,card2Name)){
        card1="";
        card2="";
        $("#pairs_clicked").text(memoryGame.pairsClicked.toString());
        $("#pairs_guessed").text(memoryGame.pairsGuessed.toString());
        if(memoryGame.isFinished()){
          alert("El juego a terminado!!!!. Presione Sobre Score para reiniciar.");
        }
      }
      else{
        setTimeout (function(){
          card1.find("div:nth-child(1)").toggleClass("front blocked back");
          card1.find("div:nth-child(2)").toggleClass("back blocked front");
          card2.find("div:nth-child(1)").toggleClass("front blocked back");
          card2.find("div:nth-child(2)").toggleClass("back blocked front");
          card1="";
          card2="";
        }, 380);
        $("#pairs_clicked").text(memoryGame.pairsClicked.toString());
        $("#pairs_guessed").text(memoryGame.pairsGuessed.toString());
      }
    }

  });

  $("#score").click(function(){
    memoryGame.shuffleCards();
    memoryGame.pairsClicked=0;
    memoryGame.pairsGuessed=0;
    $("#memory_board>div.card").empty();
    html='';
    creaTablero(memoryGame);

    // Add all the div's to the HTML
    $('#memory_board').html(html);
    $("#pairs_clicked").text(memoryGame.pairsClicked.toString());
    $("#pairs_guessed").text(memoryGame.pairsGuessed.toString());

  });
  function creaTablero(){
    memoryGame.cards.forEach(function (pic) {
      html += '<div class="card" data-card-name="'+ pic.name +'">';
      html += '  <div class="back" name="'+ pic.img +'"></div>';
      html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
      html += '</div>';
    });
  }
  function validaSeleccionadas(){
    if(card1!="" && card2!="")
      return true;
    else
      return false;
  }
});
