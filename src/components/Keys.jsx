import { useState, useEffect } from 'react';
import PianoKeys from './PianoKeys.jsx';
import KeyboardKeys from './KeyboardKeys.jsx';

export default function Keys ({noteOn, noteOff, enableKeyboard}) {

  const [NOTES] = useState({
    'A-0' : 27.50000,
    'A#0' : 29.13524,
    'B-0' : 30.86771,
    'C-1' : 32.70320,
    'C#1' : 34.64783,
    'D-1' : 36.70810,
    'D#1' : 38.89087,
    'E-1' : 41.20344,
    'F-1' : 43.65353,
    'F#1' : 46.24930,
    'G-1' : 48.99943,
    'G#1' : 51.91309,
    'A-1' : 55.00000,
    'A#1' : 58.27047,
    'B-1' : 61.73541,
    'C-2' : 65.40639,
    'C#2' : 69.29566,
    'D-2' : 73.41619,
    'D#2' : 77.78175,
    'E-2' : 82.40689,
    'F-2' : 87.30706,
    'F#2' : 92.49861,
    'G-2' : 97.99886,
    'G#2' : 103.8262,
    'A-2' : 110.0000,
    'A#2' : 116.5409,
    'B-2' : 123.4708,
    'C-3' : 130.8128,
    'C#3' : 138.5913,
    'D-3' : 146.8324,
    'D#3' : 155.5635,
    'E-3' : 164.8138,
    'F-3' : 174.6141,
    'F#3' : 184.9972,
    'G-3' : 195.9977,
    'G#3' : 207.6523,
    'A-3' : 220.0000,
    'A#3' : 233.0819,
    'B-3' : 246.9417,
    'C-4' : 261.6256,
    'C#4' : 277.1826,
    'D-4' : 293.6648,
    'D#4' : 311.1270,
    'E-4' : 329.6276,
    'F-4' : 349.2282,
    'F#4' : 369.9944,
    'G-4' : 391.9954,
    'G#4' : 415.3047,
    'A-4' : 440.0000,
    'A#4' : 466.1638,
    'B-4' : 493.8833,
    'C-5' : 523.2511,
    'C#5' : 554.3653,
    'D-5' : 587.3295,
    'D#5' : 622.2540,
    'E-5' : 659.2551,
    'F-5' : 698.4565,
    'F#5' : 739.9888,
    'G-5' : 783.9909,
    'G#5' : 830.6094,
    'A-5' : 880.0000,
    'A#5' : 932.3275,
    'B-5' : 987.7666,
    'C-6' : 1046.502,
    'C#6' : 1108.731,
    'D-6' : 1174.659,
    'D#6' : 1244.508,
    'E-6' : 1318.510,
    'F-6' : 1396.913,
    'F#6' : 1479.978,
    'G-6' : 1567.982,
    'G#6' : 1661.219,
    'A-6' : 1760.000,
    'A#6' : 1864.655,
    'B-6' : 1975.533,
    'C-7' : 2093.005,
    'C#7' : 2217.461,
    'D-7' : 2349.318,
    'D#7' : 2489.016,
    'E-7' : 2637.020,
    'F-7' : 2793.826,
    'F#7' : 2959.955,
    'G-7' : 3135.963,
    'G#7' : 3322.438,
    'A-7' : 3520.000,
    'A#7' : 3729.310,
    'B-7' : 3951.066,
    'C-8' : 4186.009
  })

  function handleEvent (e) {
    if (e.type === 'touchstart') {
      noteOn(NOTES[e.target.dataset.note], e.target.dataset.note);
    }
    if (e.type === 'touchend') {
      noteOff(e.target.dataset.note);
    }
    if (e.type === 'mousedown') {
      noteOn(NOTES[e.target.dataset.note], e.target.dataset.note);
    }
    if (e.type === 'mouseup' || e.type === 'mouseleave') {
      noteOff(e.target.dataset.note);
    }
  }

  const pianoStyle = {
    borderLeft: '1px solid #333',
    borderRight: '1px solid #333'
  }

  const keyboardStyle = {
    border: '1px solid #333',
    padding: '1%'
  }

  return (
    <div className='keyboard' style={enableKeyboard ? keyboardStyle : pianoStyle}>
      {enableKeyboard ? <KeyboardKeys noteOn={noteOn} noteOff={noteOff} NOTES={NOTES} /> : <PianoKeys handleEvent={handleEvent}/>}
    </div>
  )
}