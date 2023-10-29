![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | DOM Memory Game

<br>


![Memory Game Board](https://i.imgur.com/H6GLZGQ.jpg)



 ## Learning Goals

  <details>

####  Upon completion of this exercise, you will be able to:

- Select HTML elements using JavaScript DOM methods and properties.
- Access and modify content of HTML elements using JavaScript DOM properties.
- Add and remove HTML elements to/from the DOM using JavaScript DOM methods and properties.
- Add and remove event listeners to respond to user actions, such as button clicks.
- Iterate over lists of HTML elements and perform actions on each element, (e.g., accessing values, adding or removing events).
- Manipulate HTML element properties, values and attributes using JavaScript DOM methods and properties: `element.setAttribute()`, `element.getAttribute()`, `element.classList.add()`, `element.classList.remove()`, `element.classList.toggle()`, `classList`, `style`, `value`, and `type`.
- Use classes and OOP to organize data, functionality, and game elements.
- Create a simple 2d game using HTML, CSS, JavaScript, and DOM.

  <br>

  <hr>

</details>

<br>

## Introduction

We just learned how to use JavaScript to manipulate DOM elements. Great! Let's practice a bit more and have fun while developing a game.

<br>

## Requirements

- Fork this repo.

- Clone this repo.

  

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your TAs can check your work.



<br>

## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on the code you'll write in the `src/memory.js` file. In case you want to check the tests, they are in the `tests/memory.spec.js` file.


To run the tests, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.


To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## The game rules

Do you remember that game called Memory that you used to play with the actual paper cards? To win, you needed to memorize the position of the paired card. Well, the logic of the game we will be building is the same.

**The deck:**

- The deck consists of an even number of cards with a specific image on one side and a generic blue background on the other side.
- Each image appears on two cards.

**The rules:**

- When the game starts, all cards are turned face down.
- The player then flips over two cards, selecting them by clicking on them.
- If the selected two cards have the same image, they remain face up. Otherwise, the cards flip back over after a short time.

The goal of the game is to get all the cards flipped face-up in the least number of tries. That means that a lower number of attempts scores better.

_Side note:_ We will make a ***single-player*** version of the game, which will simplify some of the logic.

<br>

## Instructions


### Iteration 0: Initial set up

First, you will do some routine work: we need to make sure that all files we need are connected to the file that is rendering cards in the browser.

The file that is rendering the cards is actually `index.html`, so we have to **make sure that the _styles_ and _JS files_ are loading** when we open the game in the browser:

- **styles**: link the provided CSS file `styles/style.css` in the `<head>` of the `index.html` page.
- **logic and functionality**: you already have one file for the logic, `src/memory.js` and one file for the HTML/CSS interactions (DOM manipulation), `src/index.js`. Link these two file at the bottom of the `<body>` of the `index.html` page.
- **data**: `src/deck.js` contains an array of 'card' objects will be using to build the cards of this game. The file's already been linked.

```html
    <!-- load first the file with the cards array so we can use cardsData in index.js-->
    <script src="./src/deck.js"></script>
```

After linking all the files, open the `index.html` with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). If you've linked them in the correct order, you should be able to see the board, the cards, and the score.

<br>

### Iteration 1: The game logic

You will be working in the `src/memory.js` file, and you will see that it is preset for you.

In this part you'll define the methods that will take care of the game logic. No visible result will be shown just yet.

As you'll be using OOP, let's briefly list what you'll need in the `MemoryGame` class:

1. _Properties_ to store: the deck used to playing with, the cards' pair picked in a round, the amount of pairs has already been clicked on, and the pairs guessed.
2. A _method_ to _shuffle_ the deck before start playing ( 🌟BONUS ).
3. A _method_ to _compare cards_, to see if they match.
4. And a _method_ to check if the game is finished, and the player has won.

But, let's do this step by step 😉.

#### Iteration 1.1: Initialize propertiest

A `MemoryGame` class has already been created. Its constructor receive an array of cards as a parameter, and set this array to a `this.cards` property.

```javascript
class MemoryGame {
  constructor(cards) {
    this.cards = cards;

```
Go ahead and add the other properties needed to the constructor.

- `this.pickedCards`: it's an array where you will be storing the cards the player has clicked . 
- `this.pairsClicked`: where the number of pairs the user choose will be added (equal to say, the number of turn played ). 
- `this.pairsGuessed`: where the number of pairs guessed will be added. 


#### Iteration 1.2: Compare cards 

When the player picks 2 cards, we will have to update _pairsClicked_ ( it doesn't matter if the cards are the same ), we will need to check if they are the same, and update _pairsGuessed_ if they are.

So, to summarize, the `checkIfPair()` method should:

- receive two parameters, `card1` and `card2`.
- increase `pairsClicked` by 1.
- if the cards are the same add 1 to `pairsGuessed`.
- return `true` or `false` depending on the result of comparing cards.

#### Iteration 1.3: Win check

Finally, we need to make sure our game ends. The the player to win has to guess all the pairs. 

The `checkIfFinished()` method should: 

- check if the property `pairsGuessed` has reached _the numbers of pairs the cards' deck has_.
- return `true` or `false` depending on the result.

_Hint_ 💡: Make it generic! This means valid despite the number of cards a deck might have.

<br>


### Iteration 2: DOM & Interactions

Once you have completed the iterations ( without BONUS 😉 ) of the memory game logic, you can move forward to `src/index.js` and work on the DOM interactions. 

_We consider an interaction to be the relationship between a user's action and how our page reacts._

#### Iteration 2.0: Code given

Few things has already been done for us:

1. A new instance of the `MemoryGame` class, passing the `cardsData` array (stored `deck.js`), as argument. Therefore you can access properties and invoke methods of that class.

```javascript
const memoryGame = new MemoryGame(cardsData);
```

2. Each card's information is dynamically filled in the tiles, and the board is pre-filled with cards. As we want this behavior to be triggered as soon as the page loads, we need to wrap it under a `load` event.

```javascript

window.addEventListener('load', (event) => {
    ...
});
```

3. For each element with class 'card' an click event listener is added.
For now, if you click on every single card, you can get some information about that specific card. Check it out opening the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console) in your browser.

```javascript

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {

    console.log('Card clicked: ', card);

  });
});
```

Think about the interactions the player and the game will have... The player clicks on elements of the page (cards) and  receives some results - whether they guessed the pair or not.

- how do we get the movement/flipping sides effect?

- how we keep the cards showing images if they are found to be the same? 

- how do we make cards flip back to the blue background if the cards are not the same? 

- All working only with two cards at the same time.

_Hint_ 💡: The array of picked cards can't ever hold more than two cards.

Let's make things happen combining the memoryGame logic and DOM manipulation methods!

#### Iteration 2.1: No more then two cards

You'll always working with no more then two cards at the time.
So, as long as there are less then 2 cards picked, the clicked card will flip.

As long as there are less then 2 cards picked you should:

- store the clicked card into the pickedCars array.

- turn the clicked card 

_Hint_💡: How to get a card flip... take a look at `styles/style.css`.

```css
.card {
  display: inline-block;
  perspective: 300px;
  transform-style: preserve-3d;
  position: relative;
}

.card.turned {
  /* disable all events binded 
  https://www.w3schools.com/cssref/css3_pr_pointer-events.php */
  pointer-events: none;
}

.card.turned .front {
  /* give 3d rotation effect 
  https://www.w3schools.com/cssref/css3_pr_transform-origin.php */
  transform: rotateY(0deg);
}
.card.turned .back {
  /* give 3d rotation effect */
  transform: rotateY(180deg);
}
```

To make the card flip you have to add the class `turned` next to the class `card` of the `div` that represents that card. In this way the rotation back-front will be activated, and the click event will be disabled.

```html
<!-- Before clicking, only display the back -->
<div class="card" data-card-name="ironman">

<!-- After flipping -->
<div class="card turned" data-card-name="ironman">
```

Here some options you can use to achieve this result:

[add, remove, toggle](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

#### Iteration 2.2: Two cards

If 2 cards have been picked, they will stay 'face up'. Also you want to check if the player got a pair. And to do so, the two picked cards should have the same name! (Example: `ironman`, and `ironman`)

If 2 cards have been picked you should:
  
- find where the information we need to compare the cards is stored. (check the console! console.log(card)).

- extract for both cards the info.

- invoke the `.checkIfPair(card1, card2)` passing the cards' info.

  1. It's a pair:

     - class `blocked` should be added to both cards, to keep them flipped (face-up).

     - the picked card array should be cleaned (ready for another turn)

  2. It's not a pair:

      - set a timeout that after 1 second will flip both cards back (remove class `turned`) and clean the picked card array (ready for another turn)

#### Iteration 2.3: Check if finish


At the end of every round, make sure you call `checkIfFinished` method to check if the condition for the end of the game is true, and if so, you can just alert the end, for now... or be more creative and add some text on the canvas - displaying _You won!!!_

<br>

## 🌟 Bonus

1. Be more creative 🏆! Instead of using an alert, display a nice message of your choice, replacing the completed board.

2. Display the number of pairs clicked and pairs guessed in the browser.

3. Create logic for the method `shuffleCards()` to shuffle the cards - every time you create a new game, the order of the cards should change,
remember to invoke the method in index.js.

   **Hint:** Do your own research🧐 or you could also implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). 

<br>

**Happy coding!** 💙
