import { unsuccessful, successful, update, visits } from "../../config.js";

//Disable right mouse click Script
document.addEventListener("contextmenu", (event) => event.preventDefault());

// attack counter
const unsucc = document.querySelector(".unsuccesfull");
const succ = document.querySelector(".succesfull");
const up = document.querySelector(".update");
const visit = document.querySelector(".visits");

unsucc.innerText = unsuccessful;
succ.innerText = successful;
up.innerText = update;
visit.innerText = visits;
// end of attack counter
