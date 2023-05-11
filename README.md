![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | DOM Memory Game

<br>


![Memory Game Board](https://i.imgur.com/H6GLZGQ.jpg)

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>
  Upon completion of this exercise, you will be able to:

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

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/memory.spec.js` file.



To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.



To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions



### Iteration 0: The game rules

Do you remember that game called Memory that you used to play with the actual paper cards? To win, you needed to memorize the position of the paired card. Well, the logic of the game we will be building is the same.

- The game consists of an even number of cards (precisely, **24**) with a specific image on one side and a generic blue background on the other side.
- Each image appears on two cards.

**The game rules:**

- When the game starts, all cards are turned face down.
- The player then flips over two cards, selecting them by clicking on them.
- If the selected two cards have the same image, they remain face up. Otherwise, the cards flip back over after a short time.

The goal of the game is to get all the cards flipped face-up in the least number of tries. That means that a lower number of attempts scores better.





<br>

### Iteration 1: Initial set up

First, you will do some routine work: we need to make sure that all files we need are connected to the file that is rendering cards in the browser.

The file that is rendering the cards is actually `index.html`, so we have to **make sure that the _styles_ and _JS files_ are loading** when we open the game in the browser:

- **styles**: link the provided CSS file `styles/style.css` in the `<head>` of the `index.html` page,
- **the logic**: take a look at the `src/index.js` and `src/memory.js` files. You already have one file for the logic and one file for the HTML/CSS interactions (DOM manipulation). Link these two file at the bottom of the `index.html` page.

After you linking the files in `index.html` page, you should be able to see the board, the cards, and the score.

<br>



### Iteration 2: Plan your game

In this iteration, you will work on the game logic. You can see this part, like defining the methods that will take care of the game logic. No visible result will be shown just yet, and we will make sure everything works properly just by printing everything in the console.



You will be working in the `src/memory.js` file.



The game logic for this game is pretty simple:

1. we need a `MemoryGame` class,
2. we need a _method_ to _shuffle_ cards,
3. we need a _method_ to _compare cards_, and
4. we need a _method_ to check if the game is finished.

_Side note:_ We will make a single-player version of the game, which will simplify some of the logic.

Let's do this step by step.

<br>

#### Iteration 2.1: The `MemoryGame` class

If you open `src/memory.js` file, you will see that it is preset for you:

```js
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
  }
  shuffleCards() {
    // ...
  }
  checkIfPair(card1, card2) {
    // ...
  }
  checkIfFinished() {
    // ...
  }
}
```

1. The `MemoryGame` class: we created a `MemoryGame` class and, as we can see in its constructor, it will receive an array of cards as a parameter and set this array to a `this.cards` property.
2. We also need a `this.pickedCards` array, where we will be storing the cards the user has clicked so we can compare them.
3. Finally, a `this.pairsClicked` and `this.pairsGuessed` properties where will be adding every time a user choose and guess a pair. Go ahead and add these to the constructor.

<br>

#### Iteration 2.2: The class methods

1. Create logic for the method `shuffleCards()` to shuffle the cards - every time you create a new game, the order of the cards should change.

   **Hint:** It would be a good idea to implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). If you struggle with this method, you can skip it for the moment and go back to it later.

2. When a user picks 2 cards, we will need to check if they are the same. Let's create logic for the method `checkIfPair()`, which will receive two parameters, the names of both cards selected by the user (example: `'ironman'` and `'batman'`). The method will add 1 to our `pairsClicked` property, and if the cards are the same also add 1 to `pairsGuessed`. It should return `true` or `false` depending on the result of comparing both cards.

   So, to summarize, we will have to update _pairsClicked_ on every two open cards by a user - it doesn't matter if the cards are the same. If two cards that we are comparing are the same, then _pairsGuessed_ gets updated with +1.

3. Finally, we need to make sure our game ends, and for that, we can add some logic to the `checkIfFinished()` method. Here we need to check if our property `pairsGuessed` has reached _the numbers of pairs the game has_.

<br>


### Iteration 3: DOM & Interactions

Once you have completed the implementation of the memory game logic or functionality, you will move forward to `src/index.js` and work on the DOM interactions. 

What do we consider as interaction is what happens when the user clicks on the card:

- how do we get the movement/flipping sides effect,

- how we keep the cards showing images if they are found to be the same and
  -how do we make cards flip back to the blue background if the cards are not the same? All the time, keep in mind, we need to work only with two cards at the same time.

<br>

Think about the interactions your user and the game will have: basically, the user will click on elements of the page (cards) and receive some result - whether they guessed the pair or not.

- The first thing that is done for us - each card's information is dynamically filled in the tiles, and the board is pre-filled with cards for us. As we want this behavior to be triggered as soon as the page loads, we need to wrap it under a `load` event. This is also already done for us.

```javascript
// src/index.js

window.addEventListener('load', (event) => {
  // some code goes here
});
```

- The other important interaction is the click event listener. On click on every single card, we can get some information about that specific card. This code snippet, which is also already provided for us, serves for that.

```javascript
// src/index.js

// Bind the click event of each element to a function
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    // TODO: write some code here
    console.log('Card clicked: ', card);
  });
});
```

To flip a card, you can have multiple approaches. We will give you two possible ways (but you can find even more than that):

- Option 1: on click, add the class `turned` next to the class `card` to the `div` that represents each card - like in the following example:

```html
<!-- Only display the back that is blue -->
<div class="card" data-card-name="ironman">
  <div class="back" name="ironman.jpg"></div>
  <div class="front" style="background: url(img/ironman.jpg) no-repeat"></div>
</div>

<!-- After flipping -->
<div class="card turned" data-card-name="ironman">
  <div class="back" name="ironman.jpg"></div>
  <div class="front" style="background: url(img/ironman.jpg) no-repeat"></div>
</div>
```

- Option 2: another alternative is to toggle the classes _back_ and _front_ when the user clicks on a card. For this functionality, the method `element.classList.toggle()` can be very helpful. This method receives a string as the first argument (the class to toggle). [It can also receive a second _optional_ argument with a boolean expression](https://stackoverflow.com/questions/23663151/whats-the-point-of-the-second-argument-in-element-classlist-toggle/23663302#23663302) (in that case, the class is added when the expression is true, and removed when the expression is false):

```javascript
/* one argument */
el.classList.toggle('foobar');
// if it doesn't have the class 'foobar' --> add the class 'foobar'
// if it already has the class 'foobar' --> remove the class 'foobar'

/* two arguments */
el.classList.toggle('abc', someBool);
// if someBool evaluates to true -> add the class 'abc'
// if someBool evaluates to false -> remove the class 'abc'
```

Now when you have cards flipping from back to front and vice versa, you have to make sure you call `.checkIfPair(card1, card2)` method. If the two cards are the same, they should get class _blocked_, which is going to keep them flipped so we can see images.

_Hint 1_: The array of picked cards can't ever hold more than two cards.
_Hint 2_: Make sure you call `checkIfFinished` method to check if the condition for the end of the game is true, and if so, you can just alert the end, or be more creative and add some text on the canvas - displaying _You won!!!_

<br>

## Extra Resources

- [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

<br>

**Happy coding!** 💙
