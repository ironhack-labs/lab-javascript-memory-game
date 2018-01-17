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
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  //**** Funciones Auxiliares*/
  function muestraTodo(){

    var back = $(".back");
    var front = $(".back + .front");

    back.removeClass("back");
    back.addClass("front");
    front.removeClass("front");
    front.addClass("back");
    //front.addClass("visible");

  }
  function ocultaTodo(){
    
    var front = $(".front");
    var back = $(".front").next();

    front.removeClass("back");
    front.addClass("front");
    //front.removeClass("visible");
    back.removeClass("front");
    back.addClass("back");

  }

  function muestraCarta(cartaActual){

    var back = $(cartaActual);
    var front = $(cartaActual).next();//$(".back + .front");

    back.removeClass("back");
    back.addClass("front");
    front.removeClass("front");
    front.addClass("back");
    //front.addClass("visible");

  }

  function ocultaCarta(cartaActual){

    var front = $(cartaActual);
    var back = $(cartaActual).next();

    front.removeClass("front");
    front.addClass("back");
    //front.removeClass("visible");
    back.removeClass("back");
    back.addClass("front");
    
  }

  var primera = null;
  function comparamos(actual, anterior){
    
    //var primera;
    //console.log($(actual).parent().attr('id'));
    //console.log($(anterior).parent().attr('id'));

    //!==

    if(!memoryGame.checkIfPair($(actual).parent().attr('id'),$(anterior).parent().attr('id'))){
        
      ocultaCarta(actual);
      ocultaCarta(anterior);
      primera = null;

     }else{
      
      $("#pairs_guessed").html(memoryGame.pairsGuessed);
      primera = null;
      //si acabamos volvemos a empezar
      console.log(memoryGame.finished());
      if(memoryGame.finished()){
         
          //ocultaTodo()
          //memoryGame.cards =  memoryGame.shuffleCard(cards);
          //Lo copiamos pero lo podemos mejorar
          //html = '';
          //memoryGame.cards.forEach(function (pic, index) {
          //html += '<div class= "card" id="card_' + pic.name + '">';
          //html += '<div class="back"';
          //html += '    name="'       + pic.img +  '">';
          //html += '</div>';
          //html += '<div class="front" ';
          //html += 'style="background: url(img/' + pic.img + ') no-repeat">';
          //html += '</div>';
          //html += '</div>';
          
            //});  

      }

     }

     //return primera;

  }

  // Add all the div's to the HTML
document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function

//var segunda = null;

$('.back').on('click', function () {

     memoryGame.pairsClicked +=1;
     $("#pairs_clicked").html(memoryGame.pairsClicked);
     if(primera==null){
       muestraCarta(this);
       primera = this;
     }else{

       muestraCarta(this);
       setTimeout(comparamos, 300, this, primera);
      
     }
});
});


