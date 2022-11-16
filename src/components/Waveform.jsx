import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function Waveform ({setWaveform}) {

  const setting = usePreset().currentSetting;
  const setCurrentSetting = usePreset().setCurrentSetting;

  const [value, setValue] = useState(setting.waveform)

  const [waveforms] = useState([
    'sine',
    'square',
    'sawtooth',
    'triangle'
  ])

  useEffect(() => {
    setValue(setting.waveform)
  }, [setting])

  useEffect(() => {
    setWaveform(waveforms[value])
  }, [value, waveforms, setWaveform])

  useEffect(() => {
    setCurrentSetting({...setting, waveform: value})
  }, [value])



  return (
    <fieldset className='box waveform-box'>
      <legend>WAVEFORM</legend>
      <div>
        <input type='range' min='0' max='3' step='1' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
        <div className='waveform-list'>
          <span>sin</span>
          <span>squ</span>
          <span>saw</span>
          <span>tri</span>
        </div>
      </div>
    </fieldset>
  )
}