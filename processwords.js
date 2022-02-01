const fs = require("fs");
let test;

const readFiles = () => {
  test = JSON.parse(fs.readFileSync("./sanalista.json"));
};

readFiles();

const test2 = test["kotus-sanalista"].st
  .filter((word) => word.s.length === 5 && word.s[word.s.length - 1] !== "-")
  .map((word) => word.s);

fs.writeFile("./base.json", JSON.stringify(test2, null, 2), (err) => {
  if (err) {
    console.error(err);
  }
});
