const cards = [{
    name: "aquaman",
    img: "aquaman.jpg"
  },
  {
    name: "batman",
    img: "batman.jpg"
  },
  {
    name: "captain america",
    img: "captain-america.jpg"
  },
  {
    name: "fantastic four",
    img: "fantastic-four.jpg"
  },
  {
    name: "flash",
    img: "flash.jpg"
  },
  {
    name: "green arrow",
    img: "green-arrow.jpg"
  },
  {
    name: "green lantern",
    img: "green-lantern.jpg"
  },
  {
    name: "ironman",
    img: "ironman.jpg"
  },
  {
    name: "spiderman",
    img: "spiderman.jpg"
  },
  {
    name: "superman",
    img: "superman.jpg"
  },
  {
    name: "the avengers",
    img: "the-avengers.jpg"
  },
  {
    name: "thor",
    img: "thor.jpg"
  },
  {
    name: "aquaman",
    img: "aquaman.jpg"
  },
  {
    name: "batman",
    img: "batman.jpg"
  },
  {
    name: "captain america",
    img: "captain-america.jpg"
  },
  {
    name: "fantastic four",
    img: "fantastic-four.jpg"
  },
  {
    name: "flash",
    img: "flash.jpg"
  },
  {
    name: "green arrow",
    img: "green-arrow.jpg"
  },
  {
    name: "green lantern",
    img: "green-lantern.jpg"
  },
  {
    name: "ironman",
    img: "ironman.jpg"
  },
  {
    name: "spiderman",
    img: "spiderman.jpg"
  },
  {
    name: "superman",
    img: "superman.jpg"
  },
  {
    name: "the avengers",
    img: "the-avengers.jpg"
  },
  {
    name: "thor",
    img: "thor.jpg"
  }
];
let sonido1, sonido2, sonido3
sonido1 = new Howl({
  src: ["./homer.wav"],
  loop: false
})
sonido2 = new Howl({
  src: ["./efecto3.wav"],
  loop: false
})
sonido3 = new Howl({
  src: ["./ohgod.wav"],
  loop: false
})
let secondClick = false
let firstCard;
let secondCard = null
const nameAttr = "data-card-name";
const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards(cards) //Esto no me funciona :(

//No tocar nada de abajo !!!!
window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

      sonido2.play()
      if (secondCard === null) {

        if (card.className.includes("turned") === false) {
          card.className = "card turned";
        }
        if (secondClick) {
          secondClick = false;
          secondCard = card;
          setTimeout(() => {
            if (memoryGame.checkIfPair(firstCard.getAttribute(nameAttr), secondCard.getAttribute(nameAttr))) {
              // Mostrar en pantalla los clicks y las parejas cuando hace match
              document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
              document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed;
              sonido1.play()
              if (memoryGame.isFinished()) {
                //Premio por ganar :)
                document.getElementById("memory_board").innerHTML = "You won a potato :)!";
                sonido3.play()
                alert("Güiiiiiiii are the champioooooooooooons ma freeeeeeeeeeeeeend!")
              }
            } else {
              //Mostrar los clicks cuando no hacen match
              document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
              firstCard.className = "card";
              secondCard.className = "card";
            }
            firstCard = null;
            secondCard = null;
          }, 550);


        } else {
          secondClick = !secondClick;
          firstCard = card;
        }
      }

      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
    });
  });
});