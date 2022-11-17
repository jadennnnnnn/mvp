import { useState } from 'react';

export default function SaveModal ({currentSetting, setSaveModal, presetList, setPresetList}) {

  const [name, setName] = useState('')

  const waveforms = [
    'sine',
    'square',
    'sawtooth',
    'triangle'
  ]

  const savePreset = (name, setting, e) => {
    e.preventDefault();
    if (Object.keys(presetList).includes(name)) {
      alert ('name already exist')
    } else {
      const newPresetList = {...presetList};
      newPresetList[name] = setting;
      localStorage.setItem('presets', JSON.stringify(newPresetList));
      setPresetList(newPresetList);
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content'>

        <button className='exit' onClick={()=>setSaveModal(false)}>x</button>

        <form>
          <input type='text' placeholder='name here' onChange={(e)=>{setName(e.target.value)}}/>
          <button onClick={(e)=>{savePreset(name, currentSetting, e)}}>save</button>
        </form><br/>
        <table>
          <tbody>

            <tr>
              <td>waveform</td>
              <td>{waveforms[currentSetting.waveform]}</td>
            </tr>
            <tr>
              <td>detune</td>
              <td>{Math.floor(currentSetting.detune / 11 * 100)}%</td>
            </tr>
            <tr>
              <td>frequency</td>
              <td>{Math.floor(currentSetting.frequency * 100)}%</td>
            </tr>
            <tr>
              <td>q</td>
              <td>{Math.floor(currentSetting.q * 100)}%</td>
            </tr>
            <tr>
              <td>attack</td>
              <td>{Math.floor(currentSetting.attack * 100)}%</td>
            </tr>
            <tr>
              <td>decay</td>
              <td>{Math.floor(currentSetting.decay * 100)}%</td>
            </tr>
            <tr>
              <td>sustain</td>
              <td>{Math.floor(currentSetting.sustain * 100)}%</td>
            </tr>
            <tr>
              <td>release</td>
              <td>{Math.floor(currentSetting.release * 100)}%</td>
            </tr>
            <tr>
              <td>time</td>
              <td>{Math.floor(currentSetting.time / .5 * 100)}%</td>
            </tr>
            <tr>
              <td>feedback</td>
              <td>{Math.floor(currentSetting.feedback / .8 * 100)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}