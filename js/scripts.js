
function vowelCheck(input) {
  var vowels = ["a","e","i","o","u"];
  if (($.inArray(input.charAt(0), vowels) === -1) && ($.inArray(input.charAt(1), vowels) !== -1)) {
    input = input.slice(1) + input.charAt(0);
  }
  if ($.inArray(input.charAt(0), vowels) !== -1) {
    input = input + 'ay';
  }

    return input;
}

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val();
     $("#output").text(vowelCheck(input));
  });
});
