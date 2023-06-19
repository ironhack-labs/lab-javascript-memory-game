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
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  //let cardTurned = false

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (event) => {
      // TODO: write some code here
      const clickedElement = event.target;
      let front = card.querySelector('.front');
      let back = card.querySelector('.back');

      //const childElement = clickedElement.classList('front');

      // Bind the click event of each element to a function
        document.querySelectorAll(".card").forEach((card) => {
          card.addEventListener("click", (event) => {
            // TODO: write some code here
            if(!card.classList.contains('turned')){
              card.classList.add('turned')
              console.log('first click')
            } else {
              card.classList.remove('turned')
              console.log('second click')

            }
        });
        });

      

      // memoryGame.pickedCards = [];
      // let card1 = event
      // let card2 = event
      // let isTheSame = checkIfPair(card1, cards2);

      // if(isTheSame){
      //   checkIfFinished();
      // } else {
      //   //turn two cards
      // }
      // card.classList.toggle("turned");
      // console.log(card);
      // console.log(event);
      // if(!card.classList.contains('turned')) {
      //   card.classList.add('turned');
      // } else if(card.classList.contains('turned')) {
      //   // let html = '';
      //   card.classList.remove('turned');
      // }
    });
  });
});
