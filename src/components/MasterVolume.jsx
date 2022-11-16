import { useState, useEffect } from 'react';

export default function MasterVolume ({masterVolume}) {

  const [value, setValue] = useState(0.1)

  useEffect(() => {
    masterVolume.gain.value = value;
  }, [value, masterVolume.gain])

  return (
    <div className='volume box'>
      <label>volume</label><br/>
      <input type='range' min='0' max='.1' step='.01' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
    </div>
  )
}