$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val();
     $("#output").text(wordCheck(input));
  });
});

var vowels = ["a","e","i","o","u"];

function wordCheck(input) {
  var words = input.split(" ");
  var output = ""
  for (var i = 0; i < words.length; i++) {
    output += vowelCheck(words[i]) + ' ';
  }
  return output;
}

function vowelCheck(input) {
  var pos = firstVowel(input);
  if (pos) {
    input = input.slice(pos) + input.slice(0, pos);
  }
  if ($.inArray(input.charAt(0), vowels) !== -1) {
    input = input + 'ay';
  }
  return input;
}

function firstVowel(input) {
  for (var i = 0; i < input.length; i++) {
    if ($.inArray(input.charAt(i), vowels) !== -1) {
      return i;
    }
  }
  return false;
}
