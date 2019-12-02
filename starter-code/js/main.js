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

let selectCards = [];
let countClicks = 0;
let pass = ""


window.addEventListener("load", event => {
  let html = "";
  memoryGame.shuffleCards()
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

      document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked

      if(countClicks < 2){
        selectCards.push(card)
        card.className += " turned"
        countClicks++
        if(countClicks == 2){
          card1 = selectCards[0].childNodes[1].outerHTML
          card2 = selectCards[1].childNodes[1].outerHTML
          
          if(memoryGame.checkIfPair(card1, card2)){
            pass = "Ok"
          document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed
          document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked
            if(memoryGame.isFinished() == true){
              victory()

            }
          }
          
          
        }
      } else if(countClicks == 2 && pass == "Ok"){
        pass = ""  
        selectCards = []
        countClicks = 0
        selectCards.push(card)
        card.className += " turned"
        countClicks++

      } else {
        selectCards[0].className = "card"
        selectCards[1].className = "card"
        selectCards = []
        countClicks = 0
      }
      
     
      console.log(`Card clicked: ${card}`);
    });
  });
});

function victory(){
  document.getElementById("memory_board").style.display = "none"
  document.getElementById("victory").style.display = "flex"
  
}
