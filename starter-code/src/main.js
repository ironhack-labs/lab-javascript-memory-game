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

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function


// Mikael's technique

  $('.back').on('click', function(){
    // isolate the back class and temporarily hide
    $(this).hide();
    // add the 'back' class to the front div to make visible
    $(this).parent().find('.front').addClass('back');
    // hold the first card picked as a reference for the next card to compare
    if (memoryGame.pickedCards.length === 0) {
      memoryGame.pickedCards.push($(this).attr('name'))
    } else {
      // if one card has already been picked, compare
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], $(this).attr('name'))){
        // reset array, to restart process
        memoryGame.pickedCards = [];
        memoryGame.finished();
      } else {
        // repeat the reverse of what happened before!
        // The set timeout will leave cards visible a moment
        setTimeout(() => {
          // to reput the back div of the 2nd clicked card
          $(this).show()
          $(this).parent().find('.front').removeClass('back');

          // to reput the back div of the 1st clicked card (stored in the array)
          $(`[name="${memoryGame.pickedCards[0]}"]`).show();
          $(`[name="${memoryGame.pickedCards[0]}"]`).parent().find('.front').removeClass('back');

          // reset pickedCards array to begin again
          memoryGame.pickedCards = [];
          }, 1000)
      };
  };
});


    // Shanshan's method!
    // var attrName = $(this).attr("name");
    // $(this).css("background", "url(img/"+attrName+")")

$('*').click(function(){
  $('#pairs_clicked').text(memoryGame.pairsClicked);
  $('#pairs_guessed').text(memoryGame.pairsGuessed);
});


});


