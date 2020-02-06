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
      card.classList.toggle("turned");

      let card1;
      let card2;
      let card1Att;
      let card2Att;

      if(memoryGame.pickedCards.length < 1) {
        card1 = document.querySelectorAll(".turned")[0];
        card1Att = document.querySelectorAll(".turned")[0].getAttribute('data-card-name');

        console.log(card1);
        console.log(card1Att);

        memoryGame.pickedCards.push(card1Att);

      } else if (memoryGame.pickedCards.length < 2){
        card2 = document.querySelectorAll(".turned")[1];
        card2Att = document.querySelectorAll(".turned")[1].getAttribute('data-card-name');

        console.log(card2);
        console.log(card2Att);

        memoryGame.pickedCards.push(card2Att);

        console.log(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]));
        console.log("checkIfPair",memoryGame.checkIfPair("a", "a"));
        console.log("card1Att == card2Att",card1Att == card2Att);

      } else {
        
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          console.log('ígual');

          document.querySelectorAll(".turned")[0].classList.add('blocked');
          document.querySelectorAll(".turned")[1].classList.add('blocked');

          document.querySelectorAll(".turned")[0].classList.remove('turned');
          document.querySelectorAll(".turned")[1].classList.remove('turned');
          // document.querySelectorAll(".turned")[0].classList.replace('turned', 'blocked');
          // document.querySelectorAll(".turned")[1].classList.replace('turned', 'blocked');
        } else {
          console.log('nao ígual');
          document.querySelectorAll(".turned")[0].classList.remove('turned');
          document.querySelectorAll(".turned")[1].classList.remove('turned');
      }

      }



      

      console.log(memoryGame.pickedCards);

      memoryGame.checkIfPair(card1Att, card2Att);

      // console.log(`Card clicked: ${card}`);
    });
  });
});