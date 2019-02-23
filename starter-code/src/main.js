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

  // shuffle cards 
  memoryGame.shuffleCards(memoryGame.cards);

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    //console.log($(this).siblings());
    //console.log(this)
    $(this).attr('class', "front")
    $(this).next().attr("class", 'back')

    // var pickedCard = $(this).parent(".card") -> another way of doing the same thing
    // memoryGame.pickedCards.push
    var pickedCard = $(this).parent(".card")
    
    memoryGame.pickedCards.push(pickedCard);
  
    if (memoryGame.pickedCards.length === 2) {

      var firstCard = memoryGame.pickedCards[0].attr("data-card-name");
      var secondCard = memoryGame.pickedCards[1].attr("data-card-name");

      // console.log(firstCard)
      // console.log(secondCard) -> log test will only work if you console log the second card. because of the logic we defined above

      memoryGame.checkIfPair(firstCard, secondCard)

      memoryGame.isFinished(); // after cheking if they are the same also checked if the game is Finished. 

    } else {
      setTimeout(function goBack() {

        $(this).toggleClass("front back");
        $(this).siblings().toggleClass("front back");

      }, 1000);
    }



  });



});


// refering back to line 46: --> another way of doing it
//  $('.card').click(function () {
   
    // $(this).children().toggleClass('front', "back");
    // var pickedCard = $(this);



