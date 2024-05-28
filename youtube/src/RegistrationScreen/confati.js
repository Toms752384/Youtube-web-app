import React from "react";
import RegistrationContainer from "./RegistrationScreen/RegistrationContainer";
import './DesignRegist.css';

const progressBarEl = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progressBarEl.style.width ='${width}%'
  
});