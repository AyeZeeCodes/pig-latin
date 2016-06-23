var vowels = ["a","e","i","o","u"];
var newInput;

function vowelCheck(input) {
  vowels.forEach(function(vowel) {
    if (input.charAt(0) === vowel) {
      input = input + "ay";
    } else if (input !== vowel) {
      var firstLetter = input.charAt(0);
      var newInput = input.slice(1);
      input = newInput + firstLetter + "ay";
      console.log(input);
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
