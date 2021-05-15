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
      memoryGame.shuffleCards();


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
          card.classList.add('turned');

          const cardName = card.getAttribute('data-card-name');
          memoryGame.pickedCards.push(cardName);

          if(memoryGame.pickedCards.length === 2) {
              const cards1 = memoryGame.pickedCards[0];
              const cards2 = memoryGame.pickedCards[1];

              memoryGame.checkIfPair(card1,card2);

              document.getElementById('#pairs-clicked').innerText = memoryGame.pairsClicked;
              document.getElementById('#pairs-guessed').innerText = memoryGame.pairsClicked;

              memoryGame.pickedCards = [];

              if (memoryGame.isFinished){
                  console.log(`You won!!`)
              }
          }
        
        // TODO: write some code here
        //console.log(`Card clicked: ${card}`);
      });
    });
  });
  