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
  $('.card').click(function () { //Click on one card --> turn around card
    $(this).children().toggle();

    memoryGame.pickedCards.push($(this).attr('data-card-name'));
    console.log(memoryGame.pickedCards);
    $(this).children().addClass('open');


    if (memoryGame.pickedCards.length === 2) {
      console.log('if running')
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        console.log('hez')
        console.log(memoryGame.pairsClicked);
        console.log($('.open'));
        $('.open').addClass('pair');
        $('.pair').removeClass('open');
        memoryGame.pickedCards = [];
      } else {
        console.log('running');
        setTimeout(function() {
          $('.open').toggle();
          $('.open').removeClass('open');
          memoryGame.pickedCards = [];
        }, 500)

      }
    } 

    


      // if (memoryGame.pickedCards.length < 3) {
      //   memoryGame.pickedCards.push($(this));
      // } else {
      //   $('.card').addClass("blocked")
      // }   
  });
});


