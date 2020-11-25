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
    
      card.children[0].classList.toggle("front");
      card.children[0].classList.toggle("back");
      card.children[1].classList.toggle("front");
      card.children[1].classList.toggle("back");
      
      memoryGame.pickedCards.push(card);
      // console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        const cardName1 = card1.getAttribute("data-card-name");
        const cardName2 = card2.getAttribute("data-card-name");

        const compareCards = memoryGame.checkIfPair(cardName1, cardName2);

        if (!compareCards) {
            setTimeout(() => {
            card1.children[0].classList.toggle('front');
            card1.children[0].classList.toggle('back');
            card1.children[1].classList.toggle('front');
            card1.children[1].classList.toggle('back');

            card2.children[0].classList.toggle('front');
            card2.children[0].classList.toggle('back');
            card2.children[1].classList.toggle('front');
            card2.children[1].classList.toggle('back');

            }, 1000);
        }     else {
          card1.children[1].classList.add("blocked");
          card2.children[1].classList.add('blocked');
        }

        // if (compareCards === true) {
        //   card1.classList.add("blocked");
        //   card2.classList.add("blocked");
        // } else {
        //   setTimeout(function () {
        //     card1.classList.remove("turned");
        //     card2.classList.remove("turned");
        //   }, 1000);
        // }

        memoryGame.pickedCards = [];

    }

        const score1 = document.getElementById("pairs-clicked");
        score1.innerText = memoryGame.pairsClicked;
        const score2 = document.getElementById("pairs-guessed");
        score2.innerText = memoryGame.pairsGuessed;

        if (memoryGame.isFinished() === true) {
          setTimeout(function () {
            alert("We got a winner!");
            memoryGame.shuffleCards();
          }, 1500);
        } 

      });
    });
  });

 