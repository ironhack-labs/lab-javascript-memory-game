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
var memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '<div class="back" name="'+ pic.img +'"></div>';
    html += '<div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function(e) {
      console.log($(e.target))
      memoryGame.pickedCards.push($(e.target))
      // $(e.target).siblings().toggleClass("front back")
      // $(e.target).toggleClass("front back")
      $(e.target).parent().children().toggleClass("front back")
      var cardName1 = $(memoryGame.pickedCards[0]).attr("name")
      var cardName2 = $(memoryGame.pickedCards[1]).attr("name")
      if (memoryGame.pickedCards.length === 2){
        memoryGame.success = memoryGame.checkIfPair(cardName1,cardName2)
        $("#score p:nth-child(2)").html(`Paires Clicked: ${memoryGame.pairsClicked}`)
        if (memoryGame.success == false){
          setTimeout(function(){
          $(memoryGame.pickedCards[0]).parent().children().toggleClass("front back")
          $(memoryGame.pickedCards[1]).parent().children().toggleClass("front back")
          memoryGame.pickedCards=[]
          memoryGame.success = true
          }, 1000)
        } else {
            $("#score p:nth-child(3)").html(`Paires Guessed: ${memoryGame.pairsGuessed}`)
            memoryGame.pickedCards=[]
        }
      }
      if (memoryGame.pairsGuessed === 12){
        $("#memory_board div").children().toggleClass("front back")
        memoryGame = new MemoryGame(cards);
        memoryGame.cards = memoryGame.shuffleCards(memoryGame.cards)

      } 
    }
    
  }) 
 
  
});


