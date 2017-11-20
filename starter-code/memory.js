$(document).ready(function(){

    
  // //******************************************************************
  // // FUNCION CONSTRUCTORA
  // //******************************************************************
  function MemoryGame(selectedSuperHeroes, matchesNum) {
    this.selectedSuperHeroes = selectedSuperHeroes;
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
    console.log("iniciando Función shuffleCards:");
    console.log("selectedSuperHeroes");
    console.log(selectedSuperHeroes);
    console.log("this.selectedSuperHeroes");
    console.log(this.selectedSuperHeroes);
    var cardsLength = this.selectedSuperHeroes.length;
    var usedCards = this.selectedSuperHeroes;
      for(var i=0; i<cardsLength*this.matchesNum; i++){
        console.log("usedCards:");
        console.log(usedCards);
        var cardSelectedIndex = Math.floor( Math.random()*usedCards.length );
        usedCards[cardSelectedIndex]["matches"]++;
        var card_sanitizedName = usedCards[cardSelectedIndex]["name"].split(' ').join('_');
        var imgName = usedCards[cardSelectedIndex]["img"];
        $( "#memory_board" ).append( '<div class= "card" name="' + card_sanitizedName + '" style="background: url(img/' + imgName + ')"></div>');
              $(".card:last-child").append('<div class="cover"></div>');
        if (usedCards[cardSelectedIndex]["matches"] >= this.matchesNum){
          usedCards.splice(cardSelectedIndex,1);   
        }
    }
  $("#pairs_to_match").text(this.selectedSuperHeroes.length);   
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
    if (this.correctPairs >= this.selectedSuperHeroes.length){
    $("#instrText").text("WELLDONE, MISSION ACCOMPLISHED!!");
    }
  };


  // //******************************************************************
  // // DEF ARRAY DE SUPER HEROES Y OTRAS VARIABLES
  // //******************************************************************
  var superHeroArray = [
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
  var matchesNum = 2 ;
  var selectedSuperHeroes ;


  // //******************************************************************
  // // FUNCION QUE SELECCIONA LOS SUPERHEROES AL ZAR SEGUN EL NUMERO ESTABLECIDO
  // //******************************************************************
  newSuperHeroArray = function(numHeroes){
    selectedSuperHeroes = [];
    var availableHeroes = superHeroArray;
    var heroIndex;
    var superHero;

    for(var c=0; c<numHeroes ; c++){
      heroIndex = Math.floor( Math.random()*availableHeroes.length );
      superHero = availableHeroes[ heroIndex ];
      selectedSuperHeroes.push(superHero) ;
      availableHeroes.splice(heroIndex,1);
    }
    console.log("These ara the selected superheroes:");
    console.log(selectedSuperHeroes)
  }







  // //******************************************************************
  // // FUNCION QUE COMPRUEBA SI TODOS OS ELEMENTOS DE UN ARRAY SON IGUALES
  // //******************************************************************
  allValuesSame = function(array) {
        for(var i = 1; i < array.length; i++)
        {
            if(array[i] !== array[0])
                return false;
        }
        return true;
    }


  // //******************************************************************
  // // FUNCION QUE CREA CADA NUEVA PARTIDA
  // //******************************************************************
  newGame = function(numHeroes, matchesNum, message){
    console.log("NUEVA PARTIDA!!!!")
    newSuperHeroArray(numHeroes);
    //creamos el nuevo objeto juego
    memoryGame = new MemoryGame(selectedSuperHeroes, matchesNum);
    //repartimos las cartas
    memoryGame.shuffleCards()
    //asignamos el evento click a cada carta
    $(".card").click(function(){
      memoryGame.selectCard(this);
    });
    //y ponemos la frase introductoria de cada nivel
    $("#instrText").text(message);

  }
    



    

  // //******************************************************************
  // // HTML/CSS Interactions
  // //******************************************************************


  

      //establecemos el nivel de dificultad
      $('.star').click(function(){
        if ($(this).hasClass('on')){
          $('.star').removeClass('on').addClass('off');
        }
        $(this).addClass('on').removeClass('off');
        $(this).prevAll().addClass('on').removeClass('off');
        var difficulty = $('.star.on').length

        $( ".card" ).remove();
        switch (difficulty) {
          case 1:
            newGame(3,2,"trainning mode - just match pairs");
            break;
          case 2:
            newGame(6,2,"easy mode - match pairs");
            break;
          case 3:
            newGame(9,2,"medium mode - match pairs");
            break;
          case 4:
            newGame(12,2,"difficult mode - match pairs");
            break;
          case 5:
            newGame(12,3,"Just for super heroes!!!! - match 3 elements");
            break;
          default:
            break;
        }
    });  

  newGame(3,2,"trainning mode - just match pairs");

});