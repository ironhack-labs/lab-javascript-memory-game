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
  memoryGame.shuffleCard(memoryGame.cards);
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



  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function

$('.back').on('click', function () {

  var cardName = this.getAttribute('name');
  $(this).toggleClass("back");
  $(this).next().toggleClass("back");

  var selectedCards = [];

  selectedCards.push(cardName);

  if(selectedCards.length === 2){
  memoryGame.checkIfPair(selectedCards[0],selectedCards[1]);
} else {  
          
          selectedCards = [];
          }



  //selectedCards.push(card1);

  //memoryGame.checkIfPair(card1,);


  //obtener las dos cartas , saber que es click 1 y click 2 ,
  //guardar las dos cartas en variables 
  //preguntarle al juego con memorycars.check si son iguales
  //sacarlas del array
  //si son iguales 
  //si son 

   });

$('.front').on('click', function () {
  $(this).toggleClass("back");
  $(this).prev().toggleClass("back");

$("#pairs_clicked").on("click", function(){

});



   
});




});



