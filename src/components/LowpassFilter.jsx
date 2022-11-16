import { useEffect, useState } from 'react';
import { usePreset } from '../Preset';

export default function LowpassFilter ({actx, lowpassFilter}) {

  const setting = usePreset().currentSetting;
  const setCurrentSetting = usePreset().setCurrentSetting;


  const [freq, setFreq] = useState(setting.frequency)
  const [q, setQ] = useState(setting.q)

  const maxFilterFreq = actx.sampleRate / 2;

  useEffect(() => {
    setFreq(setting.frequency)
    setQ(setting.q)
  }, [setting])

  useEffect(() => {
    lowpassFilter.frequency = freq * maxFilterFreq;
  }, [freq, lowpassFilter, maxFilterFreq])

  useEffect(() => {
    lowpassFilter.Q = q * 30;
  }, [q, lowpassFilter])

  useEffect(() => {
    setCurrentSetting({...setting, frequency: freq, q: q})
  }, [freq, q])

  return (
    <fieldset className='lowpass-filter box'>
      <legend>FILTER</legend>
      <div className='param'>
        <label>freq</label>
        <input id='lowpass-freq' type='range' min='0' max='1' step='0.01' value={freq} onChange={(e)=>{setFreq(Number(e.target.value))}} />
      </div>
      <div className='param'>
        <label>q</label>
        <input id='lowpass-q' type='range' min='0.01' max='1' step='0.01' value={q} onChange={(e)=>{setQ(Number(e.target.value))}} />
      </div>
    </fieldset>
  )
}