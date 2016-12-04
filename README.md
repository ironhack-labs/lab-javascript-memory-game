# JS | Memory Game

Do you remember that game called Memory that you used to play in with actual paper tiles? To win, you needed to remember the position of tiles. 

The game consists of an even number of tiles with images on one side and a generic back. Each image appears on precisely two tiles.

![Memory Game Boar](https://i.imgur.com/H6GLZGQ.jpg)


When the game starts, all tiles are turned face down. The player then flips over two cards, selecting them by clicking on them. If the two tiles have the same image, they remain face up. Otherwise, the tiles flip back over after a small period of time.

The goal of the game is to get all the tiles flipped face up in the least number of tries. That means that lower number of tries are better scores.

## Let's do this in JavaScript!

To code the game, on one hand we will need to re-create the physical parts of the game (the layout). On the other hand, we will implement the rules of the game (the logic). We will make a single-player version of the game, which will simplify some of the logic.

Remember: organization is the key. Keep the JavaScript related to your layout and your user interface in one section of your file and the JavaScript related to the code in another section.

For now, it won't be necessary to create several files.

### Think about the layout

- Add to your html the parts you'll game will have. The board, the tiles and the score.


### The Logic

- Begin by thinking about the interactions your user and the game will have: basically the user will click on elements of the page and receive a result - wether he guessed the pair or not.






