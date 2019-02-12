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

  $('.back').on("click",function (e) {
    // TODO: write some code here
    $ (e.currentTarget).toggleClass("back front").next().toggleClass("front back")

    if (memoryGame.pickedCards.length === 0){
      memoryGame.pickedCards[0]=$(e.currentTarget)
      console.log(memoryGame.pickedCards)
    } else if (memoryGame.pickedCards.length === 1){
      memoryGame.pickedCards[1]=$(e.currentTarget)
      console.log(memoryGame.pickedCards)
    }
    
    if(memoryGame.pickedCards.length === 2){
      setTimeout(function(){
      if(memoryGame.checkIfPair ($(memoryGame.pickedCards[0]).attr("name"), memoryGame.pickedCards[1].attr("name"))){
        $("#pairs_guessed").html(memoryGame.pairsGuessed)
        
        
      } else{
          $(memoryGame.pickedCards[0]).toggleClass("front back").next().toggleClass("back front")
          $(memoryGame.pickedCards[1]).toggleClass("front back").next().toggleClass("back front")
          $("#pairs_clicked").html(memoryGame.pairsClicked)
        }
      if(memoryGame.isFinished()){
        alert("You have great memory! You beat the game!")
      }  
      memoryGame.pickedCards = []
    },300)
    }
  });
});   


