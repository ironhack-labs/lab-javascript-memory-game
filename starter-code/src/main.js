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

  class MemoryGame {
    constructor(cards) {
      this.cards = cards;
      this.pickedCards = [];
      this.pairsClicked = 0;
      this.pairsGuessed = 0;
    }
    
    shuffleCards() {
      let newCards = [];
      for(let i = 0; i < this.cards.length; i++) {
        let randomIndex = Math.floor(Math.random() * (this.cards.length - i));
        newCards.push(this.cards[])

      }
    } 

    checkIfPair(firstCard, secondCard) {
      this.pairsClicked ++;
      $("#pairs_clicked").text(`${memoryGame.pairsClicked}`);
      if (firstCard === secondCard) {
        this.pairsGuessed++;
        memoryGame.isFinished()
        $("#pairs_guessed").text(`${memoryGame.pairsGuessed}`);
        return true
      } 
      this.pickedCards = [];
      return false
    }

    isFinished() {
      if(this.pairsGuessed === 12) {
        setTimeout(() => {
          alert("YAY, YOU WON!")
          return true
        }, 300) 
      }
    }
  };
  
  let memoryGame = new MemoryGame(cards);

  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  // $("#pairs_clicked").text(`${pairsClicked}`)
  // $("#pairs_guessed").text(`${pairsGuessed}`)
  // Bind the click event of each element to a function
  $('.back').click(function () {
    $(this).toggle()
    $(this).toggleClass("picked");
    $(this).siblings(".front").toggleClass("shown");
    memoryGame.pickedCards.push($(this).attr("name"));
    if (memoryGame.pickedCards.length === 2) {
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
        $(".picked").toggleClass("picked");
        memoryGame.pickedCards = [];
        return
      };
      setTimeout(() => {$(".picked").toggle();
      $(".picked").siblings(".front").toggleClass("shown");
      $(".picked").toggleClass("picked");
      memoryGame.pickedCards = [];}, 600)
    }

    // $(this)
      
    // TODO: write some code here
  });
  // $('.front').click(function () {
  //   $(this).toggleClass("shown");
  //   $(this).siblings(".back").toggle();
  // });


});


// $(`.back[name*="${memoryGame.pickedCards[0]}"]`).toggle();