var express = require("express");
var app = express();
var port = 8080;
var path = require('path');

app.use(express.static(path.resolve(__dirname + "/../build")));
app.use('/static/images', express.static(__dirname + "/../static/images"));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../build/index.html"));
});


// listening to specified port
app.listen(port, () => {
  console.log(
    "\n\n\n||||||||||||||||||||||||||||||||||||||||||||||||||\n",
    "             YOUR APP IS LISTENING",
    "\n||||||||||||||||||||||||||||||||||||||||||||||||||\n")
  console.log(
    "                   TO:", port);
});
