import { useState } from 'react';
import axios from 'axios';

export default function PublishModal ({currentSetting, setPublishModal, masterVolume}) {

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')

  const waveforms = [
    'sine',
    'square',
    'sawtooth',
    'triangle'
  ]

  const publishPreset = (name, setting, e) => {
    e.preventDefault();
    axios.post('/presets', {
      author: author,
      name: name,
      preset: currentSetting
    })
    setPublishModal(false);
  }

  return (
    <div className='modal'>
      <div className='modal-content'>

        <button className='exit' onClick={()=>setPublishModal(false)}>x</button>

        <form>
          <label style={{textAlign: 'center'}}>author:</label>
          <input  onFocus={()=>{masterVolume.gain.value = 0}} onBlur={()=>{masterVolume.gain.value = document.querySelector('#master-volume-gain').value}} type='text' placeholder='author name here' onChange={(e)=>{setAuthor(e.target.value)}}/><br/>
          <label style={{textAlign: 'center'}}>preset:</label>
          <input  onFocus={()=>{masterVolume.gain.value = 0}} onBlur={()=>{masterVolume.gain.value = document.querySelector('#master-volume-gain').value}} type='text' placeholder='preset name here' onChange={(e)=>{setName(e.target.value)}}/>

          <button onClick={(e)=>{publishPreset(name, currentSetting, e)}}>publish</button>
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