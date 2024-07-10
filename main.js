import confetti from "canvas-confetti";
import zoro from "./zoro.jpeg";
import "./style.scss";

const btn = document.querySelector("button");

import { setupCounter } from "./counter.js";
//
// setupCounter(document.querySelector("button"));
btn.addEventListener("click", () => {
  confetti();
});

import("./counter.js").then((func) => {
  func.setupCounter(document.querySelector("button"));
});
console.log(import.meta);
