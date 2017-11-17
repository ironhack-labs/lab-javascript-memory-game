// //******************************************************************
// // Game Logic
// //******************************************************************
function MemoryGame(cardsArray, matchesNum) {
    this.cardsArray = cardsArray;
    this.matchesNum = matchesNum;
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};


MemoryGame.prototype.randomCards = function() {
  var cardsLength = this.cardsArray.length;
  console.log( "Total de cartas barajar: " + cardsLength )
  console.log( "repeticiones por carta: " + this.matchesNum )
  var usedCards = this.cardsArray;
      for(var i=0; i<cardsLength*this.matchesNum; i++){
        cardSelected = Math.floor( Math.random()*usedCards.length );
        usedCards[cardSelected]["matches"]++
        console.log( usedCards[cardSelected]["name"] );
            if (usedCards[cardSelected]["matches"]===this.matchesNum){
              usedCards.splice(cardSelected,1);
            }
        
      }
}

// Función para el reparto de cartas aleatorio 


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************


$(document).ready(function(){


 

  var cardsArraywerwqerqwerqwreqwre = [
    { name: "aquaman",         img: "aquaman.jpg",         matches: 0 },
    { name: "batman",          img: "batman.jpg",          matches: 0 },
    { name: "captain america", img: "captain-america.jpg", matches: 0 },
    { name: "fantastic four",  img: "fantastic-four.jpg",  matches: 0 },
    { name: "flash",           img: "flash.jpg",           matches: 0 },
    { name: "green arrow",     img: "green-arrow.jpg",     matches: 0 },
    { name: "green lantern",   img: "green-lantern.jpg",   matches: 0 },
    { name: "ironman",         img: "ironman.jpg",         matches: 0 },
    { name: "spiderman",       img: "spiderman.jpg",       matches: 0 },
    { name: "superman",        img: "superman.jpg",        matches: 0 },
    { name: "the avengers",    img: "the-avengers.jpg",    matches: 0 },
    { name: "thor",            img: "thor.jpg",            matches: 0 },
  ];

  var cardsArray = [
    {name: "A", matches: 0},
    {name: "B", matches: 0},
    {name: "C", matches: 0},
    {name: "D", matches: 0},
    {name: "E", matches: 0},
    {name: "F", matches: 0}];

    

    var memoryGame = new MemoryGame(cardsArray, 2);
    console.log("creado objeto memoryGame");
    console.log(memoryGame);
    memoryGame.randomCards();

    var usedCards = this.cardsArray;



    var html = '';

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
