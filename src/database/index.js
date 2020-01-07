const mongoose = require("mongoose"); // requires mongoose that's is used to connect with our db

const uri = 'mongodb://localhost/noderest';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // makes the connection with the mongodb database
mongoose.Promise = global.Promise; // don't know what this do(?) - need to search this latter

module.exports = mongoose; // this exportes this code as a module on NodeJS