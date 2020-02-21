$(document).ready(function () {

  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  $(".total-score").text(totalScore);

  var targetNum = Math.floor(50 + Math.random() * 80);
  $("#target-num").text(targetNum);
  console.log(targetNum)

  var gem1 = $("#gem1");
  var gem2 = $("#gem2");
  var gem3 = $("#gem3");
  var gem4 = $("#gem4");

  gem1.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));

  gem2.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
  while (gem2.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")) {
    gem2.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
  }

  gem3.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
  while (gem3.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")
    || gem3.attr("data-crystalvalue") === gem2.attr("data-crystalvalue")) {
    gem3.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
  }

  gem4.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
  while (gem4.attr("data-crystalvalue") === gem1.attr("data-crystalvalue")
    || gem4.attr("data-crystalvalue") === gem2.attr("data-crystalvalue")
    || gem4.attr("data-crystalvalue") === gem3.attr("data-crystalvalue")) {
    gem4.attr("data-crystalvalue", Math.floor(1 + Math.random() * 15));
  }


  $(gem1).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    $(".total-score").text("");
    $(".total-score").text(totalScore);
  });
  $(gem2).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;


    $(".total-score").text(totalScore);
  });
  $(gem3).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    $(".total-score").text(totalScore);
  });
  $(gem4).on("click", function () {
    var crystalValue = $(this).attr("data-crystalvalue");

    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    $(".total-score").text(totalScore);
  });






});