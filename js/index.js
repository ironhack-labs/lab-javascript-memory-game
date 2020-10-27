const cards = [
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

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
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
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);

      card.classList.add("turned")
      let arrOfcards = memoryGame.pickedCards.push(card)

      if (arrOfcards === 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")
        let card1turned = document.querySelector('.card') 
          if (card1 === card2) {
            //console.log("true")
            memoryGame.pairsGuessed += 1
            document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
          } else {
            //console.log("false")
            memoryGame.pairsClicked += 1
            document.querySelector('#pairs-clickd').innerHTML = memoryGame.pairsClicked
            setInterval(() => {
              card1turned.classList.remove("turned")
              card.classList.remove("turned")
            },5000)
            arrOfcards = []
            console.log(arrOfcards)
          }

      }

    });
  });
});
//Me ha costado mucho llegar hasta aquí... 
//Supongo que se podría poner dentro de un bucle for para que hiciera el ciclo cada vez que arrOfcards sea 2. 

