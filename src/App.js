import './App.css';
import { useState } from 'react';
import Keys from './components/Keys.jsx';
import Detune from './components/Detune.jsx';
import Waveform from './components/Waveform.jsx';
import ADSR from './components/ADSR.jsx';
import LowpassFilter from './components/LowpassFilter.jsx';
import MasterVolume from './components/MasterVolume.jsx';

function App() {
  const [actx] = useState(()=>(new AudioContext()));
  const [masterVolume] = useState(() => {
    const masterVolume = new GainNode(actx);
    masterVolume.gain.value = 0.5;
    masterVolume.connect(actx.destination)
    return masterVolume;
  })
  const [lowpassFilter] = useState({frequency: 350, Q: 1})

  const [detune, setDetune] = useState(0);
  const [waveform, setWaveform] = useState('triangle');
  const STAGE_MAX_TIME = 2; //seconds
  const [adsr, setAdsr] = useState({attack: 0, decay:0, sustain: 1, release: 0});

  const createOscillators = (freq, detune) => {
    const osc = actx.createOscillator();
    osc.type = waveform;
    osc.frequency.value = freq;
    osc.detune.value = detune;
    osc.start();
    return osc;
  }

  const [activeNotes] = useState({})

  const noteOn = (freq) => {
    const now = actx.currentTime;

    const gainNode = new GainNode(actx)
    gainNode.gain.cancelScheduledValues(now);
    gainNode.connect(masterVolume)

    const filter = actx.createBiquadFilter()
    filter.type = 'lowpass';
    filter.frequency.value = lowpassFilter.frequency;
    filter.Q.value = lowpassFilter.Q;
    filter.connect(gainNode)

    document.querySelector('#lowpass-freq').addEventListener('input', (e) => {
      const maxFilterFreq = actx.sampleRate / 2;
      filter.frequency.value = Number(e.target.value) * maxFilterFreq;
    });
    document.querySelector('#lowpass-q').addEventListener('input', (e) => {
      filter.Q.value = Number(e.target.value) * 30;
    });

    let oscBank;
    if (detune) {
      oscBank = new Array(3)
      oscBank[0] = createOscillators(freq, 0);
      oscBank[1] = createOscillators(freq, -detune);
      oscBank[2] = createOscillators(freq, detune);
    } else {
      oscBank = [createOscillators(freq, 0)];
    }

    oscBank.forEach((osc)=>{
      osc.connect(filter)
      //ATTACK -> DECAY -> SUSTAIN
      const atkDuration = adsr.attack * STAGE_MAX_TIME;
      const atkEndTime = now + atkDuration;
      const decayDuration = adsr.decay * STAGE_MAX_TIME;

      gainNode.gain.setValueAtTime(0, actx.currentTime);
      gainNode.gain.linearRampToValueAtTime(1, atkEndTime);
      gainNode.gain.setTargetAtTime(adsr.sustain, atkEndTime, decayDuration);
    })
    activeNotes[freq] = {oscBank: oscBank, gainNode: gainNode};
  }
  const noteOff = (freq) => {
    if (activeNotes[freq]) {
      const now = actx.currentTime;
      activeNotes[freq].gainNode.gain.cancelScheduledValues(now);

      //SUSTAIN -> RELEASE
      const relDuration = adsr.release * STAGE_MAX_TIME;
      const relEndTime = now + relDuration;
      activeNotes[freq].gainNode.gain.setValueAtTime(activeNotes[freq].gainNode.gain.value, now);
      activeNotes[freq].gainNode.gain.linearRampToValueAtTime(0, relEndTime);
    }
  }


  return (
    <div className="App">
      <LowpassFilter actx={actx} lowpassFilter={lowpassFilter}/>
      <MasterVolume masterVolume={masterVolume}/>
      <Waveform setWaveform={setWaveform}/>
      <Detune setDetune={setDetune}/>
      <ADSR adsr={adsr} setAdsr={setAdsr}/>
      <div className='keyboard'>
        <Keys noteOn={noteOn} noteOff={noteOff} createOscillators={createOscillators}/>
      </div>
    </div>
  );
}

export default App;
