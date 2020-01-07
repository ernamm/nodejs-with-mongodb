const expresss = require("express");
const bodyParser = require("body-parser");

const app = expresss(); // creates a express app

app.use(bodyParser.json()); // uses the bodyParser.json()
app.use(bodyParser.urlencoded({extended: false}));

// This is used to simulate a rote, just for test if the code is working!
// app.get('/', (req, res) => {
//     res.send(console.log("Ok"))
// });

require('./controllers/authController')(app); // this will pass the app to the authController.


app.listen(3000); // this makes the app liten to the port 3000 at localhost.