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
let cardsArray = [];

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards(cards);
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
      let index = card.innerHTML.indexOf('.jpg');
      let cardName = card.innerHTML.substring(24,index);
      memoryGame.pickedCards.push(cardName);
      card.className='card turned';

      cardsArray.push(card)


      if (memoryGame.pickedCards.length==2){
        var check = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
        console.log('entrou')
        memoryGame.pickedCards.pop();
        memoryGame.pickedCards.pop();
        setTimeout(()=>{
          if (check==false){
            cardsArray[0].className='card';
            cardsArray[1].className='card';
            cardsArray.pop();
            cardsArray.pop();
          } else{
            cardsArray[0].className='card turned'
            cardsArray[1].className='card turned'
            cardsArray.pop();
            cardsArray.pop();
          }
        },600)
      } else {
        setTimeout(()=>{
          card.className='card';
        },600)
      }

      
      
      document.getElementById('pairs-clicked').innerText=memoryGame.pairsClicked;
      document.getElementById('pairs-guessed').innerText=memoryGame.pairsGuessed;
      


      

    });
  });
});
