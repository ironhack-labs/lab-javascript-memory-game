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

  console.log(memoryGame)//sugerencia del profe Kain para ver que pasaba con shuffleCards

memoryGame.shuffleCards();

console.log(memoryGame) //sugerencia del profe Kain para ver que pasaba con shuffleCards

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

      card.className = ('card turned'); // porque no podría ser .card.turned?
      
      memoryGame.pickedCards.unshift(card);

//console.log(memoryGame.pickedCards) nota que le metes el div entero
 //let checkingPair = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
// checkingPair me para dando falso.
//Attributes can be set and read by the camelCase name/key as an object property of the dataset: element.dataset.keyname
//memoryGame.pickedCards[0].dataset.cardName me da el nombre de la carta

if(memoryGame.pickedCards.length % 2 == 0)

{
  
  let pickedPair = memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName,memoryGame.pickedCards[1].dataset.cardName);

  if(pickedPair === false){
    setTimeout(() => {
  
      memoryGame.pickedCards[0].className  = 'card';
      memoryGame.pickedCards[1].className = 'card';
    
    }, "1000")
} 

document.getElementById('pairs-clicked').innerHTML = `${memoryGame.pairsClicked}`;
document.getElementById('pairs-guessed').innerHTML = `${memoryGame.pairsGuessed}`;
console.log(memoryGame.pairsGuessed)
}
let isFinished = memoryGame.checkIfFinished()
console.log(isFinished)

if(isFinished){

 

  setTimeout(() => {
  
    document.querySelectorAll('.card').forEach((card) => {
      card.className = ('card')
    })
  
  }, "1000")

  document.getElementById('pairs-clicked').innerHTML = `${memoryGame.pairsClicked}`
document.getElementById('pairs-guessed').innerText = `${memoryGame.pairsClicked}`
}




    });
  });
});

