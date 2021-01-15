$(document).ready(function () {
  $("#quiz").submit(function(event) {
    const colorAnswer = parseInt($("#color").val());
    const seasonAnswer = parseInt($("#season").val());
    const foodAnswer = parseInt($("#food").val());
    const regionAnswer = parseInt($("#region").val());
    const musicAnswer = parseInt($("#music").val());
    
    if (colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer <= 5) {
      $("#answer").show();
      $("#c, #python").hide();
    } else if (colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer >= 15) {
      $("#answer").show();
      $("#ruby, #python").hide();
    } else {
      $("#answer").show();
      $("#ruby, #c").hide();
    }
    event.preventDefault();
  }); 
});

