import './App.css';
import { useState } from 'react';
import Keys from './components/Keys.jsx';
import Detune from './components/Detune.jsx';
import Waveform from './components/Waveform.jsx';
import ADSR from './components/ADSR.jsx';
import LowpassFilter from './components/LowpassFilter.jsx';
import MasterVolume from './components/MasterVolume.jsx';
import Echo from './components/Echo.jsx';
import { PresetProvider } from './Preset.jsx';

export default function App() {
  const [actx] = useState(()=>(new AudioContext()));
  const [masterVolume] = useState(() => {
    const masterVolume = new GainNode(actx);
    masterVolume.connect(actx.destination)
    return masterVolume;
  })
  const [waveform, setWaveform] = useState('sine');
  const [detune, setDetune] = useState(0);
  const [lowpassFilter] = useState({frequency: 350, Q: 1})

  const [adsr] = useState({attack: 0, decay:0, sustain: 1, release: 0});
  const STAGE_MAX_TIME = 2; //seconds

  const echo = {
    time: 0,
    feedback: 0,
    maxDuration: 2 // seconds
  }

  const createOscillators = (freq, detune) => {
    const osc = actx.createOscillator();
    osc.type = waveform;
    osc.frequency.value = freq;
    osc.detune.value = detune;
    osc.start();
    return osc;
  }

  const [activeNotes] = useState({})
  const noteOn = (freq, key) => {
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

    const delayNode = actx.createDelay();
    delayNode.delayTime.value = echo.time * echo.maxDuration;
    delayNode.connect(masterVolume)

    const delayGain = actx.createGain();
    delayGain.gain.value = echo.feedback;


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

    gainNode.connect(delayNode);
    delayNode.connect(delayGain);
    delayGain.connect(delayNode);

    if (activeNotes[key]) {
      activeNotes[key].oscBank.forEach((osc)=>{osc.stop()})
    }
    activeNotes[key] = {oscBank: oscBank, gainNode: gainNode};
  }
  const noteOff = (key) => {
    if (activeNotes[key]) {
      const now = actx.currentTime;
      activeNotes[key].gainNode.gain.cancelScheduledValues(now);

      //SUSTAIN -> RELEASE
      const relDuration = adsr.release * STAGE_MAX_TIME;
      const relEndTime = now + relDuration;
      activeNotes[key].gainNode.gain.setValueAtTime(activeNotes[key].gainNode.gain.value, now);
      activeNotes[key].gainNode.gain.linearRampToValueAtTime(0, relEndTime);
      setTimeout(()=>{activeNotes[key].oscBank.forEach((osc)=>{osc.stop()})}, relDuration * 1000)
    }
  }

  return (
  <div className="App">
        <div className='vertical-slider'>
          <MasterVolume masterVolume={masterVolume}/>
        </div>
        <PresetProvider>
          <div className='col-1-3'>
            <Waveform setWaveform={setWaveform}/>
            <ADSR adsr={adsr} />
          </div>
          <div className='col-1-3'>
            <Detune setDetune={setDetune}/>
            <LowpassFilter actx={actx} lowpassFilter={lowpassFilter}/>
            <Echo echo={echo} />
          </div>
        </PresetProvider>
        <div className='bottom-col'>
          <Keys noteOn={noteOn} noteOff={noteOff} createOscillators={createOscillators}/>
        </div>
    </div>
  );
}