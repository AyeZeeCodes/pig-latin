$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var wordInput = $("input#word").val();

    $("#output").text(wordInput).show();
  });
});
