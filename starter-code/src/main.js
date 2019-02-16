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
  
  memoryGame.shuffleCards(); // DGG: Partidas aleatorias
  
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
    if ( nameArray.length > 1 && nameArray[nameArray.length - 1] === nameArray[nameArray.length - 2] ) {
      memoryGame.checkIfPair( nameArray[nameArray.length - 1], nameArray[nameArray.length - 2] );
      $('#pairs_clicked').text(memoryGame.pairsClicked);
      $('#pairs_guessed').text(memoryGame.pairsGuessed);
      
      nameArray = [];
    }
    else if ( nameArray.length > 1 && nameArray[nameArray.length - 1] !== nameArray[nameArray.length - 2] ) {
      memoryGame.checkIfPair( nameArray[nameArray.length - 1], nameArray[nameArray.length - 2] );
      $('#pairs_clicked').text(memoryGame.pairsClicked);
      $('#pairs_guessed').text(memoryGame.pairsGuessed);
      
      objArray[objArray.length - 1].toggleClass('back front', 1500);
      objArray[objArray.length - 1].siblings().toggleClass('front back', 1500);
      
      objArray[objArray.length - 2].toggleClass('back front', 1500);
      objArray[objArray.length - 2].siblings().toggleClass('front back', 1500);

      nameArray = [];
    }
    endGame = memoryGame.isFinished(); // DGG: Si es true se desactiva el click
    if (endGame) {
      $('div').off('click');
      alert('"Heroes are made by the path they choose, not the powers they are graced with -Iron Man"');
    }
  });

});
