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
]

const memoryGame = new MemoryGame(cards)

function flipCard(elem1, elem2) {
  elem1.classList.toggle("back")
  elem2.classList.toggle("back")
  elem1.classList.toggle("front")
  elem2.classList.toggle("front")
}

document.addEventListener("DOMContentLoaded", function(event) {
  memoryGame.shuffleCards()
  let html = ""
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`
    html += `<div class="back" name="${pic.img}"></div>`
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`
    html += `</div>`
  })
  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(card => {
    card.onclick = function() {
      let parentCard = card.parentNode
      let front = parentCard.querySelector(".front")
      flipCard(card, front)
      memoryGame.pickedCards.push(parentCard)
      if (memoryGame.pickedCards.length < 2) return
      if (!memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute("data-card-name"),
          memoryGame.pickedCards[1].getAttribute("data-card-name")
        )
      ) {
        let timeoutId = setTimeout(() => {
          memoryGame.pickedCards.forEach(cardBack => {
            let back2 = cardBack.querySelector(".back")
            let front2 = cardBack.querySelector(".front")
            flipCard(back2, front2)
            memoryGame.pickedCards = []
          })
        }, 500)
      } else {
        memoryGame.pickedCards = []
        document.getElementById("pairs_guessed").innerText =
          memoryGame.pairsGuessed
      }
      document.getElementById("pairs_clicked").innerText =
        memoryGame.pairsClicked
      if (memoryGame.isFinished())
        setTimeout(() => {
          alert("You won!")
        }, 200)
    }
  })
})
