const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
const { getDb } = require('./db.js');

// Define the LocalStrategy for logging in
passport.use(new LocalStrategy(async (username, password, done) => {
  const db = await getDb();
  const collection = db.collection('users');
  const user = await collection.findOne({ username });

  if (!user) {
    return done(null, false, { message: 'Incorrect username or password.' });
  }

  if (!await bcrypt.compare(password, user.password)) {
    return done(null, false, { message: 'Incorrect username or password.' });
  }

  return done(null, user);
}));

// Define the JwtStrategy for authenticating requests
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}, async (payload, done) => {
  const db = await getDb();
  const collection = db.collection('users');
  const user = await collection.findOne({ _id: payload.sub });

  if (!user) {
    return done(null, false);
  }

  return done(null, user);
}));

// Serialize and deserialize user objects
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const db = await getDb();
  const collection = db.collection('users');
  const user = await collection.findOne({ _id: id });

  done(null, user);
});
