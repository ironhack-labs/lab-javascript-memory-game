var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  var clickable = true;
  // Bind the click event of each element to a function
  memoryGame.shuffleCards()
  $('.card').click(function () {
    if (clickable) {
      
      memoryGame.pickedCards.push($(this))//.attr("data-card-name"))

      console.log(memoryGame.pickedCards[0].attr("data-card-name"))

      $(this).find("div").toggleClass("front").toggleClass("back")

      if (memoryGame.pickedCards.length === 2) {
        

        var firstCard = memoryGame.pickedCards[0].attr("data-card-name")
        var secondCard = memoryGame.pickedCards[1].attr("data-card-name")

        console.log(memoryGame.checkIfPair(firstCard, secondCard))

        if (memoryGame.checkIfPair(firstCard, secondCard)) {
          memoryGame.pickedCards = []
          memoryGame.pairsGuessed += 1;
          $("#pairs_guessed").html(memoryGame.pairsGuessed)
          console.log(memoryGame.pairsGuessed + " pairs guessed")
        } else {
          clickable = false;
          memoryGame.pickedCards
          setTimeout(function () {
            $(memoryGame.pickedCards[0]).find("div").toggleClass("front").toggleClass("back")
            $(memoryGame.pickedCards[1]).find("div").toggleClass("front").toggleClass("back")
            memoryGame.pickedCards = []
            clickable = true;
          }, 300)
        }
        memoryGame.pairsClicked +=1;
        $("#pairs_clicked").html(memoryGame.pairsClicked)
        console.log(memoryGame.pairsClicked + " pairs clicked")

        // if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pairsCards[1])){

        //   console.log("true")
        //   memoryGame.pickedCards = []
        // }else{
        //   console.log("false")
        // }
       
      }

    }


  });
});


