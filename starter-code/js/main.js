
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
memoryGame.shuffleCards();


window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card back" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });


  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

      memoryGame.pickedCards.push(card);
      card.classList.toggle('turned');

      if (memoryGame.pickedCards.length === 3){
        memoryGame.pickedCards.forEach((e, idx) => {
          if(idx<2) e.classList.toggle('turned');
        });
        memoryGame.pickedCards.splice(0,2);
      }

      if (memoryGame.pickedCards.length === 2){
        let c1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let c2 = memoryGame.pickedCards[1].getAttribute('data-card-name');

        if (memoryGame.checkIfPair(c1,c2)){
          document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
          memoryGame.isFinished();
          memoryGame.pickedCards = [];
        }
          document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked;

      }
    });
  });
});

