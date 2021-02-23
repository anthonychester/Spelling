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
document.getElementById("app").innerHTML = ask;

//<div>
//  We use the same configuration as Parcel to bundle this sandbox, you can find more
//  info about Parcel
//
//</div>
