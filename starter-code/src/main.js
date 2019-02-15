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
  //pintamos las cartas ya barajadas con la función de shuffle de jasmine
  memoryGame.shuffleCards();
  //console.log(cards)
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat;"></div>';
    html += '</div>';
    //comprobar que trae las imágenes
    console.log(pic.img)
    //guardamos las cartas donde se ha clicado en un array
    var cardSelected = [];
  });


  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // inicializamos variable de click a ceroo
  var clickCount = 0;
  $('.back').click(function () {
    //coger el elemento y guardarlo en una var
    var currentCard = $(this).attr('data-card-name')
    //cuando hagas click en el elemento añadimos la calse front a back y eliminamos back.
    $(this).toggleClass('front');
    $(this).toggleClass('back')
    //Añadimos la clase back a front
    $(this).siblings().toggleClass('back')
    $(this).siblings().toggleClass('front');
  
    //PRIMERO ACCEDER AL ELEMENTO PADRE --> CARDS!!
    var cardParent = $(this).parent();
    //contamos el numero de clicks que se hace sobre el elemento PADRE
      $(cardParent).click(function(){
        clickCount += 1;
        console.log(clickCount)
      });
      //definimos que si el numero de click es igual a dos se vuelva a empezar
      if(clickCount == 2){
        console.log('has pinchado dos veces')
      }
    
    
    // TODO: write some code here
  });
});


