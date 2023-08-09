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
 let pickedCards = [];

window.addEventListener('load', (event) => 
{
  let html = ''


    memoryGame.cards.forEach((pic) => 
    {
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
  document.querySelectorAll('.card').forEach((card) => 
  {
    card.addEventListener('click', () => 
    {

      if (!card.classList.contains('turned') && pickedCards.length < 2) 
      {

        // on click action card will be turned.
        card.classList.toggle('turned');

        pickedCards.push(card);
        

        if (pickedCards.length === 2) 
        {
          const [card1,card2] = pickedCards;

          if (card1 === card2)
          {
            
            setTimeout(() => {
              //card1.classList.remove('turned');
              //card2.classList.remove('turned');
              pickedCards = [];
            }, 1000);
           
          } else {
            setTimeout(() => {
              card1.classList.remove('turned');
              card2.classList.remove('turned');
              pickedCards = [];
            }, 1000);
          }
        }
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});


//if (card.card.classList.remove('turned');
      // TODO: write some code here
      // first make the card flip, hide one div, show the other -DONE
      //once flipped, store that card in the pickedCards array -Done
      //make sure you have 2 cards to checkIfPair -DONE
      //make sure to empty the div once you checkIfPair -DOne
      //make sure to turn it backif they are not pairs