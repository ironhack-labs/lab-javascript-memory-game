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

const memoryGame = new MemoryGame(cards)
//shuffle cards and set the board
document.addEventListener("DOMContentLoaded", function(event) { 
  let html = ''
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`
    html += `<div class="back" name="${pic.img}"></div>`
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`
    html += `</div>`
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html
  

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      //Identify the card in the parent node with the front ID
      const parent = card.parentNode
      const fCard = parent.querySelector('.front')

      // Change the class of the cards so the card with the superheroe is visible
      this.classList.remove("back")
      this.classList.add("front")
      fCard.classList.remove("front")
      fCard.classList.add("back")

      // test to confirm which card you have 
      console.log('Card clicked: ', card);

      //Push into the array the name of the cards
      memoryGame.pickedCards.push(this.getAttribute('name'))
      console.log(memoryGame.pickedCards)

      //Define a function thet flips Cards
      function flipCards(currentCard) {
        const siblingCard = currentCard.parentNode.querySelector('.back')
        // cambiar las clases front y back de currentCard y sibling
       
          currentCard.classList.remove("front")
          currentCard.classList.add("back")
          siblingCard.classList.remove("back")
          siblingCard.classList.add("front")
      }

      // Once we have two cards in the array:
      if (memoryGame.pickedCards.length === 2) {
        // Identify the two cards
        const card1 = document.querySelector(`div.front[name='${memoryGame.pickedCards[0]}']`)
        const card2 = document.querySelector(`div.front[name='${memoryGame.pickedCards[1]}']`)

        //Test to see whats in the array
        console.info('CARDS => ', card1, card2)

        // If statement that checks for true even without specifying
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])) {
          memoryGame.pickedCards = [] //empty the array
        
        } else { // When the carda are not equal we have to flip them 
          setTimeout(function() {
            //flip both cards using the function defined above
            flipCards(card1)
            flipCards (card2)
          }, 2000)// There must be some time to check the card
        
          memoryGame.pickedCards = [] //empty the array
        }
        document.getElementById('pairs_clicked').innerText = memoryGame.pairsClicked
        document.getElementById('pairs_guessed').innerText = memoryGame.pairsGuessed 
      } 
    }
  })
 })
