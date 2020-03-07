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
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

   //Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

   //Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
       card.onclick = () => {
         card.setAttribute('class', 'card turned');
         memoryGame.pickedCards.push(card);
         if(memoryGame.pickedCards.length===2){
           memoryGame.checkIfPair();
           if(memoryGame.checkIfPair()){
             document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
             document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed;
           }else{
             document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
             memoryGame.pickedCards[0].setAttribute('class', 'card');
             memoryGame.pickedCards[1].setAttribute('class', 'card');
             memoryGame.pickedCards = [];
           }
         }
       }
      card.setAttribute('class', 'card turned');
      memoryGame.pickedCards.push(card);
      if(memoryGame.pickedCards.length===2){
        const card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        const card2 =memoryGame.pickedCards[1].getAttribute("data-card-name");;
        if(memoryGame.checkIfPair(card1, card2)){
          document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
          document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed;
        }else{
          document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
          setTimeout(() => {
            memoryGame.pickedCards[0].setAttribute('class', 'card');
            memoryGame.pickedCards[1].setAttribute('class', 'card');
            memoryGame.pickedCards = [];
          }, 500);
        }
      }
       console.log(`Card clicked: ${card}`);
       if(document.querySelector("#pairs_clicked")===2){
          checkIfPair()
       }
    });
  });
});