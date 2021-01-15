$(document).ready(function () {
  let forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
  

  $("#quiz").submit(function(event) {
    const colorAnswer = parseInt($("#color").val());
    const seasonAnswer = parseInt($("#season").val());
    const foodAnswer = parseInt($("#food").val());
    const regionAnswer = parseInt($("#region").val());
    const musicAnswer = parseInt($("#music").val());
    
    if (colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer >= -5 && colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer <= -2) {
      $("#answer").show();
      $("#c, #python").hide();
      $("#c-info, #python-info").hide();
    } else if (colorAnswer + seasonAnswer + foodAnswer + regionAnswer  + musicAnswer >= -1 && colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer <= 1) {
      $("#answer").show();
      $("#ruby, #c").hide(); 
      $("#ruby-info, #c-info").hide(); 
    } else if (colorAnswer + seasonAnswer + foodAnswer + regionAnswer + musicAnswer >= 2) {
      $("#answer").show();
      $("#ruby, #python").hide();
      $("#ruby-info, #python-info").hide();
    }
    event.preventDefault();
  });  
});

