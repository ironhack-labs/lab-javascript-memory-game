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
let tempArr = []

window.addEventListener("load", (event) => {
  memoryGame.shuffleCards()
  let html = ""
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`
    html += `<div class="back" name="${pic.img}"></div>`
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`
    html += `</div>`
  })

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here

      card.classList.add("turned")
      let cardName = card.getAttribute("data-card-name")
      tempArr.push(cardName)

      console.log(tempArr)
      console.log(`Card clicked: ${card}`)

      if (tempArr.length === 2) {
        document.querySelector("#pairs-clicked").innerText =
          memoryGame.pairsClicked
        let card1 = tempArr[0]
        console.log(card1)
        let card2 = tempArr[1]
        console.log(card2)
        tempArr = []

        const isMatch = memoryGame.checkIfPair(card1, card2)

        if (!isMatch) {
          document.querySelectorAll(".turned").forEach((el) => {
            setTimeout(() => {
              el.classList.remove("turned")
            }, 800)
          })
        } else {
          document.querySelector("#pairs-guessed").innerText =
            memoryGame.pairsGuessed

          document.querySelectorAll(".turned").forEach((el) => {
            setTimeout(() => {
              el.classList.add("blocked")
            }, 600)
          })
          const isFinished = memoryGame.isFinished()
          if (isFinished) {
            setTimeout(() => {
              document.querySelectorAll(".card").forEach((el) => {
                el.classList.add("faded")
              })
            }, 2000)

            document.querySelector(
              "#memory-board"
            ).innerHTML = `<div class="finished"><h1>You won!!!</h1><button id="refresh">Play again!</button></div>`

            document
              .querySelector(".finished")
              .addEventListener("click", () => {
                window.location.reload()
              })
          }
        }
      }
    })
  })
})
