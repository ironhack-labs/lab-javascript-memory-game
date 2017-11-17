// //******************************************************************
// // Game Logic
// //******************************************************************
function MemoryGame(cardsArray, matchesNumber) {


    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){


  Chronometer.prototype.startClock = function() {
    console.log("START CLICK");
    this.setStart();
    this.setSplit();
    this.intervalID = window.setInterval(this.runCounter, interval);
  }

  var cardsArray = [
    { name: "aquaman",         img: "aquaman.jpg" },
    { name: "batman",          img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four",  img: "fantastic-four.jpg" },
    { name: "flash",           img: "flash.jpg" },
    { name: "green arrow",     img: "green-arrow.jpg" },
    { name: "green lantern",   img: "green-lantern.jpg" },
    { name: "ironman",         img: "ironman.jpg" },
    { name: "spiderman",       img: "spiderman.jpg" },
    { name: "superman",        img: "superman.jpg" },
    { name: "the avengers",    img: "the-avengers.jpg" },
    { name: "thor",            img: "thor.jpg" },
  ];




    memoryGame = new MemoryGame();

    var html = '';

    // Función para el reparto de cartas aleatorio 
    var cardsLength = memoryGame.cards.length;
    console.log( "Total de cartas: " + cardsLength );

    for(var i=0; i<cardsLength; i++){
      cardSelected = Math.floor( Math.random()*cardsLength );
      console.log( cardSelected );
    }

    memoryGame.cards.forEach(function(pic, index) {
        var sanitizedName = pic.name.split(' ').join('_');

        html += '<div class= "card" name="card_' + sanitizedName + '">';
        html += '<div class="back"';
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '<div class="front" ';
        html += 'style="background: url(img/' + pic.img + '") no-repeat"';
        html += '    name="'       + pic.name +  '">';
        html += '</div>';
        html += '</div>';
    });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;

    //evento click en cada card
    $(".card").click(function(){
      console.log("clic en una carta");
    });

});
