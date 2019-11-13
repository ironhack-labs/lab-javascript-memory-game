var cards = [
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
var memoryGame = new MemoryGame(cards);
var flippedcard;
const guessed = document.getElementById("pairs_guessed");
const clicked = document.getElementById("pairs_clicked");
document.addEventListener("DOMContentLoaded", function(event) {
  memoryGame.shuffleCards();
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front no-display" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function() {
      // TODO: write some code here
      let parent = this.parentElement;

      // console.log(
      //   "Card: ",
      //   parent.getAttribute("data-card-name"),
      //   "\nFlipped Card: ",
      //   flippedcard
      // );
      let front = parent.getElementsByClassName("front")[0];
      let back = parent.getElementsByClassName("back")[0];
      front.className = "front";
      back.className = "back no-display";
      //console.log("F: ", flippedcard, "\nE");
      if (flippedcard) {
        console.log(flippedcard);
        clicked.innerText = Number(clicked.innerText) + 1;
        // console.log("A cards has been flipped already");
        // console.log(flippedcard.getAttribute("data-card-name"));
        // console.log(parent.getAttribute("data-card-name"));

        if (
          flippedcard.getAttribute("data-card-name") ===
          parent.getAttribute("data-card-name")
        ) {
          guessed.innerText = Number(guessed.innerText) + 1;
          setTimeout(() => {
            parent.className = "no-display";
            flippedcard.className = "no-display";
            flippedcard = undefined;
          }, 200);
        } else {
          setTimeout(() => {
            console.log("bruh ", flippedcard, parent);
            console.log(flippedcard.getElementsByClassName("front"));

            console.log(flippedcard.getElementsByClassName("back")[0]);
            flippedcard.getElementsByClassName("front")[0].className =
              "front no-display";
            flippedcard.getElementsByClassName("back")[0].className = "back";
            parent.getElementsByClassName("front")[0].className =
              "front no-display";
            parent.getElementsByClassName("back")[0].className = "back";
            console.log("?");
            setTimeout(() => {
              flippedcard = undefined;
            }, 200);
          }, 500);
        }
      } else {
        console.log("YEAH");

        flippedcard = parent;
        let front = parent.getElementsByClassName("front")[0];
        let back = parent.getElementsByClassName("back")[0];
        front.className = "front";
        back.className = "back no-display";
      }
      // console.log("Hermano: ", parent.getElementsByClassName("front")[0]);
    };
  });
});
