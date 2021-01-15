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
    const ruby = $(".a");
    const python = $(".b").val();
    const cSharp = $(".c").val();
    
    console.log(ruby);
  
    event.preventDefault();
  });  
});

