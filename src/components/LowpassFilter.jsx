export default function LowpassFilter ({actx, lowpassFilter}) {

  const maxFilterFreq = actx.sampleRate / 2;
  const handleEvent = (e, sliderType) => {
    if (sliderType === 'frequency') {
      lowpassFilter.frequency = Number(e.target.value) * maxFilterFreq;
    }
    if (sliderType === 'Q') {
      lowpassFilter.Q = Number(e.target.value) * 30;
    }
  }

  return (
    <div className='lowpass-filter'>
      <label>frequency</label>
      <input id='lowpass-freq' type='range' min='0' max='1' step='0.01' onChange={(e)=>{handleEvent(e, 'frequency')}} /><br/>
      <label>Q</label>
      <input id='lowpass-q' type='range' min='0.1' max='1' step='0.01' onChange={(e)=>{handleEvent(e, 'Q')}} />
    </div>
  )
}