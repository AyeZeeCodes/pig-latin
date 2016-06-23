var vowels = ["a","e","i","o","u"];
var newInput;

function vowelCheck(input) {
  vowels.forEach(function(vowel) {
    if (input.charAt(0) === vowel) {
      input = input + "ay";
    }
  });
  return input;

}

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val();
    //var result = vowel(wordInput);
     $("#output").text(vowelCheck(input));
  });
});
