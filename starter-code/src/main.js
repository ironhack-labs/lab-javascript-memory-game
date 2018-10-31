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

  function shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  var memoryGame = shuffle(cards)
  
  var html = '';
  memoryGame.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function

  var pickedCards = []
  var pairsGuessed = 0;
  var pairsClicked= 0;

  $(".card").on("click", function () {
    $(this).children().toggleClass("back front")
    $(this).children().addClass("turned blocked")
    $(".card").find(".change").toggleClass("front back")
    $(".card").find(".change").removeClass("change")
    pickedCards.push($(this).children().one().attr("name"))
    if (pickedCards.length == 2) {
      checkIfPair(pickedCards[0],pickedCards[1]);
      pickedCards = []
      if (paired == false) {
        $(".card").find(".turned").addClass("change")
        $(".card").find(".turned").removeClass("blocked")
      }
      $(".card").find(".turned").removeClass("turned")
      paired = false
      } 
    $("#pairs_clicked").html(pairsClicked)
    $("#pairs_guessed").html(pairsGuessed)
  }); 

  var paired = false
  function checkIfPair (firstCard, secondCard) {
    if (firstCard == secondCard) {
      paired = true
      pairsGuessed +=1;
      pairsClicked +=1;
    } else {
      pairsClicked +=1
    }
    return paired
  }
    
});


