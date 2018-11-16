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
  

  memoryGame.shuffleCards(cards);
  //Baraja las cartas

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  //crea los divs (back y front) en base al número de imágenes que haya en el array cards.

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  //Mete todas las cartas en #memory_board.

  // Bind the click event of each element to a function
  function changeClass(elementClass) {
    //Se saca en una función aparte el "darle la vuelta a las cartas" para que cuando haga click solo tenga que invocarla.
    
    $(elementClass).toggleClass("front");
    $(elementClass).toggleClass("back");
    $(elementClass).siblings().toggleClass("front");
    $(elementClass).siblings().toggleClass("back");
    // Las dos primeras funciones añade la funcion front y quita la función back. Dándole la vuelta
    //las dos siguientes hacen efectos en los hermanos.

    $(elementClass).toggleClass("control");
    //Le metemos una clase "control" que es la que verifica que si la segunda no es correcta deben volver a darse la vuelta.
  }

  $('.back').click(function () {
    memoryGame.pickedCards.push($(this).attr("name"));
    //Añade a pickedCards las cartas clicadas
    
    /*
    $(elementClass).addClass("front").removeClass("back");
    $(elementClass).siblings().addClass("back").removeClass("front");
    */

    changeClass(this);

    if (memoryGame.pickedCards.length === 2) {
      var clicked = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
      //Creamos una variable para chequear si las dos cartas son iguales. Es un booleano.
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
      //Edita el texto del Score

    if ( clicked ) {
      debugger;
      $('.control').toggleClass("control");
      //si son pareja, la clase control se quita.
      if ( memoryGame.isFinished()) {
        setTimeout(function() {
          alert("You Win!");
        },1000);
      }      
    } else {
      setTimeout(function() {
        changeClass('.control');
      },500);
      //Si no es acertada la pareja, se quita el control. Pero se le deja medio segundo para que se pueda ver la carta.
        }
    memoryGame.pickedCards = [];
    //Vacía el array de cartas seleccionadas
    }
  });
});

