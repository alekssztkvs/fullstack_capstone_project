// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

let dbInstance = null;

const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    const url = process.env.MONGO_URL;

    if (!url) {
        throw new Error("MONGO_URL is not defined in .env");
    }

    const client = new MongoClient(url);

    await client.connect();
    console.log("Connected to MongoDB");

    dbInstance = client.db(dbName);

    return dbInstance;
}


module.exports = connectToDatabase;