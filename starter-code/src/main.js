// Variables defintion
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

// when DOM is ready
$(document).ready(function () {

  var game = new MemoryGame(cards);
  let bckImage = "https://techsalesgroup.files.wordpress.com/2016/10/ironhack-logo-negro1.jpg"
  var html = '';

  game.shuffleCards().forEach(function (pic) {  //el indice no es necesario y no se utiliza
    //shuffleCards creo que deberia ser plural y no aceptar ninguna entrada puesto que ya se refiera a la propia bajara del juego.
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
  //cambio algunas propieades de la distribucion de divs en el juego
  //asi es mas fácil incorporar imágenes de diferentes tamaños en el futuro.
  // el div de clase card-wrapper servirá para darle tamaño a cada caja.
  // me parece curioso utilizar name que es mas utilizado para forms no?
  // he intentado meter un div con clase flex aligner porque queria alinear con between space pero no me ha funcionado.

    document.getElementById('flex-container').innerHTML = html;

  $('.back').click(function () {

    $(this).fadeOut(1000);
    //$(this).css({'opacity':0});
    //$(this).css("display","none");

    if (game.finished())
      alert("Congratulations!\nYou've finished the Game!\n\nPRESS F5 TO START A NEW GAME");
    else {
      if (game.bufferCard($(this))) {   //por cambiar el código html he tenido que cambiar la lógica de la clase un poco. añadiendo un metodo que almacena en el buffer solo cuando no hay repeticion
                                        // de pulsado de carta
        if (!game.checkIfPair({ name: game.pickedCards[0].name, img:game.pickedCards[0].id },
                              { name: game.pickedCards[1].name, img:game.pickedCards[1].id })) {
          game.pairsClicked[game.pairsClicked.length][0].fadeIn(600);
          game.pairsClicked[game.pairsClicked.length][1].fadeIn(600);
        }
        updateScore(game);
      }

    }
  });
});



