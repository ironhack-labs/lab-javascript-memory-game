var cards = [
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
var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards()

function endGame() {
open("endGame.html", "Fin de Juego", "width=800px, height= 600px, top=200px, left=500px")
}


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = (event) => {
      let front = event.currentTarget                          //Almaceno temporalmente los divs front y back
      let back = event.currentTarget.parentNode.lastChild 
      let cardName = event.currentTarget.parentNode.getAttribute("data-card-name")
      let buffer = memoryGame.pickedCards   
      console.log(buffer)                                      //BUFFER PARA RECORDAR CARTA ANTERIOR
      memoryGame.pairsClicked++
      document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked

      

      if (buffer.length == 0) {                           // Estructura de control para comparar pares de cartas
        front.className =  "front"
        back.className = "back"
        buffer.push([cardName, front, back])                       //PUSHEO LA CARTA ANTERIOR JUNTO A SUS POSICIONES EN EL BUFFER
        console.log(buffer)
      } else if (buffer.length == 1) {
        front.className =  "front"
        back.className = "back"
        buffer.push([cardName, front, back])
        console.log(buffer)
        
                                                                          //TIMEOUT PARA VOLVER A DAR LA VUELTA A LAS CARTAS
        setTimeout( () => {
          if (buffer[0][0] != buffer[1][0]) {
            front.className = "back"
            back.className = "front"
            buffer[0][1].className = "back"
            buffer[0][2].className = "front"
            buffer = []
            memoryGame.pickedCards = []
            console.log(buffer)
          } else {
            buffer = []
            memoryGame.pickedCards = []
            memoryGame.pairsGuessed++
            document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed
            
            if (memoryGame.pairsGuessed == memoryGame.cards.length/2) {       // FIN DE JUEGO
              endGame()
              return
            }
          }
        } ,100)

      }

      
      // TODO: write some code here
      console.log('Card clicked')
    }
  });
});

document.getElementById("memory_board").parentNode.lastChild


