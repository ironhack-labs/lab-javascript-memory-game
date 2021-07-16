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
    card.addEventListener('click', (e) => {

      console.log(card)
      if (!card.classList.contains('turned') && !card.classList.contains('blocked')) {
        card.classList.toggle('turned')
        const alias = card.getAttribute("data-card-name");
        memoryGame.pickedCards.push(alias)
        if(memoryGame.pickedCards.length > 1){
          const isMatch = checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]) 
          if(isMatch){ 
            let turnedCards = document.querySelectorAll('.turned')
            turnedCards.forEach(function(element, index, cardsArr){
              turnedCards.element()
            })

            
          }
        }
      }


      // [x] if the card is not turned nor blocked --> check if they have the class turned or blocked
      // -- [x]flip (add to pickedCards + add className)
      // -- [x] if array of picked cards contains 2 elms
      //    --- [x]checkIfPair(pickedCards[0], pickedCards[1])
      //        -- [ ] if they match: add the class blocked to both + add to pairsGuessed + checkeIfFinished()
      //        -- [ ] if not, flip back both
      // clear pickedCards

      // TODO: write some code here
      //console.log(`Card clicked: ${card}`);
      //console.log(`Card clicked: ${card.getAttribute("data-card-name")}`);
    });
  });
});
