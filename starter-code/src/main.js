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
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function() {
    //coge una carta de card
    $(this).addClass('front');
    $(this).removeClass('back');
    $(this).siblings().addClass('back');
    $(this).siblings().addClass('front');
    //checkeo si la carta es igual a la siguente
    memoryGame.pickedCards.push($(this).parent());
    memoryGame.pickedCards.push($(this).parent());
    if (memoryGame.pickedCards.length === 2){
      if (!memoryGame.checkIfPair(this.pickedCards[0].attr('name'), this.pickedCards[1].attr('name'))){
        setTimeout(function(){
        //si son distintas las vuelvo a dar la vuelta al segundo
        memoryGame.pickedCards[0].addClass('back');
        memoryGame.pickedCards[0].removeClass('front');
        memoryGame.pickedCards[0].addClass('front');
        memoryGame.pickedCards[0].addClass('back');

        memoryGame.pickedCards[1].addClass('back');
        memoryGame.pickedCards[1].removeClass('front');
        memoryGame.pickedCards[1].addClass('front');
        memoryGame.pickedCards[1].addClass('back');
        },1000);
        
        //y sumo una al contador de pares vistos
        memoryGame.pairsClicked++;
      }
      else {
        //aumento el contador de pares adivinados y los dejo dados la vuelta
        memoryGame.pairsGuessed++;
      }
    }
    //vacío el acumulador de cartas para volver a empezar
    memoryGame.pickedCards = [];
  });
});


