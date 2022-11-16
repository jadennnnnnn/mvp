import { useState, useEffect } from 'react';

export default function Waveform ({setWaveform}) {

  const [value, setValue] = useState(0)

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
    <div className='waveform'>
      <label>waveform</label><br/>
      <input type='range' min='0' max='3' step='1' list='waveform-list' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />

      <datalist id='waveform-list'>
        <option value="0" label='sine'></option>
        <option value="1" label='square'></option>
        <option value="2" label='sawtooth'></option>
        <option value="3" label='triangle'></option>
      </datalist>

    </div>
  )
}