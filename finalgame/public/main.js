$(function () {
  var socket = io();

  //Deal with getting username
  $('#userIdForm').submit(function() {
    console.log($('#userIdInput').val());
    socket.emit('new user', $('#userIdInput').val());
    $('#gameDiv').show();
    $('#logInDiv').hide();
    return false; //This tell jquery to not refresh the page
  });

  //Deal with getting the guess
  $('#guessForm').submit(function() {
    socket.emit('guess', $('#guessInput').val());
    $('#guessForm').hide();
    $('#waitingDiv').show();
    return false;
  });

  //This will be called when all users have guessed
  socket.on('allUsersHaveGuessed', function(msg) {
    $('#resultsDiv').append("The answer was: " + msg.answer + "<br>Winner: " + msg.winner + "<br>Guess: " + msg.winningGuess);
    $('#waitingDiv').hide();
    $('#resultsDiv').show();
  });
});
