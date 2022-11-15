export default function MasterVolume ({masterVolume}) {



  return (
    <div className='master-volume'>
      <label>Master Volume</label><br/>
      <input type='range' min='0' max='1' step='.1' onChange={(e)=>{masterVolume.gain.value = Number(e.target.value)}} />
    </div>
  )
}