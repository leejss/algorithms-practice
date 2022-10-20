function generateDocument(characters, document) {
  // Write your code here.

  const charLookup = {};
  const docLookup = {};
  for (const k of characters) {
    if (!k) continue;
    if (k in charLookup) {
      charLookup[k] += 1;
    } else {
      charLookup[k] = 1;
    }
  }
  for (const k of document) {
    if (!k) continue;
    if (k in docLookup) {
      docLookup[k] += 1;
    } else {
      docLookup[k] = 1;
    }
  }

  // console.log(charLookup);
  // console.log(docLookup);

  for (const key in docLookup) {
    if (!(key in charLookup)) return false;
    if (charLookup[key] < docLookup[key]) return false;
  }

  return true;
}

console.log(generateDocument("aheaolabbhb", "hello"));
