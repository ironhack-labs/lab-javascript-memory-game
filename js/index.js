const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // vérifier que ma carte n'est pas retournée
      if (!card.classList.contains("turned")) {
        // retourner carte
        card.classList.add("turned");
        // mémoriser dans array
        memoryGame.pickedCards.push(card);
        // regarder cmb de cartes j'ai dans l'array.
        // si moins de 2 cartes ds l'array, j'ai fini
        if (memoryGame.pickedCards.length === 2) {
          // si 2 cartes dans l'array, appeler checkIfPair(arr[0], arr[1])s
          // si carte 1 = carte 2 aka checkifpair = true
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].attributes[1].nodeValue, memoryGame.pickedCards[1].attributes[1].nodeValue)) {
            // pickedCards = []
            memoryGame.pickedCards = [];
          } else {
            // si check = false
            // alors je retourne les 2 cartes - en cours et précédente
            // card.classList.remove("turned");
            setTimeout(function(){  }, 3000);
            memoryGame.pickedCards[0].classList.remove("turned");
            memoryGame.pickedCards[1].classList.remove("turned");
            // pickedCards = []
            memoryGame.pickedCards = [];
            }
          }
        }
               // appeler isfinished 
            if (memoryGame.isFinished()) {
              alert("You won! :D");
            }
      console.log(`Card clicked: ${card}`);  
    });
  });
});