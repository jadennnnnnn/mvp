import { useEffect, useState } from 'react';
import { usePreset } from '../Preset';

export default function LowpassFilter ({actx, setLowpassFilter}) {

  const currentPreset = usePreset().currentPreset;
  const setting = usePreset().currentSetting;
  const setCurrentSetting = usePreset().setCurrentSetting;


  const [freq, setFreq] = useState(currentPreset.frequency)
  const [q, setQ] = useState(currentPreset.q)

  const maxFilterFreq = actx.sampleRate / 2;

  useEffect(() => {
    setFreq(currentPreset.frequency)
    setQ(currentPreset.q)
  }, [currentPreset])

  useEffect(() => {
    setLowpassFilter({frequency: freq * maxFilterFreq, Q: q * 30})
  }, [freq, q, maxFilterFreq])

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