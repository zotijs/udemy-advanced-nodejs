require("expect-puppeteer");

require("./models/User");

const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);
