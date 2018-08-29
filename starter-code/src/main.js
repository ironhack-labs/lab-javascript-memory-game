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
  memoryGame.shuffleCards()
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  function score() {
    $("#pairs_clicked").html(memoryGame.pairsClicked);
    $("#pairs_guessed").html(memoryGame.pairsGuessed);
  }
  // Bind the click event of each element to a function
  $('.back').click(function () {
    $(this).toggleClass("front back");
    $(this).next().toggleClass("back front");
    memoryGame.pickedCards.push($(this).attr("name"));
    
    if (memoryGame.pickedCards.length == 2){
    var checkpair = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
    var firstElement = memoryGame.pickedCards[0];
    var secondElement = memoryGame.pickedCards[1];
      if (checkpair == false){
        setTimeout(function() {
        $("[name='" + firstElement + "']").removeClass("front");
        $("[name='" + firstElement + "']").addClass("back");
        $("[name='" + firstElement + "']").next().removeClass("back");
        $("[name='" + firstElement + "']").next().addClass("front");
        $("[name='" + secondElement + "']").removeClass("front");
        $("[name='" + secondElement + "']").addClass("back");
        $("[name='" + secondElement + "']").next().removeClass("back");
        $("[name='" + secondElement + "']").next().addClass("front");  
        },800)
        memoryGame.pickedCards = [];
        memoryGame.isFinished()
     
    } else {
      memoryGame.pickedCards = [];
      
    }
  }
    score();
    if (memoryGame.isFinished() == true){
      window.alert("YOU WON")
    }

    // TODO: write some code here
  });
 
  

});


