// import required modules and files
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// import custom modules
const player = require('./player');
const dice = require('./dice');
const chat = require('./chat');
const paths = require('./paths');
const rules = require('./rules');
const multiplayer = require('./multiplayer');
const server = require('./server');
const db = require('./db');
const auth = require('./auth');
const wallet = require('./wallet');
const encryption = require('./encryption');
const depositApp = require('./bitcoinwallet/depositApp');
const withdrawApp = require('./bitcoinwallet/withdrawApp');

// set up database connection and session store
mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const store = new MongoDBStore({
  uri: db.url,
  collection: 'sessions',
});

// set up app middleware
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: auth.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(encryption.encryptMiddleware);

// set up routes
app.use('/', paths.router);
app.use('/auth', auth.router);
app.use('/wallet', wallet.router);
app.use('/bitcoin/deposit', depositApp.router);
app.use('/bitcoin/withdraw', withdrawApp.router);

// set up websockets
const io = socketIO(server.server);
multiplayer.setIO(io);

// set up game logic
const game = rules.initGame();
player.setGame(game);
dice.setGame(game);

// start the server
server.start(app, store);
