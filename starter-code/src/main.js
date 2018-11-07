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

var firstSelection = ""
var secondSelection = ""
var guess = false
var gameOver = false

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';

  // Shuffle cards
  memoryGame.shuffleCards()

  // Deal the cards
  // memoryGame.cards.forEach(function (pic) {
  //   html += '<div class="card" data-card-name="'+ pic.name +'">';
  //   html += '  <div class="back" name="'+ pic.img +'"></div>';
  //   html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
  //   html += '</div>';
  // });

  memoryGame.cards.forEach(function (pic) {
    html += '  <div class="flip-front" name="'+ pic.img +'" style="background: url(src/back.png) no-repeat center"></div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  function dealCards(){
    if(confirm("Bien, terminaste! ...luego de " + memoryGame.pairsClicked + " intentos :P\nVolver a jugar?"))
      location.reload()
  }

  function printGuessed(){
    $('#pairs_guessed').text(memoryGame.pairsGuessed)
  }

  function printClicked(){
    $('#pairs_clicked').text(memoryGame.pairsClicked)
  }

  function flipCard(card,flip){
    var cardShow = ""
    if(flip === "front"){
      // card.addClass("clicked")
      cardShow = "background: url(img/"+ card.attr("name") + ") no-repeat"
    } else {
      // card.removeClass("clicked")
      cardShow = "background: url(src/back.png) no-repeat center"
    }
    // console.log("card: " + cardShow)
    card.toggleClass("clicked")
    card.attr("style",cardShow)
  }

  function firstClick(cardClicked){
    firstSelection = cardClicked
    // flipCard -> front
    flipCard(firstSelection,"front")
  }

  function secondClick(cardClicked){
    secondSelection = cardClicked
    console.log(secondSelection.attr("name"))
    flipCard(secondSelection,"front")
    // setInterval(compara(),2000)
    compara()
  }

  function compara(){
    guess = memoryGame.checkIfPair(firstSelection.attr("name"),secondSelection.attr("name"))
    printClicked()
    if(guess){
      printGuessed()
      gameOver = memoryGame.isFinished()
      if(gameOver){
        dealCards()
      } else {
        console.log("Bien! selecciona otro par")
      }
    }
    else {
      console.log("Te la pelas! escoge otro par")
      flipCard(firstSelection,"back")
      flipCard(secondSelection,"back")
    }
    firstSelection = ""
    secondSelection = ""
    guess = false
  }

  // Bind the click event of each element to a function
  // Descomentar esta línea al corregir el flipCard
  // $('.back').click(function (e) {
  $('.flip-front').click(function (e) {
    // TODO: write some code here
    if($(this).hasClass("clicked")){
      // console.log("Selecciona otra")
      alert("Selecciona otra")
    } 
    else {
      if(firstSelection === ""){
        firstClick($(this))
      } else {
        secondClick($(this))
      }
    }
  });
});

// $(window).load(function(){})