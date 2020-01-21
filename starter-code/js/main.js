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

      // if (memoryGame.pickedCards.length < 2) {
      //   card.classList.add('turned');
      //   memoryGame.pickedCards.push(card.dataset.cardName);

      //   setTimeout( () => {
      //     if (memoryGame.pickedCards.length >= 2) {
      //         if (!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
      //           memoryGame.pickedCards.forEach ( name => {
      //           document.querySelector(".card.turned.[data-card-name="+name+"]").classList.remove("turned");
      //         });
      //       }
      //       document.querySelector('#pairs_clicked').innerHTML = memoryGame.pairsClicked;
      //       document.querySelector('#pairs_guessed').innerHTML = memoryGame.pairsGuessed;
      //     }
      //     },2000);
      // }
      if (memoryGame.pickedCards.length < 2) {
        card.classList.add("turned");
        memoryGame.pickedCards.push(card.dataset.cardName);

        setTimeout(() => {
          if (memoryGame.pickedCards.length >= 2) {
            if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
              memoryGame.pickedCards.forEach(name => {
                document.querySelector(".card.turned[data-card-name").classList.remove("turned");
              });
            }
            document.querySelector("#pairs_clicked").innerHTML = memoryGame.pairsClicked;
            document.querySelector("#pairs_guessed").innerHTML = memoryGame.pairsGuessed;
          }
        }, 2000);
      }
    });
  });
});
