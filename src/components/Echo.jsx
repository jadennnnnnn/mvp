import { useState, useEffect } from 'react';

export default function Echo ({echo}) {

  const [timeValue, setTimeValue] = useState(0)
  const [feedbackValue, setFeedbackValue] = useState(0)

  useEffect(() => {
    echo.time = timeValue
  }, [timeValue, echo])

  useEffect(() => {
    echo.feedback = feedbackValue
  }, [feedbackValue, echo])

  return (
    <div className='echo'>
      <label>time</label>
      <input type='range' min='0' max='0.5' step='0.01' value={timeValue} onChange={(e)=>{setTimeValue(Number(e.target.value))}} /><br/>
      <label>feedback</label>
      <input type='range' min='0' max='0.8' step='0.01' value={feedbackValue} onChange={(e)=>{setFeedbackValue(Number(e.target.value))}} />
    </div>
  )
}