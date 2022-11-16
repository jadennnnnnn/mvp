import { useState, useEffect } from 'react';

export default function Detune ({setDetune}) {

  const [value, setValue] = useState(0)

  useEffect(() => {
    setDetune(value)
  }, [value, setDetune])

  return (
    <div className='detune'>
      <label>detune</label><br/>
      <input type='range' min='0' max='11' step='1' value={value} onChange={(e)=>{setValue(Number(e.target.value))}} />
    </div>
  )
}