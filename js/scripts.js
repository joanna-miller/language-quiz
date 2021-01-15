$(document).ready(function () {
  $("#quiz").submit(function(event) {
    const colorAnswer = parseInt($("#color").val());
    const seasonAnswer = parseInt($("#season").val());
    const foodAnswer = parseInt($("#food").val());
    const regionAnswer = parseInt($("#region").val());
    const musicAnswer = parseInt($("#music").val());
    event.preventDefault();
    
    if (colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer <= 5) {
      console.log("ruby");
    } else if (colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer >= 15) {
      console.log("python");
    } else {
      console.log("C#");
    }

  }); 
});

