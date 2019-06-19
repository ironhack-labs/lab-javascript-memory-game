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
memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  $('.back').each(function(index, card) {
    $(card).on("click", function guess () {
      let oneCard = $(this).parent('.card')

      oneCard.children('.back, .front').toggleClass('back front');
      let name = oneCard.attr("data-card-name");
      let pair = memoryGame.pickedCards
      pair.push(name);
      if (pair.length === 2) {
        $(".back").addClass("blocked");
        if(memoryGame.checkIfPair(pair[0], pair[1]) === false) {
          // Save the values to new variables, since they'll get spliced later
          let guess1 = pair[0];
          let guess2 = pair[1];
          let checkedPair = $(`[data-card-name="${guess1}"], [data-card-name="${guess2}"]`);
          oneCard.addClass("wrong-shake");
          setTimeout(function(){ 
            //The two guesses are selected here!
            checkedPair.children('.back[style], .front[name]').toggleClass('back front');
            oneCard.removeClass("wrong-shake");
            $(".back").removeClass("blocked");
           }, 1000);
        }
        else {
          $(".back").removeClass("blocked");
        }

        pair.splice(0, 2);
        $('#pairs_clicked').text(memoryGame.pairsClicked);
        $('#pairs_guessed').text(memoryGame.pairsGuessed);
        memoryGame.isFinished();
      }
      console.log(`Array: ${pair}`);
      console.log(memoryGame.pairsClicked);
      
    })
  });
});


