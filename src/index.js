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



window.addEventListener('load', (event) => {
  // Inicializa o jogo de memória
  const memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();  // Embaralha as cartas
  let html = '';
  
  // Gera o HTML para as cartas
  memoryGame.cards.forEach((pic) => {
    html += ` 
      <div class="card" data-card-name="${pic.name}">
        <div class="back"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Adiciona todas as cartas ao HTML
  document.querySelector('#memory-board').innerHTML = html;

  let firstCard = null;
  let secondCard = null;
  
  // Manipulador de eventos para clique em cartas
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('turned') || (firstCard && secondCard)) {
        return;
      }
      
      card.classList.add('turned');
      
      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        // Cria objetos para verificar o par
        const card1Name = firstCard.getAttribute('data-card-name');
        const card2Name = secondCard.getAttribute('data-card-name');
        
        const isPair = memoryGame.checkIfPair(card1Name, card2Name);
        
        setTimeout(() => {
          if (isPair) {
            firstCard.classList.add('blocked');
            secondCard.classList.add('blocked');
          } else {
            firstCard.classList.remove('turned');
            secondCard.classList.remove('turned');
          }
          
          firstCard = null;
          secondCard = null;
          
          // Verifica se o jogo terminou
          if (memoryGame.checkIfFinished()) {
            alert('You won!!!');
          }
        }, 1000);
      }
    });
  });
});