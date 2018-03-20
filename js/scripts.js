$(document).ready(function() {
  $(".clickable").click(function() {
    $("#show-NA").toggle();
    $("#show-SA").hide();
  });

  $(".clickTwo").click(function() {
    $("#show-SA").toggle();
    $("#show-NA").hide();
  });
});
