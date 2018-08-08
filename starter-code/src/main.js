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
  let newGame = () => memoryGame.shuffleCard(cards);
  newGame()
  var myHTML = '';
  memoryGame.cards.forEach(function (pic, index) {
    myHTML += `
      <div class= "card" id="card_${pic.name}">
        <div class="back"    name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = myHTML;
  // Bind the click event of each element to a function
  let loading = false;
  
  $('.back').on('click', function () {
    if (memoryGame.finished()) {
      newGame()
    }
    if (!loading) {
      toggleCard($(this))
      addCard($(this))
    } 
  });
 
  let toggleCard = (card) => {
    card.toggleClass('front').toggleClass('back')
    card.next().toggleClass('front').toggleClass('back')
  }

  let addCard = (card) => {
    if (memoryGame.pickedCards.length < 1) {
      memoryGame.pickedCards.push(card)
    } else {
      memoryGame.pickedCards.push(card)
      checkResult();
    }
  }

  let checkResult = () => {
    const result = memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('name'), memoryGame.pickedCards[1].attr('name'));
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    if (result) {
      $('#pairs_guessed').text(memoryGame.pairsGuessed);
      reset()
    } else {
      loading = true;
      setTimeout(function() {
        toggleCard(memoryGame.pickedCards[0])
        toggleCard(memoryGame.pickedCards[1])
        reset()
      }, 500)
    }
  }

  let reset = () => {
    memoryGame.pickedCards = [];
    loading = false;
  }

});




