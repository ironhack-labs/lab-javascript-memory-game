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
memoryGame.shuffleCards() // Hace el shuffle card
window.addEventListener('load', event => {
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
  document.querySelectorAll('.card').forEach(card => { //itera el array
    card.addEventListener('click', () => {            // hace el click en las cartas   
      if (memoryGame.pickedCards.length < 2){        // Chequea que solo se puedan voltear 2 cartas a la vez 
        memoryGame.pickedCards.push(card)           // las pone en el array de pickedCards
        card.classList.toggle('turned')             // Le asigna la clase de turned para que se puedan voltear   
      }
      if (memoryGame.pickedCards.length === 2){     // Chequea que si las dos cartas son iguales 
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'),memoryGame.pickedCards[1].getAttribute('data-card-name'))){      // Si la carta 1 y la carta 2 son iguales...
          memoryGame.pickedCards.forEach(card => card.classList.toggle('blocked'))        // ...le añade clase block para dejarlas volteadas hacia arriba
          memoryGame.pickedCards.splice(0, 2)                                            // vacia el array cuando sabe que son parejas                                                              
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed   // refresca el contador de Pairs guessed cada par igual que se adivine 
          if (memoryGame.isFinished()) alert("You Won!!!")                               // Sale alerta cuando consigues todos los pares iguales  
        }
        else {                                                                                             // si las cartas no son iguales 
          setTimeout(() => memoryGame.pickedCards.forEach(card => card.classList.toggle('turned')), 1200)  // itera el array
          setTimeout(() => memoryGame.pickedCards.splice(0, 2), 1200)                                      // vacia el array cuando no hay ninguna pareja valida   
        }                                                                                               // añadi el timeout para que al voltear las cartas hacia arriba y se desvoltearan fuera un poco mas lento
        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked                      // refresca el contador de pairsclicked cada par que se eliga sea correcto o no 
      }
    })
  })
})

