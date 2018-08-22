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
  $('.back').click(function () {
    $(this).toggle();
    $(this).parent().find(".front").toggle()
    
    memoryGame.pickedCards.push($(this));

    console.log(memoryGame.pickedCards.length);

   if (memoryGame.pickedCards.length === 2){
     console.log('inside');
    //  memoryGame.checkIfPair();

     if (memoryGame.checkIfPair() == true){
       $(this).addClass("blocked")

     }
     else 
    //  if (memoryGame.checkIfPair() == false) {
      {
      setTimeout(function() {
        memoryGame.pickedCards[0].toggle();
        $(memoryGame.pickedCards[0]).parent().find(".front").toggle()
        $(memoryGame.pickedCards[1]).parent().find(".front").toggle()
        memoryGame.pickedCards[1].toggle();
        memoryGame.pickedCards = [];
       }, 500);
      //  $(this).toggle();
      //  $(this).parent().find(".front").toggle()

     }
     console.log(memoryGame.pairsClicked)
     console.log($('#pairs_clicked').html());

     $('#pairs_clicked').html(memoryGame.pairsClicked);
     $('#pairs_guessed').html(memoryGame.pairsGuessed);

     if (memoryGame.pairsGuessed === 12){
       memoryGame.isFinished();
     }
     


     }


    console.log(memoryGame.pickedCards);
   }
  //  memoryGame.checkIfPair();
  
)
})




