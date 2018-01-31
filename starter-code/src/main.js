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
  
  memoryGame.shuffleCard(cards);

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

  document.getElementById('memory_board').innerHTML = html;


  $('.back').on('click', function () {

    //Destapo las cartas
    $(this).css("display", "none");
    $(this).siblings().addClass("back");

    //Relleno un array de cartas hasta que llegue un limite de 2
    memoryGame.pickedCards.push($(this).attr("name"));

    //Solo accederé al if siempre y cuando tenga 2 cartas
    if (memoryGame.pickedCards.length === 2){

    //Llamo a la funcion CheckIfPair, pasandole como parametros las dos cartas
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){

    //Actualizo marcadores
        $("#pairs_clicked").text(memoryGame.pairsClicked)   
        $("#pairs_guessed").text(memoryGame.pairsGuessed)         

    //Si son iguales, coloco por pantalla que ha ganado, sino, salgo por pantalla
        if(memoryGame.finished()){
          alert("You Win")
        }else {
          return
        }
      
    //Siguiendo el if donde he pasado las dos cartas, declaro el else.
    //En  caso que no sean iguales, vuelvo a tapar las cartas.
      }else{
        setTimeout(function(){
          $(".back[name='"+memoryGame.pickedCards[0]+"'").siblings().removeClass("back");
          $(".back[name='"+memoryGame.pickedCards[0]+"'").css("display", "block");

          $(".back[name='"+memoryGame.pickedCards[1]+"'").siblings().removeClass("back");
          $(".back[name='"+memoryGame.pickedCards[1]+"'").css("display", "block");
          memoryGame.pickedCards = [];          
        }, 500);

    //Actualizo marcadores
        $("#pairs_clicked").text(memoryGame.pairsClicked)
        return
      }
    }
  });
});


