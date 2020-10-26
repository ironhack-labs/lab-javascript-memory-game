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
let volteado = true; //condición para que no se pueda volver a voltear una carta antes de que las dos 
                     //volteadas con anterioridad y que no coincidan vuelvan a darse la vuelta

function toggle(){ //Damos la vuelta a las cartas volteadas que no coinciden después de 0.5seg
  
  memoryGame.pickedCards.forEach(card => card.classList.toggle("turned"));
  memoryGame.pickedCards =[]; 
  volteado = true; 
}

function flip(event){
  if(volteado){
  const target = event.currentTarget;
  target.classList.toggle("turned")

    if(memoryGame.pickedCards.length<1){
      memoryGame.pickedCards.push(target);
      
    }
    else{
      
      memoryGame.pickedCards.push(target);
      const card1 = memoryGame.pickedCards[0];
      const card2 = memoryGame.pickedCards[1];

      if(!memoryGame.checkIfPair(card1.getAttribute("data-card-name"),card2.getAttribute("data-card-name"))){
        console.log(card1.getAttribute("data-card-name"));
        console.log(card2.getAttribute("data-card-name"));
        document.querySelector("#pairs-clicked").innerText = memoryGame.pairsClicked;
        volteado = false; 
        setTimeout(toggle,500);
        
      }else{
        document.querySelector("#pairs-clicked").innerText = memoryGame.pairsClicked;
        document.querySelector("#pairs-guessed").innerText = memoryGame.pairsGuessed;
        memoryGame.pickedCards =[];
        if(memoryGame.isFinished()) setTimeout(function(){ alert("YOU WON!!!"); }, 1000);;  
      }  
      
    }
  }
}

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
    card.addEventListener('click', flip );
  } );
});
