var cards = [{
		name: "aquaman",
		img: "aquaman.jpg"
	},
	{
		name: "batman",
		img: "batman.jpg"
	},
	{
		name: "captain america",
		img: "captain-america.jpg"
	},
	{
		name: "fantastic four",
		img: "fantastic-four.jpg"
	},
	{
		name: "flash",
		img: "flash.jpg"
	},
	{
		name: "green arrow",
		img: "green-arrow.jpg"
	},
	{
		name: "green lantern",
		img: "green-lantern.jpg"
	},
	{
		name: "ironman",
		img: "ironman.jpg"
	},
	{
		name: "spiderman",
		img: "spiderman.jpg"
	},
	{
		name: "superman",
		img: "superman.jpg"
	},
	{
		name: "the avengers",
		img: "the-avengers.jpg"
	},
	{
		name: "thor",
		img: "thor.jpg"
	},
	{
		name: "aquaman",
		img: "aquaman.jpg"
	},
	{
		name: "batman",
		img: "batman.jpg"
	},
	{
		name: "captain america",
		img: "captain-america.jpg"
	},
	{
		name: "fantastic four",
		img: "fantastic-four.jpg"
	},
	{
		name: "flash",
		img: "flash.jpg"
	},
	{
		name: "green arrow",
		img: "green-arrow.jpg"
	},
	{
		name: "green lantern",
		img: "green-lantern.jpg"
	},
	{
		name: "ironman",
		img: "ironman.jpg"
	},
	{
		name: "spiderman",
		img: "spiderman.jpg"
	},
	{
		name: "superman",
		img: "superman.jpg"
	},
	{
		name: "the avengers",
		img: "the-avengers.jpg"
	},
	{
		name: "thor",
		img: "thor.jpg"
	}
];

$(document).ready(function () {
	var memoryGame = new MemoryGame(cards);
	memoryGame.pickedCards = cards;
	memoryGame.cards = memoryGame.shuffleCard(memoryGame.pickedCards);
	var html = "";
	memoryGame.cards.forEach(function (pic, index) {
		html += '<div class= "card" id="card_' + pic.name + '">';
		html += '<div class="back"';
		html += '    name="' + pic.img + '">';
		html += "</div>";
		html += '<div class="front" ';
		html += 'style="background: url(img/' + pic.img + ') no-repeat">';
		html += "</div>";
		html += "</div>";
	});

	// Add all the div's to the HTML
	document.getElementById("memory_board").innerHTML = html;
	// Bind the click event of each element to a function
	var contador = 0;
	var container = [];
	var a = "No tendras mas suerte la proxima vez";
	var b = "Buen intento"
	var c ="Uyyyy casi eh!"
	var g="No es tu dia... "
	var d="Ha sido suerte..."
	var e="Bien hecho!"
	var f="Por fin!!"
	var h="Progresas adecuadamente"
	var frasesMalas=[a,b,c,g];
	var frasesNoTanMalas=[d,e,f,h];
	var introduceTexto = $(".texto");
	introduceTexto.toggle();
	var boton = $(".button");
	boton.text("VICTORIA!")
	boton.toggle();
	$(".back").on("click", function () {
		contador++;
		var bro = $(this).next();
		$(this).toggleClass("front");
		$(this).toggleClass("back");
		bro.toggleClass("back");
		bro.toggleClass("front");
		container.push($(this));
		if (contador == 2) {
			$("#memory_board").addClass("negativo");
			contador = 0;
			if (!memoryGame.checkIfPair(
					$(container[0]).attr("name"),
					$(container[1]).attr("name")
				)) {
					aleatorio=Math.floor(Math.random()*4);
					introduceTexto.text(frasesMalas[aleatorio]).fadeIn("1000");
					var timeoutId = setTimeout(function () {
					$(container[1]).toggleClass("back");
					$(container[1]).toggleClass("front");
					$(container[1]).next().toggleClass("front");
					$(container[1]).next().toggleClass("back");
					$(container[0]).toggleClass("back");
					$(container[0]).toggleClass("front");
					$(container[0]).next().toggleClass("front");
					$(container[0]).next().toggleClass("back");
					container = [];
					$("#pairs_clicked").text(memoryGame.pairsClicked);
					$("#pairs_guessed").text(memoryGame.pairsGuessed);
					introduceTexto.fadeOut("1000");
					$("#memory_board").removeClass("negativo");
				}, 1000);
			} else {
				
				aleatorio=Math.floor(Math.random()*4);
				introduceTexto.text(frasesNoTanMalas[aleatorio]).fadeIn("1000");
				 setTimeout(function () {
		           $("#pairs_clicked").text(memoryGame.pairsClicked);
				 $("#pairs_guessed").text(memoryGame.pairsGuessed);
				 introduceTexto.fadeOut("1000");
				 $("#memory_board").removeClass("negativo")
				 container = [];
				}, 1000);
			}
			if (memoryGame.finished()) {
				boton.toggle()
				 boton.click(function(){
					 location.reload();
				 })
			}
		}
	});
});