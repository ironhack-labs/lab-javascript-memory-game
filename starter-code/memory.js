// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
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


    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame.shuffleCards();
  memoryGame.selectCard();





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
});

// shuffleing the cards
MemoryGame.prototype.shuffleCards = function(){
  var cartas = _.shuffle(this.cards);
   return cartas;
};

// select random card

MemoryGame.prototype.selectCard = function(card){
  var cartasDesordenadas = memoryGame.shuffleCards();
  var seleccion = cartasDesordenadas[card];
  this.selectedCards.push(seleccion);
  /*
  var aleatorio = Math.floor(Math.random()*(cartasDesordenadas.length));
  var cartaSelecionada = cartasDesordenadas[aleatorio];
  cartasDesordenadas.splice(aleatorio, 1);*/

};

//comparar cartas
MemoryGame.prototype.comparar = function(){
  var valor1=Object.values(this.selectedCards[0]);
  var valor2 =Object.values(this.selectedCards [1]);
  var valordeverdad1 = valor1[0];
  var valordeverdad2 = valor2[0];
  if (valordeverdad1===valordeverdad2 ){
    this.pairsClicked += 1;
    this.correctPairs += 1;
    console.log("muy bien, has acertado!");
    this.selectedCards = [];}
   else {this.pairsClicked += 1;
     console.log("ooooooh! prueba de nuevo!");
    this.selectedCards = [];
     }
};
