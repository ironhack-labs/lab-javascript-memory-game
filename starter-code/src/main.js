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
  memoryGame.cards.forEach(function (card) {
    html += '<div class="card" data-card-name="'+ card.name +'">';
    html += '  <div class="back" name="'+ card.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ card.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function (e) {

    const name = e.target.parentElement.attributes['data-card-name'].value;
    
    for (let child of e.target.parentElement.children) {
      if (child.className === 'front')
        child.className = 'back';
      else child.className = 'front'
    }

    memoryGame.pickedCards.unshift(name);

    if (memoryGame.pickedCards.length % 2 === 0 && !memoryGame.checkIfPair(...memoryGame.pickedCards)) {
      setTimeout(() => {
        memoryGame.flipBack(memoryGame.pickedCards.shift());
        memoryGame.flipBack(memoryGame.pickedCards.shift());
      }, 100)
    }

    if (memoryGame.isFinished()) alert('done yo!!')

  });


});


