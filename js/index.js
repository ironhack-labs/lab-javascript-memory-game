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

memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);

        let boundFunc = starting.bind(card);
    });
  });
});

      const showScore = () =>{
        document.querySelector('#pairs-clicked').textContent = 
            memoryGame.pairsClicked;
        document.querySelector('#pairs-guessed').textContent = 
            memoryGame.pairsGuessed;
      };

      const deleteCounters = () =>{
        memoryGame.pickedCards = [];
      };

      const fixingCards = () =>{
        const fixedCards = document.querySelectorAll('.checking');

        fixedCards.forEach((card) => {
          card.classList.replace('.checking', 'fixed');
        });
        deleteCounters();
      }

      const checkPair = () =>{
        let checked = memoryGame.checkPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        );

        if(checked){
          fixingCards();
          memoryGame.checkIfFinished() ? winner () : '';
         }else{
           deleteCounters();
           turningCardsDown();
         }

         showScore();
      };

      const turningCardsDown = () =>{
        const allNonFix = document.querySelector('.checking');

        allNonFix.forEach((card) =>
          setTimeout(()=>{
          card.classList,remove('turned', 'checking');
      }, 1000);
      });
    };
  
    

      const turningCard = (wichOne) =>{
        wichOne.classList.toggle('turned');
        wichOne.classList.add('checking');
      };

      function starting(){
        turningCard(this);

        if(memoryGame.pickedCards.lenght <= 2) {
          memoryGame.pickedCards.push(this.getAttribute('data-card-name'));
        }
        if(memoryGame.pickedCards.lenght === 2){
          checkPair();
        }
      }

      const winner = () =>{
        document.querySelector(
          '#memory-board'
        ).innerHTML = '<img src="./img/winner.png" alt="winner cup" />';

        document.querySelector('#memory-board').style.height = '500px';
        document.querySelector('#memory-board img').style.height = '100%';
        document.querySelector('#memory-board img').style.height = '500px';
      }
