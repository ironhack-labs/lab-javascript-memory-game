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
  //Cada vez que se cree un nuevo juego debemos invoco el metodo barajar (suffleCards)
  memoryGame.shuffleCards()
  //Declaramos la variable html que contendra un string vacío
  //Se irá rellenando de 3 div por carta. OJO! Ejemplo: html:"sirenita2offpocahontas3onvaiana1off" pero con divs
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  //Añadimos el string de divs al HTML como contenido HTML gracias a la propiedad innerHTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    // let div = document.querySelector("div")
    //let classes = div.classList

    card.addEventListener('click', () => {
      //OPCION A: Cuando hagamos click en un elemento se añadira a su clase la clase turned
      //card.classList.toggle('turned')

      //OPCION B: 
      card.classList.add('turned')
      //Acumulamos 2 cards clickeadas en el array que definimos vacio gracias al metodo push
      const cardName = card.getAttribute('data-card-name')

      // memoryGame.pickedCards.slice(i,0,card)
      memoryGame.pickedCards.push(card)
      //const cardTwo = memoryGame.pickedCards.push(card)

      //LLamamos al metodo setTimeout() que ejecutara el metodo toggle por segunda veces 
      if (memoryGame.pickedCards.length === 2) {

        //const cardOne = memoryGame.pickedCards[memoryGame.pickedCards.length-1]
        //  const cardTwo = memoryGame.pickedCards[memoryGame.pickedCards.length]
        const cardOne = memoryGame.pickedCards[0]
        const cardTwo = memoryGame.pickedCards[1]
        //if (memoryGame.checkIfPair(cardOne.data-card-name, cardTwo.data-card-name)) {
        if (memoryGame.checkIfPair(cardOne.getAttribute('data-card-name'), cardTwo.getAttribute('data-card-name'))) {
          document.querySelector(' #pairs-guessed').textContent = memoryGame.pairsGuessed
          console.log("true")

          if (memoryGame.isFinished()) {
            alert("---GOOG JOB! GAME IS FINISHED---")
            console.log("true")
          }
        } else {

          console.log("false")
          setTimeout(() => {
            cardOne.classList.remove('turned')
            cardTwo.classList.remove('turned')
            // cardTwo.classList.toggle('turned')
          }, 1500)
        }

        memoryGame.pickedCards.length = 0;
        document.querySelector(' #pairs-clicked').textContent = memoryGame.pairsClicked + 1
      }



      // TODO: write some code here
      //Cuando el numero de cartas clickeadas es igual a 2 , las comparamos
      /*     
            if (memoryGame.pickedCards.length === 2) {
              const card1 = memoryGame.pickedCards[]
          }*/
      console.log(`Card clicked: ${card}`);
    });
  });
});
