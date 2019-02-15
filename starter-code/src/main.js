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
  
  //memoryGame.shuffleCards(); // DGG: Partidas aleatorias
  
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
  var counterClick = 0;
  var nameArray = [], objArray = [];  
  var name, obj;
  var endGame = false;

  $('.back').click(function () {
    // TODO: write some code here

    obj = $(this);
    name = $(this).parent().attr('data-card-name');
    nameArray.push(name);
    objArray.push(obj);
    $(this).toggleClass('front').toggleClass('back');
    $(this).siblings().toggleClass('back').toggleClass('front');
    counterClick++;
    console.log('Clicks: ' + counterClick);
    console.log('Card: ' + name);
    console.log(nameArray);
    if ( nameArray.length > 1 && nameArray[nameArray.length - 1] === nameArray[nameArray.length - 2] ) {
      console.log('Iguales!!!');
      nameArray = [];
    }
    else if ( nameArray.length > 1 && nameArray[nameArray.length - 1] !== nameArray[nameArray.length - 2] ) {
      console.log('Distintas!!!');
      
      objArray[objArray.length - 1].toggleClass('back', 2000).toggleClass('front', 2000);
      objArray[objArray.length - 1].siblings().toggleClass('front', 2000).toggleClass('back', 2000);
      
      objArray[objArray.length - 2].toggleClass('back', 2000).toggleClass('front', 2000);
      objArray[objArray.length - 2].siblings().toggleClass('front', 2000).toggleClass('back', 2000);

      nameArray = [];
    }
    endGame = memoryGame.isFinished(); // Si es true se desactiva el click    
  });

  /*$('.front').click(function () {
    // TODO: write some code here
    console.log( $(this).parent().attr('data-card-name') );
    $(this).toggleClass('back').toggleClass('front');
    $(this).siblings().toggleClass('front').toggleClass('back');
  });*/

});


