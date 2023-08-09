const cards = 
[
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

window.addEventListener('load', () => 
{
  memoryGame.shuffleCards();
  
  let html = '';
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
      const pairsClickedLabel = document.querySelector("#pairs-clicked");
      const pairsGuessedLabel = document.querySelector("#pairs-guessed");
      const frontClass = card.children[0];
      const backClass = card.children[1];

      frontClass.classList.toggle("back")
      frontClass.classList.toggle("front")
      backClass.classList.toggle("back")
      backClass.classList.toggle("front")

      memoryGame.pickedCards.push(card);

      if(memoryGame.pickedCards.length >= 2)
      {
        pairsClickedLabel.textContent = memoryGame.pairsClicked + 1;
        
        let [first, second] = memoryGame.pickedCards;

        let check = memoryGame.checkIfPair(first.dataset.cardName, second.dataset.cardName);

        if(check)
        {
          pairsGuessedLabel.textContent = memoryGame.pairsGuessed;
          first.style.pointerEvents = "none";
          second.style.pointerEvents = "none";
        }

        if(!check)
        {
          setTimeout(() => {
            first.children[0].classList.toggle("back");
            first.children[0].classList.toggle("front");
            first.children[1].classList.toggle("back");
            first.children[1].classList.toggle("front");
  
            second.children[0].classList.toggle("back");
            second.children[0].classList.toggle("front");
            second.children[1].classList.toggle("back");
            second.children[1].classList.toggle("front");
          }, 500);
        }

        if(memoryGame.checkIfFinished())
        {
          const title = document.querySelector("h1");
          const body = document.querySelector("body");
          const btnPlayAgain = document.querySelector(".btn-again");

          btnPlayAgain.style.display = "block";

          title.textContent = "🎉🎊YOU WON!👏🥳";
          title.style.color = "black";

          body.style.background = "none"
          body.style.backgroundColor = "green";
        }
        
        memoryGame.pickedCards = []
      }
    });
  });
});