import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function ADSR ({adsr}) {

  const currentPreset = usePreset().currentPreset;
  const setting = usePreset().currentSetting;
  const setCurrentSetting = usePreset().setCurrentSetting;


  const [attackValue, setAttackValue] = useState(currentPreset.attack)
  const [decayValue, setDecayValue] = useState(currentPreset.decay)
  const [sustainValue, setSustainValue] = useState(currentPreset.sustain)
  const [releaseValue, setReleaseValue] = useState(currentPreset.release)

  useEffect(() => {
    setAttackValue(currentPreset.attack)
    setDecayValue(currentPreset.decay)
    setSustainValue(currentPreset.sustain)
    setReleaseValue(currentPreset.release)
  }, [currentPreset])

  useEffect(() => {
    setCurrentSetting({...setting,
      attack: attackValue,
      decay: decayValue,
      sustain: sustainValue,
      release: releaseValue
    })
  }, [attackValue, decayValue, sustainValue, releaseValue])

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
    <fieldset className='adsr box'>
      <legend>ADSR</legend>

      <div className='param'>
        <label>attack</label>
        <input type='range' min='0' max='1' step='0.01' value={attackValue} onChange={(e)=>{setAttackValue(Number(e.target.value))}} />
      </div>

      <div className='param'>
        <label>decay</label>
        <input type='range' min='0' max='1' step='0.01' value={decayValue} onChange={(e)=>{setDecayValue(Number(e.target.value))}} />
      </div>

      <div className='param'>
        <label>sustain</label>
        <input type='range' min='0' max='1' step='0.01' value={sustainValue} onChange={(e)=>{setSustainValue(Number(e.target.value))}} />
      </div>

      <div className='param'>
        <label>release</label>
        <input type='range' min='0' max='1' step='0.01' value={releaseValue} onChange={(e)=>{setReleaseValue(Number(e.target.value))}} />
      </div>

    </fieldset>
  )
}