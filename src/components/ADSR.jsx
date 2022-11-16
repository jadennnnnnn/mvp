import { useState, useEffect } from 'react';

export default function ADSR ({adsr}) {

  const [attackValue, setAttackValue] = useState(0)
  const [decayValue, setDecayValue] = useState(0)
  const [sustainValue, setSustainValue] = useState(1)
  const [releaseValue, setReleaseValue] = useState(0)

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
    <div className='ADSR'>
      <label>attack:</label>
      <input type='range' min='0' max='1' step='0.01' value={attackValue} onChange={(e)=>{setAttackValue(Number(e.target.value))}} /><br/>

      <label>decay:</label>
      <input type='range' min='0' max='1' step='0.1' value={decayValue} onChange={(e)=>{setDecayValue(Number(e.target.value))}} /><br/>

      <label>sustain:</label>
      <input type='range' min='0' max='1' step='0.1' value={sustainValue} onChange={(e)=>{setSustainValue(Number(e.target.value))}} /><br/>

      <label>release:</label>
      <input type='range' min='0' max='1' step='0.1' value={releaseValue} onChange={(e)=>{setReleaseValue(Number(e.target.value))}} />

    </div>
  )
}