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

// Método para el reparto aleatorio de cartas
MemoryGame.prototype.shuffleCards = function() {
  var cardsLength = this.cardsArray.length;
  // console.log( "Total de cartas barajar: " + cardsLength )
  // console.log( "repeticiones por carta: " + this.matchesNum )
  var usedCards = this.cardsArray;
      for(var i=0; i<cardsLength*this.matchesNum; i++){
        cardSelected = Math.floor( Math.random()*usedCards.length );
        usedCards[cardSelected]["matches"]++;
        // console.log( usedCards[cardSelected]["name"] );
        var sanitizedName = usedCards[cardSelected]["name"].split(' ').join('_');
        var card_sanitizedName = sanitizedName;
        var imgName = usedCards[cardSelected]["img"];
        $( "#memory_board" ).append( '<div class= "card" name="' + card_sanitizedName + '" style="background: url(img/' + imgName + ')"></div>');
              $(".card:last-child").append('<div class="cover"></div>');
              if (usedCards[cardSelected]["matches"]===this.matchesNum){
          usedCards.splice(cardSelected,1);   
        }
      }
 }

// Método para jugar al seleccionar una carta
MemoryGame.prototype.selectCard = function(card){ 
  var clickName = $(card).attr("name");
  this.pairsClicked ++ ; 
  this.selectedCards.push(clickName);
  console.log("matchesnum " + this.matchesNum);
  console.log("numero de clicks " + this.pairsClicked);
  if (this.pairsClicked>=this.matchesNum){
        if ( allValuesSame(this.selectedCards) ){
          console.log("BIEN PARAJAS OK!!!!!!!");
        }
        else {
          console.log("mal..... sigue intentándolo!");
        }
  }
};

// funcion que oculta/activa la carta
hideCard = function(card){   
  // var clickName = $(card).attr("name");
  // console.log("clic en la carta " + clickName);
  var coverCard = $(card).find(".cover");
  coverCard.is(':visible')? coverCard.hide() : coverCard.show() ;
};

// funcion que comprueba si todos los elementos del array son iguales
allValuesSame = function(array) {
      for(var i = 1; i < array.length; i++)
      {
          if(array[i] !== this[0])
              return false;
      }
      return true;
  }



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************


$(document).ready(function(){

  var cardsArray = [
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

  var memoryGame;
  var cardsDifficulty = cardsArray.slice(0, 3);

 

    //establecemos el nivel de dificultad
    $('.star').click(function(){
      if ($(this).hasClass('on')){
        $('.star').removeClass('on').addClass('off');
      }
      $(this).addClass('on').removeClass('off');
      $(this).prevAll().addClass('on').removeClass('off');
      var difficulty = $('.star.on').length
      
      switch (difficulty) {
        case 1:
          cardsDifficulty = cardsArray.slice(0, 3);
          matchesNum=2;
          break;
        case 2:
          cardsDifficulty = cardsArray.slice(0, 6);
          matchesNum=2;
          break;
        case 3:
          cardsDifficulty = cardsArray.slice(0, 9);
          matchesNum=2;
          break;
        case 4:
          cardsDifficulty = cardsArray.slice(0, 12);
          matchesNum=2;
          break;
        case 5:
          cardsDifficulty = cardsArray.slice(0, 12);
          matchesNum=3;
          break;
        default:
          break;
      }

      $( ".card" ).remove();
      memoryGame = new MemoryGame(cardsDifficulty, matchesNum);
      memoryGame.shuffleCards();

      //evento click en cada card
      $(".card").click(function(){
        hideCard(this);
        memoryGame.selectCard(this);
      });

   });  


   memoryGame = new MemoryGame(cardsDifficulty, 2);
   memoryGame.shuffleCards();

    //evento click en cada card
    $(".card").click(function(){
      hideCard(this);
      memoryGame.selectCard(this);
    });

});