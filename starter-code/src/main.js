let cards = [
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
  let memoryGame = new MemoryGame(cards);
  // console.log(memoryGame.cards)
  memoryGame.shuffleCards();
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
  $('.back').on('click', function (card) {
    card.stopPropagation();
    console.log(memoryGame.pairsClicked)
    $('#pairs_clicked').text(memoryGame.pairsClicked)
    $('#pairs_guessed').text(memoryGame.pairsGuessed);
    memoryGame.pickedCards.push(card.currentTarget)
    if(memoryGame.pairsClicked < 2){
      card.currentTarget.setAttribute("class", "front")
      card.currentTarget.nextElementSibling.setAttribute("class", "back blocked")
      memoryGame.pairsClicked += 1;
    } else if(memoryGame.pairsClicked === 2){
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0].attributes[1].nodeValue,memoryGame.pickedCards[1].attributes[1].nodeValue)){

          memoryGame.pickedCards[0].setAttribute("class", "front blocked")
          memoryGame.pickedCards[0].nextElementSibling.setAttribute("class", "back blocked")
          memoryGame.pickedCards[1].setAttribute("class", "front blocked")
          memoryGame.pickedCards[1].nextElementSibling.setAttribute("class", "back blocked")
          memoryGame.pairsGuessed += 1;
          memoryGame.pairsClicked = 0
          memoryGame.pickedCards = [];
          memoryGame.isFinished();

        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].setAttribute("class", "back")
            memoryGame.pickedCards[0].nextElementSibling.setAttribute("class", "front")
            memoryGame.pickedCards[1].setAttribute("class", "back")
            memoryGame.pickedCards[1].nextElementSibling.setAttribute("class", "front")
            memoryGame.pairsClicked = 0;
            memoryGame.pickedCards = [];
          },1000);
        }
    } else if(memoryGame.isFinished()){
        console.log("End!")
    }
  });
});


