import React from "react";
import {
  playA4,
  playAb4,
  playB4,
  playBb4,
  playC4,
  playC5,
  playD4,
  playDb4,
  playE4,
  playEb4,
  playF4,
  playG4,
  playGb4,
  playNote,
} from "./ToneFunctions.js";

window.addEventListener("keydown", playNote);

function Piano() {
  return (
    <div className="pianoPage">
      <h1>Piano</h1>
      <div className="piano">
        <div className="white-key" onClick={playC4}></div>
        <div className="black-key" onClick={playDb4}></div>
        <div className="white-key" onClick={playD4}></div>
        <div className="black-key" onClick={playEb4}></div>
        <div className="white-key" onClick={playE4}></div>
        <div className="white-key" onClick={playF4}></div>
        <div className="black-key" onClick={playGb4}></div>
        <div className="white-key" onClick={playG4}></div>
        <div className="black-key" onClick={playAb4}></div>
        <div className="white-key" onClick={playA4}></div>
        <div className="black-key" onClick={playBb4}></div>
        <div className="white-key" onClick={playB4}></div>
        <div className="white-key" onClick={playC5}></div>
      </div>
    </div>
  );
}

export default Piano;
