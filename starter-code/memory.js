// //******************************************************************
// // FUNCION CONSTRUCTORA
// //******************************************************************
function MemoryGame(cardsArray, matchesNum) {
    this.cardsArray = cardsArray;
    this.matchesNum = matchesNum;
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
    this.totalClicks = 0;
};


// //****************************************************************************
// // METODO REPARTO ALEATORIO DE CARTAS CON EL NUMERO DE DUPLICADOS ESTABLECIDO
// //****************************************************************************
MemoryGame.prototype.shuffleCards = function() {
  var cardsLength = this.cardsArray.length;
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
   $("#pairs_to_match").text(this.cardsArray.length);   
 }


// //******************************************************************
// // METODO JUEGO AL SELECCIONAR UNA CARTA
// //******************************************************************
MemoryGame.prototype.selectCard = function(card){ 
  var clickName = $(card).attr("name");

  this.totalClicks ++ ; 
  $("#total_clicks").text(this.totalClicks);

  var coverCard = $(card).find(".cover");

  if ( coverCard.hasClass("selected") ){
    coverCard.removeClass("selected");
    this.pairsClicked -- ; 
    var indexCard = this.selectedCards.indexOf(clickName);
    this.selectedCards.splice(indexCard, 1);
    console.log("quitamos " + clickName);
  }
  else {
    coverCard.addClass("selected");
    this.pairsClicked ++ ; 
    this.selectedCards.push(clickName);
    console.log("añadimos " + clickName);
  }

      if (this.pairsClicked>=this.matchesNum){
            if ( allValuesSame(this.selectedCards) ){
              console.log("BIEN PARAJAS OK!!!!!!!");
              $(".selected" ).parent().addClass("blocked");
              $(".selected" ).removeClass("selected").addClass("cardOk");
              this.correctPairs ++;
              $("#pairs_matched").text(this.correctPairs);
            }
            else {
              setTimeout(function(){ 
                $(".selected").removeClass("selected");
                console.log("mal..... sigue intentándolo!");
              }, 500);

              
              
            }
        this.selectedCards = [];
        this.pairsClicked = 0;
      }
  if (this.correctPairs >= this.cardsArray.length){
  $("#instrText").text("WELLDONE, MISSION ACCOMPLISHED!!");
  }
};


// funcion que comprueba si todos los elementos del array son iguales
allValuesSame = function(array) {
      for(var i = 1; i < array.length; i++)
      {
          if(array[i] !== array[0])
              return false;
      }
      return true;
  }





  

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************


$(document).ready(function(){

  var cardsArray = [
    { name: "aquaman",         img: "aquaman.jpg"},
    { name: "batman",          img: "batman.jpg"},
    { name: "captain america", img: "captain-america.jpg"},
    { name: "fantastic four",  img: "fantastic-four.jpg"},
    { name: "flash",           img: "flash.jpg"},
    { name: "green arrow",     img: "green-arrow.jpg"},
    { name: "green lantern",   img: "green-lantern.jpg"},
    { name: "ironman",         img: "ironman.jpg"},
    { name: "spiderman",       img: "spiderman.jpg"},
    { name: "superman",        img: "superman.jpg"},
    { name: "the avengers",    img: "the-avengers.jpg"},
    { name: "thor",            img: "thor.jpg"},
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
          $("#instrText").text("trainning mode - just match pairs");
          break;
        case 2:
          cardsDifficulty = cardsArray.slice(0, 6);
          matchesNum=2;
          $("#instrText").text("easy mode - match pairs");
          break;
        case 3:
          cardsDifficulty = cardsArray.slice(0, 9);
          matchesNum=2;
          $("#instrText").text("medium mode - match pairs");
          break;
        case 4:
          cardsDifficulty = cardsArray.slice(0, 12);
          matchesNum=2;
          $("#instrText").text("difficult mode - match pairs");
          break;
        case 5:
          cardsDifficulty = cardsArray.slice(0, 12);
          matchesNum=3;
          $("#instrText").text("Just for super heroes!!!! - match 3 elements");
          break;
        default:
          break;
      }

      $( ".card" ).remove();
      memoryGame = new MemoryGame(cardsDifficulty, matchesNum);
      memoryGame.shuffleCards();

      //evento click en cada card
      $(".card").click(function(){
        memoryGame.selectCard(this);
      });

   });  


   memoryGame = new MemoryGame(cardsDifficulty, 2);
   memoryGame.shuffleCards();

    //evento click en cada card
    $(".card").click(function(){
      memoryGame.selectCard(this);
    });

});