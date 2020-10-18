from random import choice

word_1 = ["lying", "cheating", "sweating", "sniveling", "weaseling", "limping", "waffling", "slithering", "sneaking", "barking", "shuffling", "snuffling", "hippety slopping", "sidehill gouging", "snorting", "leaking", "lactating", "sliding", "whistling", "flipping", "flapping", "smoking", "pickling", "dripping", "oozing", "wheezing", "deflating"]

word_2 = ["dog", "lizard", "pig", "gerbil", "weasel", "jack", "limburger", "pony", "night", "duck", "liver", "wildebeest", "fish", "wuss", "wall", "low", "crunch", "hose", "snub", "rat", "snorkel", "pinkie", "hair", "lime", "lame", "rutabaha", "pea", "bird", "goat", "pencil", "donkey"]

word_3 = ["faced", "scented", "footed", "butted", "brained", "assed", "flavoured", "toed", "eyed", "eared", "flapped", "sealed", "handed", "faced", "nosed", "bottomed", "minded", "rooted", "beaked", "gutted", "livered", "necked", "oriented", "stunted", "retarded", "jackassed", "pickled", "dilapidated", "overrated", "underbitten", "snaggletoothed"]

word_4 = ["pony", "night", "duck", "liver", "weasel", "wildebeest", "fish", "seal", "cow", "crunch", "pig", "dog", "butt", "hose", "hair", "pinkie", "finger", "snake", "turkey", "baloney", "sausage", "pea", "bird", "goat", "pencil", "donkey", "douche", "snot", "phlegm", "dirt", "sardine"]

word_5 = ["soilder", "walker", "licker", "sniffer", "eater", "porker", "slapper", "sitter", "flooper", "slapper", "tipper", "stealer", "biter", "lover", "sucker", "squeezer", "spanker", "streaker", "dropper", "smuggler", "buster", "fumbler", "giver", "molester", "humper", "flapper", "zipper", "flipper", "smoker", "stuffer"]

def generate():
    return f"{choice(word_1)} {choice(word_2)} {choice(word_3)} {choice(word_4)} {choice(word_5)}".title()
