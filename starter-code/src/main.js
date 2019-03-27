var cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];
var memoryGame = new MemoryGame(cards);
pairsClicked = document.getElementById("pairs_clicked");
pairsguessed = document.getElementById("pairs_guessed");



memoryGame.shuffleCards();


document.addEventListener("DOMContentLoaded", function (event) {
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '<div class="back" name="' + pic.img + '"></div>';
    html += '<div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  alert(" Tienes que adivinar 8 parejas de cartas para poder ganar el juego. ")

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  let contadorParejasClicadas = 0;
  let emparejadas = 0 ;
  let arr = [];


  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function (card) {

    card.onclick = function () {
      card.parentElement.childNodes.forEach(card => {
        card.classList.toggle("back");
        card.classList.toggle("front");
        // console.log(card)
      });
      let clickCounter = 0;

      // console.log(arr);
      arr.push(card.parentElement);
      // console.log(arr)

      if (arr.length === 2) {
        // if (MemoryGame.checkIfPair(arr[0], arr[1]))
        // ;
        if (memoryGame.checkIfPair(arr[0].innerHTML, arr[1].innerHTML)) {
          contadorParejasClicadas++;
          emparejadas++;
          pairsguessed.innerHTML = emparejadas;
          pairsClicked.innerHTML = contadorParejasClicadas;
          
          if (emparejadas >= 8){
            setTimeout(() => {
            alert("Has ganado Ironhacker");
            }, 1000);
            setTimeout(() => {
              location.reload();
            }, 3000);

          }
          
          // console.log("ganaste")
        } else { 
          contadorParejasClicadas++;
          pairsClicked.innerHTML = contadorParejasClicadas; 
          var card1 = arr[0];
          var card2 = arr[1];
          setTimeout(() => { 
            // console.log(p)
            
            card1.childNodes.forEach(card => {
              card.classList.toggle("back");
              card.classList.toggle("front");
              // console.log(card)
            });;
            card2.childNodes.forEach(card => {
              card.classList.toggle("back");
              card.classList.toggle("front");
               console.log(card)
            });
            // card.parentElement.childNodes.forEach(card => {
            //   card.classList.toggle("back");
            //   card.classList.toggle("front");
            //   // console.log(card)
            // });
          }, 2000);
        }
        
        arr.length = 0;
        
      }

      // clickCounter++;

      // if (clickCounter === 2) {

      //   console.log("hola" + clickCounter );
      //   setTimeout(() => {
      //     console.log("adios");
      //     card.parentElement.childNodes.forEach(card => {
      //       card.classList.toggle("back");
      //       card.classList.toggle("front");
      //       // console.log(card)
      //     });
      //   }, 1000);
      // clickCounter = 0;
      // }

      // TODO: write some code here
      // console.log('Card clicked ' + arr)
    }
  });
});