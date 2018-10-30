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
  // memoryGame.shuffleCards(memoryGame.cards)
  memoryGame.cards.forEach(function (pic) {
    // console.log(pic)
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(../img/' + pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {

    console.log(memoryGame)

    if(memoryGame.pair.length == 2){
      if(memoryGame.thisPick == false){
        $(".picked1").toggleClass("front back picked1")
      $(".picked2").toggleClass("back front picked2")
      }else{
        $(".picked1").toggleClass("picked1")
      $(".picked2").toggleClass("picked2")
      }
      memoryGame.pair = []
      // console.log("toggled")
    }

    $(this).toggleClass("back front picked1")
    $(this).next().toggleClass("front back picked2")


    let currentCard = memoryGame.cards.find(x => {return x.img == this.attributes["name"].value })

    if(memoryGame.pair.length == 0){
      memoryGame.pair.push(currentCard.name)
    }else if(memoryGame.pair.length == 1){
      memoryGame.pair.push(currentCard.name)
      memoryGame.checkIfPair()
    }
    if(memoryGame.pickedCards.length == 24){
      alert("you won :)")
    }
  });
});


