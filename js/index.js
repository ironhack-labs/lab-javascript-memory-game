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
]
const memoryGame = new MemoryGame(cards)
memoryGame.shuffleCards()
window.addEventListener("load", (event) => {
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
		card.addEventListener("click", (event) => {
			// TODO: write some code here
			memoryGame.pickedCards.push(event.target.parentNode)
			console.log(event.target.parentNode)
			card.classList.add("turned")
			console.log(memoryGame.pickedCards)
			if (memoryGame.pickedCards.length == 2) {
				setTimeout(() => {
					let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
					let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")
					document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked
					console.log(card1, card2)
					if (!memoryGame.checkIfPair(card1, card2)) {
						console.log("Here")
						memoryGame.pickedCards.forEach((card) => card.classList.remove("turned"))
					} else {
						memoryGame.pickedCards.forEach((card) => card.classList.add("blocked"))
						if (memoryGame.isFinished()) {
							alert("You won")
						}
						document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed
						console.log("match")
					}
					memoryGame.pickedCards = []
				}, 1000)
			}
		})
	})
})
