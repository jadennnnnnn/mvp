export default function LowpassFilter ({lowpassFilter, setLowpassFilter, maxFilterFreq}) {


  const handleEvent = (e, sliderType) => {
    const filterValue = lowpassFilter;
    if (sliderType === 'frequency') {
      filterValue.frequencySlider = Number(e.target.value);
      console.log(filterValue.frequencySlider)
      setLowpassFilter(filterValue);
    }
    if (sliderType === 'Q') {
      filterValue.qSlider = Number(e.target.value);
      setLowpassFilter(filterValue);
    }
  }

  return (
    <div className='losspass-filter'>
      <label>frequency</label><br/>
      <input type='range' min='0' max='1' step='0.01' onChange={(e)=>{handleEvent(e, 'frequency')}} />
      <label>Q</label><br/>
      <input type='range' min='0.1' max='1' step='0.01' onChange={(e)=>{handleEvent(e, 'Q')}} />
    </div>
  )
}