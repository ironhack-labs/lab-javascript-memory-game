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
  memoryGame.cards = memoryGame.shuffleCard(cards);
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
  // para ver cuantas cartas llevo descubiertas
  var uncovered=0;
  
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
    $('.back').on('click', function () {
      // Le doy la vuelta a mi carta 
          $(this).css("display","none");
          $(this).siblings().addClass("back");
          uncovered+=1;
          console.log("estoy en cartas descubiertas"+uncovered);
          // si solo llevo una volteada, la guardo y sigo
          if (uncovered===1){
            memoryGame.pickedCards.push($('.name'));
          // si llevo 2 volteadas la guardo y las comparo
          }else if (uncovered===2){
              memoryGame.pickedCards.push($('.name'));
              // si son iguales miro si ya he ganado y las dejo volteadas
                  uncovered=0;
                  console.log(memoryGame.pickedCards[0]);
                  console.log(memoryGame.pickedCards[1]);
                  var IsPair=memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
                  var won=memoryGame.finished;
              if (IsPair){
                  memoryGame.pickedCards=0;
                if (won)
                  $('h2:last-child').append('<p>YOU WON!!<span>0</span></p>');
              }else {
                  // si no son iguales las vuelvo a poner boca abajo 
                    /* var carta1= memoryGame.pickedCards[0];
                    var carta2= memoryGame.pickedCards[1];
                    $(carta1).css("display","block");
                    $(carta1).siblings().removeClass("back");
                    $(carta2).css("display","block");
                    $(carta2).siblings().removeClass("back");*/
              }
            }
    });
});