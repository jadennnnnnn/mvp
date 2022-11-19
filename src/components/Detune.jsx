import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function Detune ({setDetune}) {

  const currentPreset = usePreset().currentPreset;
  const setting = usePreset().currentSetting;
  const setCurrentSetting = usePreset().setCurrentSetting;

  const [value, setValue] = useState(currentPreset.detune)

  useEffect(() => {
    setValue(currentPreset.detune)
  }, [currentPreset])

  useEffect(() => {
    setDetune(value)
  }, [value, setDetune])

  useEffect(() => {
    setCurrentSetting({...setting, detune: value})
  }, [value])

  return (
    <fieldset className='detune box'>
      <legend>DETUNE</legend>
      <div className='param'>
        <label>pitch</label>
        <input type='range' min='0' max='11' step='1' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
      </div>
    </fieldset>
  )
}