import { useState, useEffect } from 'react';

export default function MasterVolume ({masterVolume}) {

  const [value, setValue] = useState(0.1)

  useEffect(() => {
    masterVolume.gain.value = value;
  }, [value, masterVolume.gain])

  return (
    <fieldset className='volume box vertical-box'>
      <legend style={{fontStyle: 'normal'}}>volume</legend><br/>
      <input id='master-volume-gain' type='range' min='0' max='.1' step='.01' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
    </fieldset>
  )
}