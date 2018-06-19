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
  
  memoryGame.shuffleCard(cards); // Shuffle cards
  
  // Generate HTML
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  document.getElementById('memory_board').innerHTML = html; // Add all the div's to the HTML

  // Counter para comparar al llegar a 2 cartas
  var counter = 0;
  var actualCard = $("card").attr("id");

  // Bind the click event of each element to a function
  $('.back').on('click', function () {
    // Change card back and front classes on click
    $(this).toggleClass("front")
           .toggleClass("back");
    $(this).next().toggleClass("front")
                  .toggleClass("back");

    // Pushing cards to the picked 2 cards array every time you click
    memoryGame.pickedCards.push($(this).parent().attr("id"));

    // Call cheackPair when getting to 2 cards
    counter++;
    if (counter == 2) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
      } else {
        setTimeout(function(){
            $(this).toggleClass("back")
                   .toggleClass("front");
            $(this).next().toggleClass("back")
                   .toggleClass("front");
        }, 400)
      }
      memoryGame.pickedCards = [];
      $("#pairs_clicked").text(memoryGame.pairsClicked); // Writing pairs clicked

      counter = 0;  
    }

  });

});

