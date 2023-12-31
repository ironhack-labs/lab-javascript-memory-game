

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
  memoryGame.shuffleCards(cards)
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
 
  memoryGame.pairsClicked=0
  memoryGame.pairsGuessed=0
  memoryGame.pickedCards=[]
  memoryGame.turnedcard=[]
  memoryGame.puntuacion=0
  let card1= undefined
  let card2=undefined
 

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    
    card.addEventListener('click', () => {//en cada click 
    card.classList.add ("turned");//da la vuelta a la carta
     
    memoryGame.turnedcard.push(card);console.log(memoryGame.turnedcard)

    let atribDivCard=card.getAttribute(`data-card-name`)//coje la data-card -name del div y la guarda

     memoryGame.pickedCards.push(atribDivCard)//hace push a un array de Datas-cards-names
     

     card1 = memoryGame.pickedCards[0];//guara en card1 el primer data-card-name
     card2 = memoryGame.pickedCards[1];//guarda en card2 el segundo data-card-name
     
      
        

      if ( memoryGame.pickedCards.length === 2){//si el array pickedCards mide 2 
        
       
        memoryGame.checkIfPair(card1,card2)//llama a la funcion que los compara y suma uno a clicked pairs
                                           //y si son iguales tambien suma 1 a pairsGuessed
        document.getElementById("pairs-guessed").innerHTML=memoryGame.pairsGuessed//con esta linea nos enfocamos en lo que queremos cambiar del html 
        document.getElementById("pairs-clicked").innerHTML=memoryGame.pairsClicked
        document.getElementById("puntuacion").innerHTML = memoryGame.puntuacion
        memoryGame.pickedCards = []//ponemos a [] el array pickedsCards
        memoryGame.turnedcard =[]
      
       console.log(memoryGame.pairsGuessed)
      }
      memoryGame.checkIfFinished()
      if (memoryGame.checkIfFinished()=== true){
       setTimeout(()=>{ 
        document.getElementById("newGame").style.display="block";
       
        console.log(memoryGame.pairsGuessed)},2000)

      
      }
      
   }); 
   
  });
 
 
});