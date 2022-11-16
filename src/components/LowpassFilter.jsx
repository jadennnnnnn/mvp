import { useEffect, useState } from 'react';
import { usePreset } from '../Preset';

export default function LowpassFilter ({actx, lowpassFilter}) {

  const preset = usePreset();

  const [freq, setFreq] = useState(preset.frequency)
  const [q, setQ] = useState(preset.q)

  const maxFilterFreq = actx.sampleRate / 2;

  useEffect(() => {
    lowpassFilter.frequency = freq * maxFilterFreq;
  }, [freq, lowpassFilter, maxFilterFreq])

  useEffect(() => {
    lowpassFilter.Q = q * 30;
  }, [q, lowpassFilter])

  return (
    <div className='lowpass-filter'>
      <label>frequency</label>
      <input id='lowpass-freq' type='range' min='0' max='1' step='0.01' value={freq} onChange={(e)=>{setFreq(Number(e.target.value))}} /><br/>
      <label>Q</label>
      <input id='lowpass-q' type='range' min='0.01' max='1' step='0.01' value={q} onChange={(e)=>{setQ(Number(e.target.value))}} />
    </div>
  )
}