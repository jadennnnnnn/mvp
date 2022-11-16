import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function Waveform ({setWaveform}) {

  const preset = usePreset();

  const [value, setValue] = useState(preset.waveform)

  const [waveforms] = useState([
    'sine',
    'square',
    'sawtooth',
    'triangle'
  ])

  useEffect(() => {
    setWaveform(waveforms[value])
  }, [value, waveforms, setWaveform])



  return (
    <div className='waveform box'>
      <label>waveform</label>
      <div>
        <input type='range' min='0' max='3' step='1' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
        <div className='waveform-list'>
          <span>sin</span>
          <span>squ</span>
          <span>saw</span>
          <span>tri</span>
        </div>
      </div>
    </div>
  )
}