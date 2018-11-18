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

  memoryGame.shuffleCards(); //barajeamos las cartas

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';

  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);


  // Bind the click event of each element to a function
  
  
  setTimeout(function() {
    $(".front").switchClass("front","back",100);
    $(".back").switchClass("back","front",100);
  },1500);
  
  $(".front").switchClass("front","back",100);
  $(".back").switchClass("back","front",100);
  // hacemos un setTimeout para monstrar durante un tiempo las cartas y volvemos a poner boca abajo.

  $('.back').click(function () {

   memoryGame.pickedCards.push(this); //añadimos a pickedCatd la carta pulsada
   classChange(this); //llamamos a la función que cambia las clases para poder mostrar la carta que hemos pulsado
   $("#pairs_clicked").text(memoryGame.pairsClicked); //añadimos el nº de veces que hemos clickeado carta
   $("#pairs_guessed").text(memoryGame.pairsGuessed); //añadimos el nº de parejas acertadas
   
   if (memoryGame.pickedCards.length === 2) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("name"), memoryGame.pickedCards[1].getAttribute("name"))){
        $(".faceup").toggleClass("faceup");
        if (memoryGame.isFinished()) {
          $("#pairs_clicked").text(memoryGame.pairsClicked); //añadimos el nº de veces que hemos clickeado carta
          $("#pairs_guessed").text(memoryGame.pairsGuessed); //añadimos el nº de parejas acertadas
          
          setTimeout(function() {
            alert ("The mission is finished!!!");
          },100);//mandamos un alert cuando termina el juego, con un setTimeour para monstrar la última carta.
        }
      } 
      else {
        setTimeout(function() {
          classChange(".faceup");
        },100);      
      } 
    // si hemos pulsado dos cartas comprobamos que esas cartas son pareja, si lo son, las dejamos con la
    // clase faceup y las mostramos, si no le cambiamos la clase y con setTimeout marcamos el tiempo que se muestra la segunda carta
    memoryGame.pickedCards = [];
    }
  });
});




