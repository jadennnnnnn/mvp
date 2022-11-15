export default function Detune ({setDetune}) {

  return (
    <div className='detune'>
      <label>detune</label><br/>
      <input type='range' min='0' max='11' step='1' onChange={(e)=>{setDetune(Number(e.target.value))}} />
    </div>
  )
}