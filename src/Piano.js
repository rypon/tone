import React, { useState, useEffect } from "react";
import * as Tone from "tone";

function Piano() {
  const [value, setValue] = useState("");
  const [synth, setSynth] = useState(new Tone.Synth().toDestination());

  //to change the value of dropdown after each change
  function handleChange(e) {
    setValue(e.target.value);
  }

  //to update to the correct state when dropdown changes
  useEffect(() => {
    if (value === "synth") {
      setSynth(new Tone.Synth().toDestination());
    }
    if (value === "duoSynth") {
      setSynth(new Tone.DuoSynth().toDestination());
    }
    if (value === "fmSynth") {
      setSynth(new Tone.FMSynth().toDestination());
    }
    if (value === "membreaneSynth") {
      setSynth(new Tone.MembraneSynth().toDestination());
    }
    if (value === "metalSynth") {
      setSynth(new Tone.MetalSynth().toDestination());
    }
    if (value === "monoSynth") {
      setSynth(new Tone.MonoSynth().toDestination());
    }
    if (value === "noiseSynth") {
      setSynth(new Tone.NoiseSynth().toDestination());
    }
    if (value === "pluckSynth") {
      setSynth(new Tone.PluckSynth().toDestination());
    }
    if (value === "polySynth") {
      setSynth(new Tone.PolySynth().toDestination());
    }
    if (value === "sampler") {
      setSynth(new Tone.Sampler().toDestination());
    }
  }, [value]);

  //the actual functions to play the sound
  function playC4() {
    synth.triggerAttackRelease("C4", "8n");
  }
  function playDb4() {
    synth.triggerAttackRelease("Db4", "8n");
  }
  function playD4() {
    synth.triggerAttackRelease("D4", "8n");
  }
  function playEb4() {
    synth.triggerAttackRelease("Eb4", "8n");
  }
  function playE4() {
    synth.triggerAttackRelease("E4", "8n");
  }
  function playF4() {
    synth.triggerAttackRelease("F4", "8n");
  }
  function playGb4() {
    synth.triggerAttackRelease("Gb4", "8n");
  }
  function playG4() {
    synth.triggerAttackRelease("G4", "8n");
  }
  function playAb4() {
    synth.triggerAttackRelease("Ab4", "8n");
  }
  function playA4() {
    synth.triggerAttackRelease("A4", "8n");
  }
  function playBb4() {
    synth.triggerAttackRelease("Bb4", "8n");
  }
  function playB4() {
    synth.triggerAttackRelease("B4", "8n");
  }
  function playC5() {
    synth.triggerAttackRelease("C5", "8n");
  }

  //to allow keyboard keys to play sound
  function playNote(event) {
    if (event.keyCode === 65) {
      playC4();
    }
    if (event.keyCode === 87) {
      playDb4();
    }
    if (event.keyCode === 83) {
      playD4();
    }
    if (event.keyCode === 69) {
      playEb4();
    }
    if (event.keyCode === 68) {
      playE4();
    }
    if (event.keyCode === 70) {
      playF4();
    }
    if (event.keyCode === 84) {
      playGb4();
    }
    if (event.keyCode === 71) {
      playG4();
    }
    if (event.keyCode === 89) {
      playAb4();
    }
    if (event.keyCode === 72) {
      playA4();
    }
    if (event.keyCode === 85) {
      playBb4();
    }
    if (event.keyCode === 74) {
      playB4();
    }
    if (event.keyCode === 75) {
      playC5();
    }
  }
  window.addEventListener("keydown", playNote);

  return (
    <div className="pianoPage">
      <h1>Piano</h1>
      <div>
        <select value={value} onChange={handleChange}>
          <option value="synth">Synth</option>
          <option value="duoSynth">Duo Synth</option>
          <option value="fmSynth">FM Synth</option>
          <option value="membreaneSynth">Membrane Synth</option>
          <option value="metalSynth">Metal Synth</option>
          <option value="monoSynth">Mono Synth</option>
          <option value="noiseSynth">Noise Synth</option>
          <option value="pluckSynth">Pluck Synth</option>
          <option value="polySynth">Poly Synth</option>
          <option value="sampler">Sampler</option>
        </select>
      </div>
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
