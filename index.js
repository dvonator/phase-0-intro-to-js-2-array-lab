const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const CopyofCats = [...cats];
  CopyofCats.push(name);
  return CopyofCats;
}

function prependCat(name) {
  const CopyofCats = [...cats];
  CopyofCats.unshift(name);
  return CopyofCats;
}

function removeLastCat(name) {
  const CopyofCats = [...cats];
  CopyofCats.pop(name);
  return CopyofCats;
}

function removeFirstCat(name) {
  const CopyofCats = [...cats];
  CopyofCats.shift(name);
  return CopyofCats;
}
