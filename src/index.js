//import "./styles.css";

var words = ["cow", "dog", "cat"];
var ask = [];

for (var i = 0; i < words.length; i++) {
  var word = words[i];
  var rand = Math.floor(Math.random() * words.length) + 1;
  if (rand === 0) {
    rand = rand + 1;
  }
  if (rand === words[i].length) {
    rand = rand - 1;
  }
  var char = word.charAt(rand);
  word = word.replace(char, "_");
  console.log(word);

  ask.unshift(word);
}

function askWord(strin) {
  var lo = strin.search("_");
  //console.log(lo);
  var p1 = strin.slice(0, lo);
  var p2 = strin.slice(lo + 1);
  var out = "<form>";
  var out = out + p1;
  out = out +'<input type="text" id="fname" name="fname" size="1">';
  //out = out + " ";
  out = out + p2;
  out = out + `</form>`;
  console.log(p1);
  return out;
}
document.getElementById("app").innerHTML = ask + "<br>";

for (i = 0; i < ask.length; i++) {
  qt = askWord(ask[i]);
  document.getElementById("test").innerHTML =
    document.getElementById("test").innerHTML + qt;

  console.log(qt);
}
