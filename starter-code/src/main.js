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

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.back').on('click', function () {
//Destapo las cartas

    $(this).css("display", "none");
   $(this).siblings().addClass("back");
   //Relleno un array de cartas hasta que llegue a un límite de 2

   //solo accedere al if siempre y cuando tenga 2 cartas
   memoryGame.pickedCards.push($(this).attr("name"));

   if (memoryGame.pickedCards.length ===2){
     
   }
  // Bind the click event of each element to a function
  var selectedCards =[];
$('.back').on('click', function () {
   $(this).css("display", "none");
   $(this).siblings().addClass("back");
    selectedCards.push($(this).attr("name"));
    console.log(selectedCards);
    if (selectedCards.length===2){
      var first = selectedCards[0];
      var second = selectedCards[1];
      if (memoryGame.checkIfPair(first,second)===false){
        $(".back[name='"+first+"']").css("display", "block");
        $(".back[name='"+first+"']").removeClass("back");
      }
      $(".back[name='"+second+"']").css("display", "block");
        $(".back[name='"+second+"']").removeClass("back");
    }
});
});


