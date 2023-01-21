require("expect-puppeteer");

require("./models/User");

const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

// const { MongoMemoryServer } = require("mongodb-memory-server");
// const mongoose = require("mongoose");

// let mongo;

// beforeAll(async () => {
//   mongo = new MongoMemoryServer();
//   const mongoUri = await mongo.getUri();

//   await mongoose.connect(mongoUri);
// });

// beforeEach(async () => {
//   const collections = await mongoose.connection.db.collections();

//   for (let collection of collections) {
//     await collection.deleteMany({});
//   }
// });

// afterAll(async () => {
//   await mongo.stop();
//   await mongoose.connection.close();
// });
