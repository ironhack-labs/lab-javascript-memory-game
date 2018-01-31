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
  var uncovered=false;
  
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function


    $('.back').on('click', function () {
      if (!uncovered){ // no tengo cartas descubiertas que no sean par, la guardo y le doy la vuelta
        $(this).css("display","none");
        $(this).addClass("class","card1");
        $(this).siblings().addClass("back");
        uncovered=true;
        memoryGame.pickedCards.push($(this).attr('name'));
       
      } else {  // si llevo 2 volteadas la guardo y las comparo
              $(this).css("display","none");
              $(this).addClass("class","card2");
              $(this).siblings().addClass("back");
              memoryGame.pickedCards.push($(this).attr('name'));
              // si son iguales miro si ya he ganado y las dejo volteadas
              var carta1= memoryGame.pickedCards[0];
              var carta2= memoryGame.pickedCards[1];
              var IsPair=memoryGame.checkIfPair(carta1,carta2);
              var won=memoryGame.finished;
              memoryGame.pickedCards=0;
              uncovered=false;
              if (IsPair){ // si son iguales las deja boca arriba 
                  $('.carta1').removeClass();
                  $('.carta2').removeClass();
                  if (won){ 
                      $('h2:last-child').append('<p>YOU WON!!<span>0</span></p>');
                  }
              } else {
                    // si no son iguales las vuelvo a poner boca abajo 
                      console.log(carta1);
                      console.log(carta2); 
                      $('.carta1').css("display","block");
                      $('.carta1').siblings().removeClass("back");
                      $('.carta1').removeClass();
                      $('.carta2').css("display","block");
                      $('.carta2').siblings().removeClass("back");
                      $('.carta2').removeClass();
                      
              }
              }
    });
});