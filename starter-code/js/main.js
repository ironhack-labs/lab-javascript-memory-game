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
    memoryGame.shuffleCards();
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  //html += document.querySelector("#score").innerHTML;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {  //, #pairs_clicked, #pairs_guessed

    card.addEventListener("click", () => {

      card.className += " turned";

      memoryGame.pickedCards.push(card);
      //document.getElementsByClassName("card turned")

      if(memoryGame.pickedCards.length == 2){

        let card1 = memoryGame.pickedCards[0]
        let card2 = memoryGame.pickedCards[1]

        setTimeout(function(){

          if(memoryGame.checkIfPair(card1.getAttribute("data-card-name"), card2.getAttribute("data-card-name"))){
          card1.classList.add("blocked");
          card2.classList.add("blocked");
          document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
          document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed;
          //card2.className = "card blocked"
          } else {
          card1.classList.remove("turned")
          card2.classList.remove("turned")
          document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
          //card2.className = "card"
          }

          memoryGame.pickedCards = [];

        }, 1000)

        if(memoryGame.isFinished){
          window.alert("Congratulations! You have beaten the game! ")
          location.reload();
        }
        
      }
    });
  })
});
