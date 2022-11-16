import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function ADSR ({adsr}) {

  const setting = usePreset().currentSetting;
  const setCurrentSetting = usePreset().setCurrentSetting;


  const [attackValue, setAttackValue] = useState(setting.attack)
  const [decayValue, setDecayValue] = useState(setting.decay)
  const [sustainValue, setSustainValue] = useState(setting.sustain)
  const [releaseValue, setReleaseValue] = useState(setting.release)

  useEffect(() => {
    setAttackValue(setting.attack)
    setDecayValue(setting.decay)
    setSustainValue(setting.sustain)
    setReleaseValue(setting.release)
  }, [setting])

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
        <input type='range' min='0' max='1' step='0.1' value={sustainValue} onChange={(e)=>{setSustainValue(Number(e.target.value))}} />
      </div>

      <div className='param'>
        <label>release</label>
        <input type='range' min='0' max='1' step='0.1' value={releaseValue} onChange={(e)=>{setReleaseValue(Number(e.target.value))}} />
      </div>

    </fieldset>
  )
}