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
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);

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
      // TODO: write some code here
      card.setAttribute("class", "card turned");
      console.log(`Card clicked: ${card}`);
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
      
      setTimeout(function() {
        card.setAttribute("class", "card");
      }, 2000);
    }
      let card_1 = memoryGame.pickedCards[0];
      let card_2 = memoryGame.pickedCards[1];
      let a1 = card_1.getAttribute("data-card-name");
      let a2 = card_2.getAttribute("data-card-name");
      memoryGame.checkIfPair(a1, a2);

      memoryGame.pickedCards.splice(0, 2);
    });
  });
});
