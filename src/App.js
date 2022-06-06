import "./App.css";
import Piano from "./Piano";
import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import Dropdown from "./Dropdown";
import Title from "./Title";

function App() {
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
    if (value === "pluckSynth") {
      setSynth(new Tone.PluckSynth().toDestination());
    }
    if (value === "polySynth") {
      setSynth(new Tone.PolySynth().toDestination());
    }
  }, [value]);

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

  return (
    <div>
      <Title />
      <Dropdown value={value} handleChange={handleChange} />
      <Piano
        playC4={playC4}
        playDb4={playDb4}
        playD4={playD4}
        playEb4={playEb4}
        playE4={playE4}
        playF4={playF4}
        playGb4={playGb4}
        playG4={playG4}
        playAb4={playAb4}
        playA4={playA4}
        playBb4={playBb4}
        playB4={playB4}
        playC5={playC5}
      />
    </div>
  );
}

export default App;
