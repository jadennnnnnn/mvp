import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function ADSR ({adsr}) {

  const preset = usePreset();

  const [attackValue, setAttackValue] = useState(preset.attack)
  const [decayValue, setDecayValue] = useState(preset.decay)
  const [sustainValue, setSustainValue] = useState(preset.sustain)
  const [releaseValue, setReleaseValue] = useState(preset.release)

  useEffect(() => {
    adsr.attack = attackValue
  }, [adsr, attackValue])

  useEffect(() => {
    adsr.decay = decayValue
  }, [adsr, decayValue])

    useEffect(() => {
    adsr.sustain = sustainValue
  }, [adsr, sustainValue])

  useEffect(() => {
    adsr.release = releaseValue
  }, [adsr, releaseValue])

  return (
    <div className='adsr box'>
      <label>attack:</label><br/>
      <input type='range' min='0' max='1' step='0.01' value={attackValue} onChange={(e)=>{setAttackValue(Number(e.target.value))}} /><br/>

      <label>decay:</label><br/>
      <input type='range' min='0' max='1' step='0.1' value={decayValue} onChange={(e)=>{setDecayValue(Number(e.target.value))}} /><br/>

      <label>sustain:</label><br/>
      <input type='range' min='0' max='1' step='0.1' value={sustainValue} onChange={(e)=>{setSustainValue(Number(e.target.value))}} /><br/>

      <label>release:</label><br/>
      <input type='range' min='0' max='1' step='0.1' value={releaseValue} onChange={(e)=>{setReleaseValue(Number(e.target.value))}} />

    </div>
  )
}