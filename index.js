var word1 = ["lying", "cheating", "sweating", "sniveling", "weaseling", "limping", "waffling", "slithering", "sneaking", "barking", "shuffling", "snuffling", "hippety slopping", "sidehill gouging", "snorting", "leaking", "lactating", "sliding", "whistling", "flipping", "flapping", "smoking", "pickling", "dripping", "oozing", "wheezing", "deflating"]

var word2 = ["dog", "lizard", "pig", "gerbil", "weasel", "jack", "limburger", "pony", "night", "duck", "liver", "wildebeest", "fish", "wuss", "wall", "low", "crunch", "hose", "snub", "rat", "snorkel", "pinkie", "hair", "lime", "lame", "rutabaha", "pea", "bird", "goat", "pencil", "donkey"]

var word3 = ["faced", "scented", "footed", "butted", "brained", "assed", "flavoured", "toed", "eyed", "eared", "flapped", "sealed", "handed", "faced", "nosed", "bottomed", "minded", "rooted", "beaked", "gutted", "livered", "necked", "oriented", "stunted", "retarded", "jackassed", "pickled", "dilapidated", "overrated", "underbitten", "snaggletoothed"]

var word4 = ["pony", "night", "duck", "liver", "weasel", "wildebeest", "fish", "seal", "cow", "crunch", "pig", "dog", "butt", "hose", "hair", "pinkie", "finger", "snake", "turkey", "baloney", "sausage", "pea", "bird", "goat", "pencil", "donkey", "douche", "snot", "phlegm", "dirt", "sardine"]

var word5 = ["soilder", "walker", "licker", "sniffer", "eater", "porker", "slapper", "sitter", "flooper", "slapper", "tipper", "stealer", "biter", "lover", "sucker", "squeezer", "spanker", "streaker", "dropper", "smuggler", "buster", "fumbler", "giver", "molester", "humper", "flapper", "zipper", "flipper", "smoker", "stuffer"]

function generate() {
  var generatedWord1 = word1[Math.floor(Math.random() * word1.length)];
  var generatedWord2 = word2[Math.floor(Math.random() * word2.length)];
  var generatedWord3 = word3[Math.floor(Math.random() * word3.length)];
  var generatedWord4 = word4[Math.floor(Math.random() * word4.length)];
  var generatedWord5 = word5[Math.floor(Math.random() * word5.length)];
  var output = generatedWord1 + " " + generatedWord2 + " " + generatedWord3 + " " + generatedWord4 + " " + generatedWord5;

  document.getElementById('insult').innerHTML = output;
}
