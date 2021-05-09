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
  memoryGame.shuffleCards();
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  for (card in memoryGame.cards) {
    let card = document.createElement("div");
    card.classList.add("memory-board");
  }
  const cardsTurned = [];
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener(
      "click",
      () => {
        // TODO: write some code here
        card.classList.toggle("turned");
        memoryGame.pairsClicked += 1;
        const click = document.getElementById("pairs-clicked");
        console.log(click);
        click.textContent = memoryGame.pairsClicked;
        console.log(memoryGame.pairsClicked);
        console.log(card.attributes[1].textContent);
        cardsTurned.push(card);
        console.log(cardsTurned);
        if (cardsTurned.length % 2 === 0) {
          if (
            memoryGame.checkIfPair(
              cardsTurned[0].attributes[1].textContent,
              cardsTurned[1].attributes[1].textContent
            )
          ) {
            //console.log("iguales");
            cardsTurned[0].classList.add("blocked");
            cardsTurned[1].classList.add("blocked");
            const guessed = document.getElementById("pairs-guessed");
            guessed.textContent = memoryGame.pairsGuessed;
            cardsTurned.pop();
            cardsTurned.pop();
            //console.log(cardsTurned);
          } else {
            console.log(cardsTurned);
            setTimeout(function () {
              console.log(cardsTurned);
              cardsTurned[0].classList.remove("turned");
              cardsTurned[1].classList.remove("turned");
              memoryGame.pairsClicked -= 1;
            }, 500);
            setTimeout(function () {
              cardsTurned.pop();
              cardsTurned.pop();
            }, 500);

            //console.log(cardsTurned);
            //console.log("diferentes");
          }
          //console.log("Hay juego");
        }
        //console.log(`Card clicked: ${card}`);
      },
    );
  });
});
