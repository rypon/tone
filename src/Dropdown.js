import React from "react";

function Dropdown({ value, handleChange }) {
  return (
    <div style={{ textAlign: "center", paddingBottom: "15px" }}>
      <select value={value} onChange={handleChange}>
        <option value="synth">Synth</option>
        <option value="duoSynth">Duo Synth</option>
        <option value="fmSynth">FM Synth</option>
        <option value="membreaneSynth">Membrane Synth</option>
        <option value="metalSynth">Metal Synth</option>
        <option value="monoSynth">Mono Synth</option>
        <option value="pluckSynth">Pluck Synth</option>
        <option value="polySynth">Poly Synth</option>
      </select>
    </div>
  );
}

export default Dropdown;
