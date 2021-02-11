const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function

  //Selected card//
  // let card1 = memoryGame.pickedCards[0];
  // let card2 = memoryGame.pickedCards[1];

  //Add event listener and flip the card back and forth//
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("turned")) {
        card.classList.remove("turned");
      } else {
        card.classList.add("turned"); //clic de retour ne fonctionne pas
      }
      thePair();
    });
  });

  
  function thePair() {
    if (memoryGame.pickedCards.length <= 1) {
      //envoyer les infos de la carte vers pickedCards
      memoryGame.pickedCards.push(card);
    } else if (picked.length === 1) {
      //enclencher checkIfPair
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]) === true){
        //alors bloquer les cartes face image
      } else {
        //déclencher un timeout de 2sec à partir de la 2e carte cliquée, puis les retourner
      }
    }
  }
});
