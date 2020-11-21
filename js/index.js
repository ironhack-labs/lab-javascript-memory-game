const cl = (...p) => console.log(...p)

  console.log("index.js connected")


const board = document.querySelector('#memory-board')


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

function newGame(){
  /// ... code for new game
  ///create html for button... onclick do below not return
 return memoryGame.shuffleCards() /// shuffle works...do last figure out game first!!!!
}

//    clear array after compare cards
//   memoryGame.pickedCards = []

// function compare(){
//   if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]) === true){
//     memoryGame.pickedCards = []
//   } else {
//     turnBack()
//   }

// }

//toggle functions

//block
// const blocked = ()=> {
//   let front = document.querySelector('.front')
//    front.classList.toggle('blocked')
//    //... glazed overlay other changed? cuz turn keeps it turned
//    // 
//  } 





window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card " data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;

  });
  
  // Add all the divs to the HTML
document.querySelector('#memory-board').innerHTML = html;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const turn = () => card.classList.toggle('turned')
      const turnBack = ()=> setTimeout(turn, 2000)
      turn()
      /// if statment after checked to turnBack() or block() 
      //turnBack()
      

 
  
   
   //// works DONT TOUCH
      if(card.hasAttribute('turned')=== true && memoryGame.pickedCards.length ===0 || memoryGame.pickedCards.length <2){
      memoryGame.pickedCards.push(card.attributes[1].nodeValue)
      cl(memoryGame.pickedCards)}
 ////////
        memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
        //// wrong IF STATEMENT!  clearing works on matches & non
         if(memoryGame.pickedCards[0] === memoryGame.pickedCards[1]){
          memoryGame.pickedCards = []   
       } 

        ///// ~~~doesn't count as clicked pair justs turns back~~~ 
         //else {
        //  turnBack()
        //  memoryGame.pickedCards = []
        // }
           
        // }
          
         
         /// not work if statement works for all even pairs... WRONG IFFFFFFFF
          // if(memoryGame.pickedCards[0] !== memoryGame.pickedCards[1]){
          //   memoryGame.pickedCards = []
          //   turnBack()
          // }
         
        /// calls it twice pairs clicked thrown off
        //   if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])=== false)
        //   turnBack()
        //   memoryGame.pickedCards = []
        //  }
      
      
      // memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
      
      
  //     cl(card)
     
      console.log(`Card clicked: ${card}`);
    });
  });
});




cl(memoryGame.pairsClicked)
cl(memoryGame.pairsGuessed)



// if(card.hasAttribute('turned')=== true && memoryGame.pickedCards.length ===0 || memoryGame.pickedCards.length <2)
// {
//   memoryGame.pickedCards.push(card.attributes[1].nodeValue)
//   cl(memoryGame.pickedCards)

//   memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
//   // if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])=== false){
//   //   turnBack()
//   //   memoryGame.pickedCards = []
//   // }
// }






///// messes stuff up but idea
// function toTurn(){
//   let card2arr = []
//   if(card2arr.length >= 0 || card2arr.length < 2){
//     card.classList.toggle('turned')
//     card2arr.push(card)
//  }
// }
// toTurn()
// /// not passing to array
// cl(card2arr)  
    
//   if(card2arr.length === 2){
//     !card.classList.toggle('turned') /// not correct coding just idea
//   }
// }   






// window.addEventListener('load', event => {
//   let html = '';
//   memoryGame.cards.forEach(pic => {
//     html += `<div class="card " data-card-name="${pic.name}">`;
//     html += `<div class="back" name="${pic.img}"></div>`;
//     html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
//     html += `</div>`;

//   });
  
//   // Add all the divs to the HTML
// document.querySelector('#memory-board').innerHTML = html;

//   // Bind the click event of each element to a function
//   document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', () => {
//       // TODO: write some code here
//       console.log(`Card clicked: ${card}`);
//     });
//   });
// });

