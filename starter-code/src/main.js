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

  memoryGame.pairsClicked = 0; //por alguna razon estos dos me dan NaN si no los declaro aqui
  memoryGame.pairsGuessed = 0;

  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });


  var pairs = [];

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function

$('.back').click(function () {
    //esto guarda el valor nombre de la carta en otro array. Es para que se pueda hacer la comparacion sin problemas
    var nombre = $(this).attr('name');  
    pairs.push(nombre);
    //esto muestra la imagen
    $(this).toggleClass('back');
    $(this).next().toggleClass('back');
    $(this).addClass('current'); //esta clase sirve para seleccionar las cartas
    //dinamica de comparacion de dos cartas
    if(pairs.length === 2){
      $('.back').toggleClass('blocked'); //bloquea las otras cartas
      if(memoryGame.checkIfPair(pairs[0], pairs[1]) === true){
        $('.back').toggleClass('blocked'); //desbloquea las otras cartas
        $('.current').addClass('correct'); 
        $('.correct').removeClass('current'); 
        console.log('yes')
      }else{
        setTimeout(function(){
          console.log('no')
          $('.current').addClass('back'); //se voltean las cartas
          $('.current').next().removeClass('back');
          $('.current').addClass('back');
          $('.current').next().removeClass('back');
          $('.back').removeClass('blocked'); //se desbloquean las cartas
          $('.current').toggleClass('current'); //se quita el current 
        }, 2000)
      }
      pairs = []; //vaciar array
     updateScore();
     if(memoryGame.finished() === true) $('h1').html("YOU WIN!!!");
    }
  
function updateScore(){
  $('#pairs_clicked').html(memoryGame.pairsClicked);
  $('#pairs_guessed').html(memoryGame.pairsGuessed);
}
})
});


