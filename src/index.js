
//------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------

for(let items of cards){
  items.closed = 'true'
}

//--------------------------------------------------------------------------------------------------

const memoryGame = new MemoryGame(cards);

//--------------------------------------------------------------------------------------------------

memoryGame.shuffleCards()

//--------------------------------------------------------------------------------------------------

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(./img/${pic.img}) no-repeat"></div>
      </div>
    `;

  });

//-------------------------------------------------------------------------------------------------------

  document.querySelector('#memory-board').innerHTML = html;

//-------------------------------------------------------------------------------------------------------

let pickedCardsArray = []

//-------------------------------------------------------------------------------------------------------

// Bind the click event of each element to a function

function renderEverything(card){

  createArrOfPickedCards(card)
  memoryGame.checkIfPair(pickedCardsArray[0],pickedCardsArray[1])
  continuePickingCards (card)
  uploadScore()
  memoryGame.checkIfFinished()

}

console.log(memoryGame.pairsClicked);
//-------------------------------------------------------------------------------------------------------
   
  function openCard(card){
    let cardDiv = card.children
    for(let item of cards){
      if (item.closed && item.name === card.dataset.cardName && 
        cardDiv[1].style.backfaceVisibility !== 'visible'){

        cardDiv[0].setAttribute('style','background:transparent')
        cardDiv[1].style.backfaceVisibility = 'visible'
        item.closed=false
        return card.dataset.cardName

      }
      else if (item.name === card.dataset.cardName && 
        cardDiv[1].style.backfaceVisibility === 'visible'){

        return undefined 

      }
    }
  }

//-------------------------------------------------------------------------------------------------------

  function closeCard(cardString){
    let cardList = [...document.querySelectorAll('.card')]
   
    
    
    for (let element of cardList){
      let elementChild = element.children
     
      for (let item of cards){
      
      
        if(!item.closed && element.dataset.cardName===cardString && 
          item.name === cardString &&
          elementChild[1].style.backfaceVisibility==='visible' ){

            setTimeout(function () {
              elementChild[0].removeAttribute('style')
              elementChild[1].style.backfaceVisibility = 'hidden'
            },1500)
          
          item.closed=true
        }
      }
    } 
  }

//-------------------------------------------------------------------------------------------------------
  
  function createArrOfPickedCards (card) {
    
    let cardFlipped = openCard(card)
    if(cardFlipped!==undefined && pickedCardsArray.length<2){

      pickedCardsArray.push(cardFlipped)
      return pickedCardsArray

    }
    else if (cardFlipped!==undefined && pickedCardsArray.length>=2){

      let cardDiv = card.children
      cardDiv[0].removeAttribute('style')
      cardDiv[1].style.backfaceVisibility= 'hidden'
      
    }
      
  }
  
//-------------------------------------------------------------------------------------------------------

  function continuePickingCards (card) {
    
    let cardDiv = card.children
    
      if(pickedCardsArray.length<2){
        cardDiv[0].setAttribute('style','background:transparent')
        cardDiv[1].style.backfaceVisibility = 'visible'
        
      }
      else if (pickedCardsArray.length===2){
        if (memoryGame.checkIfPair(pickedCardsArray[0],pickedCardsArray[1])){
          pickedCardsArray=[]
        }
        
        else if(!memoryGame.checkIfPair(pickedCardsArray[0],pickedCardsArray[1])){
          closeCard(pickedCardsArray[0])
          closeCard(pickedCardsArray[1])
          setTimeout(function(){

            pickedCardsArray =[]
  
            },1500)
  
        }      
      }
      if(!memoryGame.checkIfPair(pickedCardsArray[0],pickedCardsArray[1])&&pickedCardsArray.length===2){
          
        }
  }

//-------------------------------------------------------------------------------------------------------
    
function uploadScore(){
  let pairsClicked=document.getElementById('pairs-clicked')
if (pickedCardsArray.length===2){
  pairsClicked.innerText = parseFloat(pairsClicked.innerText)+1
}
  let pairsGuessed=document.getElementById('pairs-guessed')
  if (memoryGame.checkIfPair(pickedCardsArray[0],pickedCardsArray[1])){
    pairsGuessed.innerText = parseFloat(pairsGuessed.innerText)+1
  }

}
  
//-------------------------------------------------------------------------------------------------------

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
        
      // TODO: write some code here

          renderEverything(card)   

      });
      
    })
  
})

