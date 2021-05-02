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
  let guessed = document.getElementById("pairs-guessed")
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function

  function turnCardsBack(pickedCards){
    let card1 = pickedCards[0],
    card2 = pickedCards[1] 
    card1.firstElementChild.classList.remove("front")
    card1.firstElementChild.classList.add("back")
    card1.lastElementChild.classList.remove("back")
    card1.lastElementChild.classList.add("front")

    card2.firstElementChild.classList.remove("front")
    card2.firstElementChild.classList.add("back")
    card2.lastElementChild.classList.remove("back")
    card2.lastElementChild.classList.add("front")

    memoryGame.pickedCards = []

  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {


    card.firstElementChild.classList.remove("back")
    card.firstElementChild.classList.add("front")

    
    card.lastElementChild.classList.remove("front")
    card.lastElementChild.classList.add("back")
    memoryGame.pickedCards.push(card)


    if(memoryGame.pickedCards.length % 2 === 0 ){
      let isPair =  memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute("data-card-name"),
          memoryGame.pickedCards[1].getAttribute("data-card-name"))

      if(isPair){
          guessed.innerText = memoryGame.pairsGuessed
         memoryGame.pickedCards = []
      }else{

        setTimeout(()=>{
          turnCardsBack(memoryGame.pickedCards)
        },1000)

      }
    }


    console.log("daa",memoryGame.pickedCards)

    });
  });
});
