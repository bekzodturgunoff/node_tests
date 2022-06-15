const fs = require("fs/promises");

async function example() {
  try {
    const content = "Hello world, this is a async way to write";
    await fs.writeFile("/Users/lenovo/async_node.txt", content);
  } catch (err) {
    console.log(err);
  }
}

example();

const fs = require("fs");

const content = "This is a test of appending file in Node.js";

fs.appendFile("file.log", content, (err) => {
  if (err) {
    console.log(err);
  }
});

const fs = require("fs/promises");
async function example() {
  try {
    const content = "This is a test promises";
    await fs.appendFile("/Users/lenovo/test_promises.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();

const myURL = new URl("https://example.org");
console.log(myURL.hash);

//Prints #bar

myURL.hash = "baz";
console.log(myURL.href);

// Prints https://example.org/foo#baz
