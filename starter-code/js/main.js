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

const game = new MemoryGame(cards);

window.addEventListener("load", event => {
  let html = "";
  game.cards.forEach(pic => {
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

      returnCard(card);

      if (document.querySelectorAll("#memory_board .turned").length==2) {

        card1 = document.querySelectorAll("#memory_board .turned")[0];
        card2 = document.querySelectorAll("#memory_board .turned")[1];
        card1Name=card1.getAttribute("data-card-name");
        card2Name=card2.getAttribute("data-card-name");

        if (game.checkIfPair(card1Name, card2Name)) {
          //cartes identiques
          card1.classList.replace("turned","blocked")
          card2.classList.replace("turned","blocked")

          if (game.isFinished()) {
            window.open("https://external-preview.redd.it/TgKhMbheAgIo0sxCMYvYTih1eQDoCU62i9-O6lG_jVA.gif?format=mp4&s=1b3a22c0972e03794e1bc7bf3c09684af81648e1", "Victory!!", "width:200px", "height:300px");
          }

        }
        else { //cartes différentes
          setTimeout(function() {
            returnCard(card1);
            returnCard(card2);
          },1000);
        }

        updateScore()

      }
    });
  });
});

function returnCard(card) {
  
  card.classList.toggle("turned")

  card.childNodes.forEach((elem) => {
    if (elem.classList.contains("back")) {
      elem.classList.replace("back", "front")
    }
    else {
      elem.classList.replace("front", "back")
    }
  });

}

function updateScore() {
  document.getElementById("pairs_clicked").innerText=game.pairsClicked;
  document.getElementById("pairs_guessed").innerText=game.pairsGuessed;
}
