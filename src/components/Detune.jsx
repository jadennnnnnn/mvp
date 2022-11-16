import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function Detune ({setDetune}) {

  const preset = usePreset();

  const [value, setValue] = useState(preset.detune)

  useEffect(() => {
    setDetune(value)
  }, [value, setDetune])

  return (
    <div className='detune box'>
      <label>detune</label><br/>
      <input type='range' min='0' max='11' step='1' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
    </div>
  )
}