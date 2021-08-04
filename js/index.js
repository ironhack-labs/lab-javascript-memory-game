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
  // memoryGame.shuffleCards();
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
  let cont=0;
  const arrayPair =[];
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card, index, arrayCards) => {
    
    card.addEventListener('click', () => {
      
      memoryGame.pickedCards[cont] = card; 
      arrayPair[cont]= (memoryGame.cards[index]);
      cont += 1;

      card.className = "card turned front";
      console.log(arrayPair);

      if(cont == 2){
        memoryGame.checkIfPair(arrayPair[0].name, arrayPair[1].name);

        if(arrayPair[0].name != arrayPair[1].name){
          setTimeout(function(){
            memoryGame.pickedCards[0].className = "card";          
            memoryGame.pickedCards[1].className = "card"; 
            console.log(memoryGame.pickedCards);
          }, 1000);;
        }
        
        cont = 0;
       
      }
      
      document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked ;
      document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed;
      // console.log(`Card clicked: ${card}`);

      if(memoryGame.checkIfFinished()){
        setTimeout(()=>{
        document.querySelectorAll('.card').forEach((card)=>card.className="card");
        memoryGame.shuffleCards();
      }, 2000);
      }

    });
    
  });
});
