/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#cardNumber").innerHTML = randomNumber();

  let suite = randomSuite();
  document.querySelector("#suiteTop").innerHTML = suite;
  document.querySelector("#suiteBot").innerHTML = suite;
  if (suite === "♦" || suite === "♥") {
    document.querySelector("#suiteTop").style.color = "red";
    document.querySelector("#suiteBot").style.color = "red";
  } else {
    document.querySelector("#suiteTop").style.color = "black";
    document.querySelector("#suiteBot").style.color = "black";
  }

  console.log("Hello Rigo from the console!");
};

let randomNumber = () => {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let numberIndex = Math.floor(Math.random() * number.length);
  return number[numberIndex];
};
let randomSuite = () => {
  let suite = ["♦", "♥", "♠", "♣"];
  let suiteIndex = Math.floor(Math.random() * suite.length);
  return suite[suiteIndex];
};
