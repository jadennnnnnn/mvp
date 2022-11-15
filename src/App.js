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

  const [detune, setDetune] = useState(0);
  const [waveform, setWaveform] = useState('triangle');
  const [adsr, setAdsr] = useState({attack: 0, decay:0, sustain: 1, release: 0});
  const [lowpassFilter, setLowpassFilter] = useState({frequencySlider: 1, qSlider: 1})
  const [masterVolume] = useState(() => {
    const masterVolume = new GainNode(actx);
    masterVolume.gain.value = 1;
    masterVolume.connect(actx.destination)
    return masterVolume;
  })

  const STAGE_MAX_TIME = 2; //seconds
  const maxFilterFreq = actx.sampleRate / 2;

  const createOscillators = (freq, detune) => {
    const osc = actx.createOscillator();

    osc.type = waveform;
    osc.frequency.value = freq;
    osc.detune.value = detune;
    // osc.connect(actx.destination);
    osc.start();

    return osc;
  }


  const noteOn = (freq) => {
    const gainNode = new GainNode(actx);
    gainNode.connect(masterVolume);

    const filter = actx.createBiquadFilter()
    filter.type = 'lowpass';
    filter.frequency.value = lowpassFilter.frequencySlider  * maxFilterFreq;
    filter.Q.value = lowpassFilter.qSlider  * 30;
    filter.connect(gainNode)

    const now = actx.currentTime;
    gainNode.gain.cancelScheduledValues(now);
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
    return {oscBank: oscBank, gainNode: gainNode, filter: filter};
  }
  const noteOff = (note) => {
    const now = actx.currentTime;
    note.gainNode.gain.cancelScheduledValues(now);

    //SUSTAIN -> RELEASE
    const relDuration = adsr.release * STAGE_MAX_TIME;
    const relEndTime = now + relDuration;
    note.gainNode.gain.setValueAtTime(note.gainNode.gain.value, now);
    note.gainNode.gain.linearRampToValueAtTime(0, relEndTime);
    // note.oscBank.forEach((osc)=>{osc.stop()})
  }


  return (
    <div className="App">
      <LowpassFilter lowpassFilter={lowpassFilter} setLowpassFilter={setLowpassFilter} maxFilterFreq={maxFilterFreq} />
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
