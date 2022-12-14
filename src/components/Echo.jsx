import { useState, useEffect } from 'react';
import { usePreset } from '../Preset';

export default function Echo ({setEcho}) {

  const currentPreset = usePreset().currentPreset;
  const setting = usePreset().currentSetting;
  const setCurrentSetting = usePreset().setCurrentSetting;


  const [timeValue, setTimeValue] = useState(currentPreset.time)
  const [feedbackValue, setFeedbackValue] = useState(currentPreset.feedback)

  useEffect(() => {
    setTimeValue(currentPreset.time)
    setFeedbackValue(currentPreset.feedback)
  }, [currentPreset])

  useEffect(() => {
    setEcho({feedback: feedbackValue, time: timeValue, maxDuration: 2})
  }, [timeValue, feedbackValue])

  useEffect(() => {
    setCurrentSetting({...setting, feedback: feedbackValue, time: timeValue})
  }, [feedbackValue, timeValue])


  return (
    <fieldset className='echo box'>
      <legend>DELAY</legend>
      <div className='param'>
        <label>time</label>
        <input type='range' min='0' max='0.5' step='0.01' value={timeValue} onChange={(e)=>{setTimeValue(Number(e.target.value))}} />
      </div>
      <div className='param'>
        <label>repeat</label>
        <input type='range' min='0' max='0.8' step='0.01' value={feedbackValue} onChange={(e)=>{setFeedbackValue(Number(e.target.value))}} />
      </div>

    </fieldset>
  )
}