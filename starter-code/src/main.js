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
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  //Bind the click event of each element to a function
  $('.back').click(function () {
    memoryGame.pickedCards.push(this.getAttribute('name'));
    console.log(memoryGame.pickedCards);
   
    //siblings llama a cada uno de los hermmanos de la clase back
    $(this).removeClass('back').addClass('front');
    $(this).siblings().addClass('back').removeClass('front');
    
      
    //condicion si tengo dos cartas levantadas
    if (memoryGame.pickedCards.length === 2){
      console.log("Tengo dos cartas levantadas");
      // condicion si las dos cartas son iguales
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        console.log("Las dos cartas levantadas son iguales");
        //suma los click
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        //suma la pareja encontrada
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        // si son iguales vuelve a dejar pickerCards a cero
        memoryGame.pickedCards = [];
        //si has llegado al final vuelve a empezar
        if (memoryGame.isFinished()) {
          console.log("Has terminado")
          setTimeout (function(){
          if (window.confirm("Enhorabuena!!!. Otra?. Pulsa Aceptar")) { 
                      window.open("window.location.reload(true);", "Buena suerte!");
                    }
          }, 300);
          
        }
      }
      //codicion si las dos cartas no so iguales
      else {
        console.log("Las dos cartas no son iguales")
        //suma los click
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        //voltea de nuevo las dos cartas
        setTimeout(function() {
          for (var i = 0; i < memoryGame.pickedCards.length; i++) {
            $('[name="' + memoryGame.pickedCards[i] + '"]').addClass("back").removeClass("front");
            $('[name="' + memoryGame.pickedCards[i] + '"]').siblings().addClass("front").removeClass("back");
            //$('[name="' + memoryGame.pickedCards[i] + '"]').addClass("front").removeClass("back");
          }
          memoryGame.pickedCards = [];
        }, 200);
      

      }
    }
  })

});


/**
 * css
[name="carlos"] {
  color: red;
}
 */