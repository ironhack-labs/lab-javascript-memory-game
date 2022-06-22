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
    card.addEventListener('click', () => {
      // TODO: write some code here
      // const divFront = card.getElementsByClassName('front')
      const cardFlip = card.querySelector('.front');
      console.log(cardFlip);
      cardFlip.classList.toggle('back');
      cardFlip.classList.toggle('reverse');
      cardFlip.classList.remove('front');
      const cardFlipRemove = card.querySelector('.back');
      cardFlipRemove.classList.toggle('front');
      cardFlipRemove.classList.toggle('upside');
      cardFlipRemove.classList.remove('back');
      // card.classList.toggle('.card.turned.front', true)
      console.log(`Card clicked: ${card}`);
      // const cardFlipOne = card.querySelector('.card .reverse')
      // console.log(cardFlip)
      // cardFlipOne.classList.toggle('front')
      // cardFlipOne.classList.remove('back reverse')
      // const cardFlipRemoveOne = card.querySelector('.card .upside')
      // cardFlipRemoveOne.classList.toggle('back')
      // cardFlipRemoveOne.classList.remove('front upside')
      // card.classList.toggle('.card.turned.front', true)
      // console.log(`Card clicked: ${card}`);
    });
  });
});
