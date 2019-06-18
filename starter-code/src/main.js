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

let lastCard = {
  element: null,
  nameValue: null
}

let pairsGuessed = 0;
let counter = 0;
let pairsClicked = 0;

function initializeGame() {
  var html = '';
  // const newCards = shuffle(cards);

  cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  $('.back').click(function() {
    if(counter === 2) return
    counter++

    $(this).addClass("block-card");

    const newCard = {}
    newCard.element = $(this);
    newCard.nameValue = newCard.element[0].attributes.name.value;
    $(this).css("background-image", `url(img/${newCard.nameValue})`);
    
    if(lastCard.nameValue) {
      checkCards(lastCard, newCard)
    } else {
      lastCard.element = newCard.element;
      lastCard.nameValue = newCard.nameValue;
    }
  });
}

function checkCards(card1, card2) {
  if(card1.nameValue === card2.nameValue) {
    pairsGuessed++
    pairsClicked ++;
    $('#pairs_guessed').text(pairsGuessed);
    card1.element.off();
    card2.element.off();
    lastCard = {};
    counter = 0;
  } else {
    lastCard = {};
    pairsClicked ++;
    setTimeout(() => {
      card1.element.css("background", "#456783");
      card1.element.removeClass("block-card");

      card2.element.css("background", "#456783");
      card2.element.removeClass("block-card");

      counter = 0;
    }, 2000)
  }

  $('#pairs_clicked').text(pairsClicked);

  if(pairsGuessed === 12) {
    setTimeout(() => {
      alert("You WOOON !")
      initializeGame();
      pairsClicked = 0;
      pairsGuessed = 0;
      $('#pairs_guessed').text(0);
      $('#pairs_clicked').text(0);
    }, 1000)
  }
}

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}

initializeGame()
