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
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;


  // Toggle
  function toggle(index, classes) {
    classes.forEach(className => {
      index.classList.toggle(className)
    });
  }


  function flip() { 
    if ( data-card-name.length > 2 ) {
      return false;
    }
  
    // do your thing [...]
  }

    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', flip => {
        // TODO: write some code here
        const clicked = document.getElementById("pairs_clicked");
        const guessed = document.getElementById("pairs_guessed");
  
        toggle(card.children[0],["back", "front"])
        toggle(card.children[1],["back", "front"])
  
        memoryGame.pickedCards.push(card)
  
        if(memoryGame.pickedCards.length === 2) {
          const firstCard = memoryGame.pickedCards[0];
          const secondCard = memoryGame.pickedCards[1];
          let card1= firstCard.getAttribute('data-card-name'); 
          let card2 = secondCard.getAttribute('data-card-name');
          console.log(card1);
          console.log(card2);



          // I was stuck here //
          //if it is a match remove the eventListener 
          if (memoryGame.checkIfPair(card1, card2)) {

            console.log(true);
            card1.removeEventListener('click', toggle);
            card2.removeEventListener('click', toggle);  

          } else {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
          }
          
          // TODO: run check pair 
          
        }
        
        
     
        console.log(`Card clicked: ${card}`);
      });
    });
  });
