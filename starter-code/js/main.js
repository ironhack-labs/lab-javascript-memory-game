const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;
  let turnedCard

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach( card => {
    card.onclick =  function() {
      // TODO: write some code here
      console.log('Card clicked: ', card);
      card.classList.toggle('turned')

      memoryGame.clicks++;
      memoryGame.pickedCards.push(card)
      turnedCard = memoryGame.pickedCards[0]
      //console.log("validacion si son pares " + memoryGame.pickedCards.length)
      console.log(memoryGame.pickedCards.length)
      //console.log(memoryGame.pickedCards)
      if (memoryGame.pickedCards.length >= 2){
        //console.log(memoryGame.pickedCards[0].getAttribute('data-card-name') + " vs " + memoryGame.pickedCards[1].getAttribute('data-card-name'))
       setTimeout(function() {
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))){
          memoryGame.pickedCards.splice(0,memoryGame.pickedCards.length);
          document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed
          if (memoryGame.pairsGuessed == 12) {
            alert("Haz ganado la partida en " + (memoryGame.pairsClicked + memoryGame.pairsGuessed) + " intentos")
          }
        } else {
          // console.log('entre a desvoltear')
          document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked
          memoryGame.pickedCards.splice(0,memoryGame.pickedCards.length);
           card.classList.toggle('turned')
           turnedCard.classList.toggle('turned')
           turnedCard.length=0
        }},900)
      }
    };
  });
});
