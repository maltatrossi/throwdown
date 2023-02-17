const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'dicepoker';

async function connectToDatabase() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db(dbName);
  console.log('Connected to database');
  return db;
}

async function getPlayers() {
  const db = await connectToDatabase();
  const collection = db.collection('players');
  const players = await collection.find().toArray();
  return players;
}

async function addPlayer(player) {
  const db = await connectToDatabase();
  const collection = db.collection('players');
  const result = await collection.insertOne(player);
  console.log(`Added player ${player.name} to database`);
  return result.insertedId;
}

async function updatePlayer(player) {
  const db = await connectToDatabase();
  const collection = db.collection('players');
  const result = await collection.updateOne({ _id: player._id }, { $set: player });
  console.log(`Updated player ${player.name} in database`);
  return result.modifiedCount;
}

async function deletePlayer(playerId) {
  const db = await connectToDatabase();
  const collection = db.collection('players');
  const result = await collection.deleteOne({ _id: playerId });
  console.log(`Deleted player with ID ${playerId} from database`);
  return result.deletedCount;
}

module.exports = { getPlayers, addPlayer, updatePlayer, deletePlayer };
