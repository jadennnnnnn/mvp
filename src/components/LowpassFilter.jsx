import { useState } from 'react';

export default function LowpassFilter ({actx, masterVolume, setLowpassFilter}) {

  const [values] = useState({frequency: 1, Q: 1})

  // useEffect(()=>{
    // }, [filterValues])


  const handleEvent = (e, sliderType) => {
    if (sliderType === 'frequency') {
      values.frequency = e.target.value
    }
    if (sliderType === 'Q') {
      values.Q = e.target.value
    }
    const maxFilterFreq = actx.sampleRate / 2;
    const filter = actx.createBiquadFilter()
    filter.type = 'lowpass';
    filter.frequency.value = values.frequency * maxFilterFreq;
    filter.Q.value = values.Q * 30;
    filter.connect(masterVolume)
    setLowpassFilter(filter)
  }

  return (
    <div className='losspass-filter'>
      <label>frequency</label>
      <input type='range' min='0' max='1' step='0.01' onChange={(e)=>{handleEvent(e, 'frequency')}} /><br/>
      <label>Q</label>
      <input type='range' min='0.1' max='1' step='0.01' onChange={(e)=>{handleEvent(e, 'Q')}} />
    </div>
  )
}