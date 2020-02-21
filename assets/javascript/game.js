// Waits for function to load
$(document).ready(function () {

  var wins = 0; // Variable to hold win count
  $("#wins").text(wins);
  var losses = 0; // Variable to hold loss count
  $("#losses").text(losses);
  var totalScore = 0; // Variable to store user score
  $("#total-score").text(totalScore);

  var targetNum = Math.floor(50 + Math.random() * 80); // Calculates random target number
  $("#target-num").text(targetNum);

  // Allows easier manipulation of gem elements
  var gem1 = $("#gem1");
  var gem2 = $("#gem2");
  var gem3 = $("#gem3");
  var gem4 = $("#gem4");

  gameSetup(); // Calls for game data to be outputted

  $(gem1).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue"); // Transfers crystal value into variable

    crystalValue = parseInt(crystalValue); // Translates string value into integer
    totalScore += crystalValue; // Adds crystal value to total

    $("#total-score").text(totalScore);

    // Decides win or loss condition and updates the respective value
    if (totalScore === targetNum) {
      wins++;
      $("#wins").text(wins);
      gameSetup();
    }
    else if (totalScore > targetNum) {
      losses++;
      $("#losses").text(losses);
      gameSetup();
    }
  });
  $(gem2).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue"); // Transfers crystal value into variable

    crystalValue = parseInt(crystalValue); // Translates string value into integer
    totalScore += crystalValue; // Adds crystal value to total

    $("#total-score").text(totalScore);

    // Decides win or loss condition and updates the respective value
    if (totalScore === targetNum) {
      wins++;
      $("#wins").text(wins);
      gameSetup();
    }
    else if (totalScore > targetNum) {
      losses++;
      $("#losses").text(losses);
      gameSetup();
    }
  });
  $(gem3).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue"); // Transfers crystal value into variable

    crystalValue = parseInt(crystalValue); // Translates string value into integer
    totalScore += crystalValue; // Adds crystal value to total

    $("#total-score").text(totalScore);

    // Decides win or loss condition and updates the respective value
    if (totalScore === targetNum) {
      wins++;
      $("#wins").text(wins);
      gameSetup();
    }
    else if (totalScore > targetNum) {
      losses++;
      $("#losses").text(losses);
      gameSetup();
    }
  });
  $(gem4).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue"); // Transfers crystal value into variable

    crystalValue = parseInt(crystalValue); // Translates string value into integer
    totalScore += crystalValue; // Adds crystal value to total

    $("#total-score").text(totalScore);

    // Decides win or loss condition and updates the respective value
    if (totalScore === targetNum) {
      wins++;
      $("#wins").text(wins);
      gameSetup();
    }
    else if (totalScore > targetNum) {
      losses++;
      $("#losses").text(losses);
      gameSetup();
    }
  });


  function gameSetup() {
    // Assigns random number to gem
    gem1.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
  
    // Assigns random number to gem while not being the same as the others
    gem2.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    while (gem2.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")) {
      gem2.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
    }
  
    // Assigns random number to gem while not being the same as the others
    gem3.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    while (gem3.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")
      || gem3.attr("data-crystalvalue") === gem2.attr("data-crystalvalue")) {
      gem3.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    }
  
    // Assigns random number to gem while not being the same as the others
    gem4.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    while (gem4.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")
      || gem4.attr("data-crystalvalue") === gem2.attr("data-crystalvalue")
      || gem4.attr("data-crystalvalue") === gem3.attr("data-crystalvalue")) {
      gem4.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    }

    // Outputs all game information
    targetNum = Math.floor(50 + Math.random() * 80);
    $("#target-num").text(targetNum);
  
    totalScore = 0;
    $("#total-score").text(totalScore);
  }


});

