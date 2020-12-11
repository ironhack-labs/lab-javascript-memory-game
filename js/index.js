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

//I shuffle cards before the game begins
memoryGame.shuffleCards();

//Add the cards html content
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

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

      // Add the class turned on click
      card.classList.add('turned');

      //Add one card to the pickedCards array
      memoryGame.pickedCards.push(card)
    
      //Logic starts if there are 2 cards on the pickedCards array
        if(memoryGame.pickedCards.length===2){
          const firstCard= memoryGame.pickedCards[0]
          const secondCard= memoryGame.pickedCards[1]

          //Get card name propertie to access the method checkIfPair
          const firstCardName= memoryGame.pickedCards[0].getAttribute('data-card-name');
          const secondCardName= memoryGame.pickedCards[1].getAttribute('data-card-name');
          //Call method in a variable to make the code easy to read
          const equalCards= memoryGame.checkIfPair(firstCardName,secondCardName);

          //If the cards are not equal, they'll be turned back after one sec
          if(!equalCards){
            setTimeout(()=> {
              firstCard.classList.remove('turned')
              secondCard.classList.remove('turned')
          },1000)
          }else{
            firstCard.classList.add('blocked')
            firstCard.classList.add('blocked')
          }

          //I clean pickedArray to start over with two different cards on next iteration
          memoryGame.pickedCards=[];
        }
      
      //Access and display counter numbers on html
      const clickedCounter= document.getElementById('pairs-clicked');
      const guessedCounter= document.getElementById('pairs-guessed');

      clickedCounter.innerHTML=memoryGame.pairsClicked;
      guessedCounter.innerHTML=memoryGame.pairsGuessed;

        //Give an alert if you won the game
        if(memoryGame.isFinished()){
          setTimeout(()=>{
            alert('Congrats, you won the game')
          },1000)
        }
      
    });
  });
});
