export default function Echo ({echo}) {

  return (
    <div className='echo'>
      <label>time</label>
      <input type='range' min='0' max='0.5' step='0.01' onChange={(e)=>{echo.time = Number(e.target.value)}} /><br/>
      <label>feedback</label>
      <input type='range' min='0' max='0.8' step='0.01' onChange={(e)=>{echo.feedback = Number(e.target.value)}} />
    </div>
  )
}