$(document).ready(function () {
  $("#quiz").submit(function(event) {
    const colorAnswer = $("#color").val();
    const seasonAnswer = $("#season").val();
    const foodAnswer = $("#food").val();
    const regionAnswer = $("#region").val();
    const musicAnswer = $("#music").val();
    event.preventDefault();
    
    if (colorAnswer === 1) {
      $("#answer").show();
  
  }); 
});

