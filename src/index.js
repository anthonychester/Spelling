import "./styles.css";

var words = ["cow", "dog", "cat"];
var ask = [];

for (var i = 0; i < words.length; i++) {
  var word = words[i];
  var rand = Math.floor(Math.random() * words.length) + 1;
  if (rand === 0) {
    rand = rand + 1;
  }
  var char = word.charAt(rand);
  word = word.replace(char, "_");

  ask.unshift(word);
}

function askWord(str) {
  var lo = str.search("_");
  var p1 = str.slice(lo, 0);
  var p2 = str.slice(0, lo);
  //var out = "<form>";
  var out = out + p1;
  //out = +'<input type="text" id="fname" name="fname"><br>';
  out = out + p2;
  //out = out + `</form>`;
  return out;
}
document.getElementById("app").innerHTML = ask + "<br>";

for (i = 0; i > ask.length; i++) {
  var qt = askWord(ask[i]);
  document.getElementById("test").innerHTML =
    document.getElementById("test").innerHTML + qt;

  console.log(qt);
}
