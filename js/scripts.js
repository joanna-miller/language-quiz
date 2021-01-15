$(document).ready(function () {
  $("#quiz").submit(function(event) {
    const colorAnswer = parseInt($("#color").val());
     event.preventDefault();
   
  if (colorAnswer === 1) {
    console.log("yes");
  }
  }); 
});

