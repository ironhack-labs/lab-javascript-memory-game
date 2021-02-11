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
  //console.log("start")
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
  document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    
      // TODO: write some code here

      /*if (memoryGame.pickedCards.length === 0) { //none picked
        memoryGame.pickedCards.push(card); //add current to picked list
        card.classList.toggle("back"); //flip card
        card.classList.toggle("front"); //flip card

      } else if (memoryGame.pickedCards.length === 1){ //one picked
        card.classList.toggle("back");//flip card
        card.classList.toggle("front");//flip card
        let compare = memoryGame.checkIfPair(card,memoryGame.pickedCards[1]); //compare picked & clicked

        if (compare){//if match
          card.classList.remove("front");
          memoryGame.pickedCards[1].classList.remove("front");
          card.classList.add("blocked"); //class blocked
          memoryGame.pickedCards[1].classList.add("blocked");
          memoryGame.pickedCards.pop(); //empty picked list
        } else {
          card.classList.toggle("back");//flip card
          card.classList.toggle("front");//flip card
          memoryGame.pickedCards[1].classList.toggle("back");
          memoryGame.pickedCards[1].classList.toggle("front");
          memoryGame.pickedCards.pop(); //empty picked list
        }


      }else{
        console.log("error more than 1");
      }
*/


      console.log(`Card clicked: ${card.classList}`);
    });
  });
});
