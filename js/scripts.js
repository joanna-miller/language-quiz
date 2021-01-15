$(document).ready(function () {
  $("#quiz").submit(function(event){
    const flavor = parseInt($("input:radio[name=color]:checked").val());
    event.preventDefault();
    console.log(flavor);
  });

});