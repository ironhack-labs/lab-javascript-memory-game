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
  let card1= "";
  let card2= "";
  
  memoryGame.shuffleCards()



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


  // toggled 
 //Quando apenas um argumento está presente: Toggle class value; Ou seja, se a classe existir, em seguida, removê-lo e retornar false, se não, então adicioná-lo e retornar true.
//Quando um segundo argumento está presente: Se o segundo argumento é avaliado como true, adicione o valor especificado da classe e, se ele for avaliado como false, remova-o.


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {

    card.addEventListener('click', () => {
      debugger

  // See if it has the class turned. If yes, remove the clase. If no, add the class.
      card.classList.toggle('turned')
      

  // see if there is 2 cards turnned and apply the function for comparation
  
      const allCardsTurn = document.querySelectorAll('.card.turned')

      if(allCardsTurn.length===2){
        if((memoryGame.checkIfPair(allCardsTurn[0].attributes["data-card-name"].value,allCardsTurn[1].attributes["data-card-name"].value))) {
          allCardsTurn[0].classList.toggle('blocked')
          allCardsTurn[1].classList.toggle('blocked')
        } 
        setTimeout(()=>{
          allCardsTurn[0].classList.toggle('turned')
          allCardsTurn[1].classList.toggle('turned')
        }, 1000)

      }


      document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked
      document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed

      if(memoryGame.checkIfFinished()){
        alert("you won!")
      }



      console.log(`Card clicked: ${card}`);
    });

    
  });
});
