$(document).ready(function() {
  $(".clickable").click(function() {
    $("#show-NA").toggle();

    $("#show-SA").hide();
  });

  $(".clickTwo").click(function() {
    $("#show-SA").toggle();
    $("#show-NA").hide();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
