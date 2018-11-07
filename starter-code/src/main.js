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
  var result = false;

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function (e) {


    memoryGame.pairsClicked += 0.5
    $("#pairs_clicked").text(memoryGame.pairsClicked)
    memoryGame.pickedCards.push($(this).attr("name"))

    console.log(this, e)
    
    $(this).toggleClass("back")
    $(this).toggleClass("front")
    $(this).next().toggleClass("back")
    $(this).next().toggleClass("front")
  });

  $('.front').click(function () {
    
    $(this).toggleClass("front")
    $(this).toggleClass("back")
    $(this).prev().toggleClass("front")
    $(this).prev().toggleClass("back")
  });



  if(memoryGame.pairsClicked % 2 === 0){
    console.log(memoryGame.pickedCards)
    var card1 = memoryGame.pickedCards[memoryGame.pickedCards.length-1]
    var card2 = memoryGame.pickedCards[memoryGame.pickedCards.length-2]
    if (memoryGame.pickedCards.length === 0){
      result = false
    }else{

      result = memoryGame.checkIfPair(card1, card2)
      console.log(result)

      if (result){
        memoryGame.pickedCards = []
        memoryGame.pairsGuessed ++
        $("#pairs_guessed").text(memoryGame.pairsGuessed)
    }
    }
    
  }



});


