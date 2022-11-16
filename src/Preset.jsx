import { createContext, useContext, useState } from 'react';
import SaveModal from './components/SaveModal.jsx';

const PresetContext = createContext();

export function usePreset() {
  return useContext(PresetContext);
}

export function PresetProvider({children}) {

  const [saveModal, setSaveModal] = useState(false);

  const defaultPreset = {
    waveform: 0,
    detune: 0,
    frequency: 1,
    q: 0.03,
    attack: 0,
    decay: 0,
    sustain: 1,
    release: 0,
    time: 0,
    feedback: 0
  }

  const randomPreset = () => ({
    waveform: Math.floor(Math.random() * 4),
    detune: Math.floor(Math.random() * 11),
    frequency: Math.random(),
    q: Math.random(),
    attack: Math.random() * 0.2,
    decay: Math.random(),
    sustain: Math.random(),
    release: Math.random() * 0.2,
    time: Math.random() * 0.5,
    feedback: Math.random() * 0.2
  })

  const [currentPreset, setCurrentPreset] = useState(defaultPreset)
  const [currentSetting, setCurrentSetting] = useState(currentPreset)
  const [presetList, setPresetList] = useState(() => (JSON.parse(localStorage.getItem('presets')) || {Default: defaultPreset}))

  return (
    <PresetContext.Provider value={{currentSetting: currentPreset, setCurrentSetting: setCurrentSetting}}>
      <div className='col-1-3'>
        <div className='box preset-box'>
          <div className='preset-title'> PRESETS: </div>
          <div className='preset' onClick={() => {setCurrentPreset(randomPreset)}}>Random</div>
          {Object.keys(presetList).map((preset, index) => (
            <div className='preset' key={index} onClick={() => {setCurrentPreset(presetList[preset])}}>{preset}</div>
            ))}
        </div>
        <div className='preset-buttons'>
          <button>search</button>
          <button onClick={() => setSaveModal(saveModal => !saveModal)}>save</button>
          <button>publish</button>
        </div>
      </div>
      {children}
      {saveModal ? <SaveModal currentSetting={currentSetting}/> : null}
    </PresetContext.Provider>
  )

}