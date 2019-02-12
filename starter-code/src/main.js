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
  var memoryGame = new MemoryGame(cards)
  memoryGame.shuffleCards()
  var html = ''
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);


  var clicked = document.querySelector("#pairs_clicked")
  var guessed = document.querySelector("#pairs_guessed")
  

  // Bind the click event of each element to a function
  $('.back').on("click",function (e) {
    memoryGame.pickedCards.push(e.currentTarget)
    $(e.currentTarget).toggleClass("back front")
    $(e.currentTarget).next().toggleClass("back front")
    if ((memoryGame.pickedCards.length%2)===0){
      if(memoryGame.checkIfPair($(memoryGame.pickedCards[memoryGame.pickedCards.length-2].parentNode).attr("data-card-name"),$(memoryGame.pickedCards[memoryGame.pickedCards.length-1].parentNode).attr("data-card-name"))){
        memoryGame.pickedCards[memoryGame.pickedCards.length-2].className="front.blocked"
        memoryGame.pickedCards[memoryGame.pickedCards.length-1].className="front.blocked"
        guessed.innerText = memoryGame.pairsGuessed
        if(memoryGame.isFinished()){alert("you win!!!!!")}
      } else {
        clicked.innerText = memoryGame.pairsClicked
        setTimeout(function(){
          $(memoryGame.pickedCards[memoryGame.pickedCards.length-2]).toggleClass("back front")
          $(memoryGame.pickedCards[memoryGame.pickedCards.length-2]).next().toggleClass("back front")
          $(memoryGame.pickedCards[memoryGame.pickedCards.length-1]).toggleClass("back front")
          $(memoryGame.pickedCards[memoryGame.pickedCards.length-1]).next().toggleClass("back front")
        },500)
      }
    }

  });
});
