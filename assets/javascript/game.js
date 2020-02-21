$(document).ready(function () {

  var wins = 0;
  $("#wins").text(wins);
  var losses = 0;
  $("#losses").text(losses);
  var totalScore = 0;
  $("#total-score").text(totalScore);

  var targetNum = Math.floor(50 + Math.random() * 80);
  $("#target-num").text(targetNum);

  var gem1 = $("#gem1");
  var gem2 = $("#gem2");
  var gem3 = $("#gem3");
  var gem4 = $("#gem4");

  gameSetup();

  $(gem1).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    $("#total-score").text(totalScore);

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
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;


    $("#total-score").text(totalScore);

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
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    $("#total-score").text(totalScore);

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
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    $("#total-score").text(totalScore);

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
    gem1.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
  
    gem2.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    while (gem2.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")) {
      gem2.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
    }
  
    gem3.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    while (gem3.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")
      || gem3.attr("data-crystalvalue") === gem2.attr("data-crystalvalue")) {
      gem3.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    }
  
    gem4.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    while (gem4.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")
      || gem4.attr("data-crystalvalue") === gem2.attr("data-crystalvalue")
      || gem4.attr("data-crystalvalue") === gem3.attr("data-crystalvalue")) {
      gem4.attr("data-crystalvalue", Math.floor(1 + Math.random() * 12));
    }

    targetNum = Math.floor(50 + Math.random() * 80);
    $("#target-num").text(targetNum);
  
    totalScore = 0;
    $("#total-score").text(totalScore);
  }


});

