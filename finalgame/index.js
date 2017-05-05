// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

//Choose a random number between 0 and 10, this will be the number that the
//players are trying to guess
var randomGuess = Math.floor(Math.random() * 10);

//We will use this object to hold all of the player's guesses
var guesses = {};

io.on('connection', function (socket) {

  socket.on('new user', function (id) {
    socket.userId = id;
  });

  socket.on('guess', function (guess) {
    guesses[socket.userId] = parseInt(guess); //parseInt is a helper function

    //This is how you find out how many keys are in an associative array in js
    var numGuesses = Object.keys(guesses).length;
    // console.log("we've gotten: " + numGuesses + " guesses");
    if (numGuesses >= 2) {

      //Determine the winner
      var winner = "";
      var closestDistance = -1;
      for (var userId in guesses) {
        var guess = guesses[userId];
        var distanceBetweenGuessAndAnswer = Math.abs(randomGuess - guess);
        if (closestDistance == -1 || distanceBetweenGuessAndAnswer < closestDistance) {
          closestDistance = distanceBetweenGuessAndAnswer;
          winner = userId;
        }
      }

      // Announce the winner to everyone
      io.emit('allUsersHaveGuessed', {
        winner: winner,
        answer: randomGuess,
        winningGuess: guesses[winner]
      });
    }
  });
});
