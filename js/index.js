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
  memoryGame.shuffleCards(cards).forEach(pic => {
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
      card.classList.toggle('turned')
      if(memoryGame.pickedCards.length!=2)
        memoryGame.pickedCards.push(card.getAttribute('data-card-name'))
      if(memoryGame.pickedCards.length==2){
        memoryGame.pairsClicked+=1
        document.getElementById('pairs-clicked').textContent=memoryGame.pairsClicked
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
          document.getElementById('pairs-guessed').textContent=memoryGame.pairsGuessed
          let cards = document.querySelectorAll('.turned')
          cards.forEach(card => {
            card.classList.remove('turned')  
            card.classList.toggle('blocked')})
          memoryGame.pickedCards.pop()
          memoryGame.pickedCards.pop()
          if(memoryGame.isFinished())
            setTimeout(function(){alert('YOU WIN')},600)

        }
        else{
          let cards = document.querySelectorAll('.turned')
          setTimeout(function () {cards.forEach(card => {card.classList.toggle('turned')})},500)
          memoryGame.pickedCards.pop()
          memoryGame.pickedCards.pop()
        }
}
    });
  });
});
