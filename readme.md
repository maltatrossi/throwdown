Multiplayer Dice Poker Game
Overview
This is a multiplayer dice poker game that allows 2-8 players to play a game of dice poker over the internet. The game is played using JavaScript and WebSocket connections, and features three rounds of rolling dice and betting. After all players have finished rolling, the game reveals all players' dice and determines the winner based on the highest hand.

File Structure
The project is structured using separate files for each class or function, including:

main.js: handles WebSocket connections and game events
player.js: defines the Player class and methods for managing player information
dice.js: defines the Dice class and methods for rolling and displaying dice
chat.js: defines the Chat class and methods for sending and receiving chat messages
paths.js: sets up the game architecture to follow a set of game rules
rules.js: defines the game rules, including the number of rounds and revealing all players' dice
multiplayer.js: uses socket.io to handle WebSocket connections and game events
server.js: handles HTTP requests and serves the game files
db.js: sets up a MongoDB database to store player progress and high scores
Auth.js: implements authentication using Passport.js
Features
The game includes the following features:

Three rounds of rolling dice and betting
Revealing all players' dice after all have finished rolling
In-game currency management using the Wallet class
Chat functionality
Authentication using Passport.js
MongoDB database to store player progress and high scores
Getting Started
To run the game, you will need to have Node.js and MongoDB installed on your computer. Once you have cloned the repository, run npm install to install the necessary packages.

To start the game, run npm start in the terminal. The game will be served at localhost:3000 by default.

Contributing
If you would like to contribute to the project, feel free to fork the repository and submit a pull request. We welcome any contributions that can help improve the game!



