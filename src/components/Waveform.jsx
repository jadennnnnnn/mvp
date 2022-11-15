export default function Waveform ({setWaveform}) {

  const waveforms = [
    'sine',
    'square',
    'sawtooth',
    'triangle'
  ]

  return (
    <div className='waveform'>
      <label>waveform</label><br/>
      <input type='range' min='0' max='3' step='1' list='waveform-list' onChange={(e)=>{setWaveform(waveforms[Number(e.target.value)])}} />

      <datalist id='waveform-list'>
        <option value="0" label='sine'></option>
        <option value="1" label='square'></option>
        <option value="2" label='sawtooth'></option>
        <option value="2" label='triangle'></option>
      </datalist>

    </div>
  )
}