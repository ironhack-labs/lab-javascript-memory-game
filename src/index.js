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

function toggleCards(card, classes) {
	classes.forEach((className) => card.classList.toggle(className));
}

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

	// Bind the click event of each element to a function
	document.querySelectorAll(".card").forEach((card) => {
		card.addEventListener("click", () => {
			// TODO: write some code here
			const pairsClicked = document.getElementById("pairs-clicked");
			const pairsGuessed = document.getElementById("pairs-guessed");

			toggleCards(card.children[0], ["back", "front"]);
			toggleCards(card.children[1], ["back", "front"]);

			memoryGame.pickedCards.push(card);

			// console.log(memoryGame.pickedCards);

			if (memoryGame.pickedCards.length === 2) {
				const firstPick = memoryGame.pickedCards[0];
				const secondPick = memoryGame.pickedCards[1];

				const card1 = firstPick.getAttribute("data-card-name");
				const card2 = secondPick.getAttribute("data-card-name");

				// console.log(card1, card2);

				if (memoryGame.checkIfPair(card1, card2)) {
					memoryGame.pickedCards = [];

					firstPick.classList.add("turned");
					secondPick.classList.add("turned");

					pairsGuessed.innerText = memoryGame.pairsGuessed;
				} else {
					setTimeout(() => {
						toggleCards(firstPick.children[0], ["back", "front"]);
						toggleCards(firstPick.children[1], ["back", "front"]);
						toggleCards(secondPick.children[0], ["back", "front"]);
						toggleCards(secondPick.children[1], ["back", "front"]);
					}, 600);

					memoryGame.pickedCards = [];
				}

				pairsClicked.innerHTML = memoryGame.pairsClicked;
			}
		});
	});
});
