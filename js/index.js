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

checkStatus = () => {
  console.log(memoryGame.cards.length, memoryGame.pairsGuessed);
  if(!memoryGame.isFinished()){
    if(memoryGame.pickedCards.length === 2) {
      const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
      const card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');

      if(memoryGame.checkIfPair(card1,card2)){
        memoryGame.pickedCards.splice(0,999);
        document.querySelector('#score #pairs-guessed').innerText++;
        if(memoryGame.isFinished()) document.querySelector('#memory-board').innerHTML = '<h1>Well Done!</h1>';
      } else {
        setTimeout(()=>{
          memoryGame.pickedCards.forEach(card=>card.classList.remove('turned'));
          memoryGame.pickedCards.splice(0,999);
        },750);
      }
      document.querySelector('#score #pairs-clicked').innerText++;
      console.log(memoryGame.pickedCards.length, memoryGame.isFinished());
    }
  }
};

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
    card.addEventListener('click', (e) => {
      // TODO: write some code here
      e.currentTarget.classList.toggle('turned');

      memoryGame.pickedCards.push(e.currentTarget);
      checkStatus();
    });
  });
});
