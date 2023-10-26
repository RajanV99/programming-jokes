const cors = require("cors");
const express = require("express");
const app = express();
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why was the JavaScript developer sad? Because he didn't get callbacks.",
  "Why do C# and Java developers keep breaking their keyboards? Because they use a strongly typed language!",
  "Why did the programmer go broke? Because he couldn't afford to pay the ransomware.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers hate nature? It has too many bugs.",
  "What's the most used language in programming? Profanity.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "Why don't programmers like nature? It has too many branches!",
  "Why did the programmer ignore his friend at the coffee shop? He didn't like Java.",
  "Why do JavaScript developers prefer wearing glasses? Because they don't C#.",
  "What's a programmer's favorite hangout place? Foo Bar.",
  "Why did the JavaScript developer go broke? Because he lost his prototype inheritance.",
  "Why was the JavaScript developer sad? Because he didn't `console.log` any love.",
  "Why did the function break up with the variable? It heard it was seeing someone else.",
  "Why did the developer go broke? Because he couldn't find a job, NaN was looking for him!",
  "What's the object-oriented way to become wealthy? Inheritance.",
  "Why do JavaScript programmers prefer dark mode? Because light attracts bugs.",
  "What's the most used language in programming? Profanity.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
];
console.log(jokes);

// console.log(jokes[Math.floor(Math.random() * jokes.length)]);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
app.get("/", (req, res) => {
  res.send({ Joke: jokes[Math.floor(Math.random() * jokes.length)] });
});
app.use(cors());
