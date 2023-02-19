The multiplayer dice poker game is like a big party where lots of people can come and play together on their computers or phones.

The game is made up of several different parts that work together to make the party fun and enjoyable for everyone. These parts are like different rooms in the party, each with its own purpose.

The game is built using a programming language called JavaScript, which is like the special secret code that tells the game what to do.

The game uses something called WebSocket connections, which is like a special telephone line that lets people talk to each other in real-time. This is important because it means that everyone at the party can talk to each other and play the game together at the same time.

The game also uses Passport.js, which is like a special guard at the door of the party. It makes sure that only people who are supposed to be at the party are allowed in, and keeps everyone else out.

The game stores all the progress and high scores of the players in something called a MongoDB database, which is like a big book where everyone's progress and scores are written down.

The game is controlled by Express, which is like a special boss who tells everyone what to do and makes sure that the party runs smoothly.

The Wallet class in wallet.js is like a special piggy bank that lets players keep track of their fake-money, so that they can bet and play the game.

The game uses something called Bitcoin Testnet to let players make fake-money deposits for the game, which is like a pretend bank that lets players put pretend money into their piggy banks.

Finally, Nginx is like a special traffic cop that directs all the people coming to the party to different rooms so that everyone can have a good time.


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



