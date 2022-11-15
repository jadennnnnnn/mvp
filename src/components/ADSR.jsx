export default function ADSR ({adsr, setAdsr}) {


  return (
    <div className='ADSR'>
      <label>attack:</label>
      <input type='range' min='0' max='1' step='0.01' onChange={(e)=>{setAdsr({...adsr, attack: Number(e.target.value)})}} />

      <label>decay:</label>
      <input type='range' min='0' max='1' step='0.1' onChange={(e)=>{setAdsr({...adsr, decay: Number(e.target.value)})}} />

      <label>sustain:</label>
      <input type='range' min='0' max='1' step='0.1' onChange={(e)=>{setAdsr({...adsr, sustain: Number(e.target.value)})}} />

      <label>release:</label>
      <input type='range' min='0' max='1' step='0.1' onChange={(e)=>{setAdsr({...adsr, release: Number(e.target.value)})}} />

    </div>
  )
}