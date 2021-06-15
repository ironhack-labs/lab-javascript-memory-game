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
    //......Turn card.........................
   console.log(card.className);
    if(card.className === 'card turned'){
      card.classList.remove('turned');
    }else{
      card.classList.add('turned');
    }

   //card.classList.toggle('turned');


   //......Push to pickedCards Array............
   memoryGame.pickedCards.push(card);
   //console.log(memoryGame.pickedCards);


   //.....Check if pairs and add inside HTML......
   if(memoryGame.pickedCards.length === 2){
    let card1 = memoryGame.pickedCards[0];
    let newCard1 = card1.getAttribute('data-card-name');
    console.log(newCard1);
    let card2 = memoryGame.pickedCards[1];
    let newCard2 = card2.getAttribute('data-card-name');
     
    let result = memoryGame.checkIfPair(newCard1,newCard2);
    //console.log(memoryGame.pairsClicked);

   
   if(result){
     card1.classList.add('Blocked');
     card2.classList.add('Blocked');
   }else{
     setTimeout(()=>{
     card1.classList.remove('turned');
     card2.classList.remove('turned');
     },2000);
     
   }
   memoryGame.pickedCards = [];

    document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
    document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;
   }
   

      console.log(`Card clicked: ${card}`);
    });
  });
});
