
  
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

//Seleccionar el div para cuando ganemos la partida
let divWin = document.querySelector("#win")
//Load de la pagina que cargará la funcion LOAD()
window.addEventListener('load', logicGame())

//Funcion load que hace toda la logica del juego
function logicGame(){
  memoryGame.shuffleCards()//Mezclar las cartas y actualizar el DOM
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
    document.querySelector('#memory-board').innerHTML = html;//Añade las cartas al memory board
    document.querySelectorAll('.card').forEach(card => { //Seleccionar cada carta
      card.addEventListener('click', () => {//Crear evento para el click sobre cada carta
        card.classList.toggle("turned")//Girar la carta sobre la que se hace click con la clase turned
        memoryGame.pickedCards.push(card)//Añadir esa carta pulsada en el array pickedCards que está vacio
        if(memoryGame.pickedCards.length === 2){//Si el array tiene 2 cartas hacer lo que se incluye 
          let carta1 = memoryGame.pickedCards[0].getAttribute("data-card-name");//Coger el nombre de las cartas y almacenarlos en dos variables
          let carta2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
          if (memoryGame.checkIfPair(carta1, carta2)){//Se comparar el nombre de las cartas, si coincide hacer lo del if
            let pairsGuessedText = document.getElementById("pairs-guessed")
            pairsGuessedText.innerHTML++;//Sumar 1 en pares adivinados
            let pairsClickedText= document.getElementById("pairs-clicked") ;
            pairsClickedText.innerHTML++//Sumar 1 en pares pulsados
            memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);//Borrar array y dejar vacia
          }else if (!memoryGame.checkIfPair(carta1, carta2)){//Si no coinciden los nombres de las cartas hacer el if
            let pairsClickedText= document.getElementById("pairs-clicked") ;//Sumar 1 en pares clickados
            pairsClickedText.innerHTML++
            memoryGame.pickedCards.forEach(div =>{//Por cada carta del array hacer que se gire a los 500ms tan solo una vez (setTimeout)
              setTimeout(()=>{
                div.classList.toggle("turned")
              },500)
            })
            memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);//Borrar array
            }
          }
        if(memoryGame.isFinished()){//Comprobar si el juego ha terminado
          setTimeout(() => {//Mostrar el div donde indica que has ganado y el boton de play Again a los 1000ms
            divWin.style.visibility = "visible"
          }, 1000);
        }
      });
    });
}
//Seleccionar el boton play again y guardarlo en una variable
let btnPlayAgain = document.querySelector(".playAgain")
//Al hacer click en el botón hacer las siguientes:
btnPlayAgain.addEventListener("click", ()=>{
  divWin.style.visibility = "hidden"
  //Contadores a cero
  memoryGame.pairsClicked = 0
  memoryGame.pairsGuessed = 0
  document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked
  document.getElementById("pairs-guessed").textContent = memoryGame.pairsGuessed
  //Girar todas las cartas porque estarán todas descubiertas si has ganado
  document.querySelectorAll('.card').forEach(card => {
    card.classList.toggle("turned")
  })
  //Volver a ejecutar toda la logica del juego
  logicGame()
})