import { createContext, useContext, useState, useEffect } from 'react';
import SaveModal from './components/SaveModal.jsx';
import Search from './components/Search.jsx';
import PublishModal from './components/PublishModal.jsx';

const PresetContext = createContext();

export function usePreset() {
  return useContext(PresetContext);
}

export function PresetProvider({children, setEnableKeyboard}) {

  const [saveModal, setSaveModal] = useState(false);
  const [publishModal, setPublishModal] = useState(false);
  const [searchOn, setSearchOn] = useState(false);

  useEffect(() => {
    if (saveModal || publishModal) {
      setEnableKeyboard(false);
    }
  }, [saveModal, publishModal])

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
  const [presetList, setPresetList] = useState(() => (JSON.parse(localStorage.getItem('presets'))) || {})

  const deletePreset = (name, e) => {
    e.preventDefault();
    const newPresetList = {...presetList};
    delete newPresetList[name];
    localStorage.setItem('presets', JSON.stringify(newPresetList));
    setPresetList(newPresetList);
  }



  return (
    <PresetContext.Provider value={{currentSetting: currentPreset, setCurrentSetting: setCurrentSetting}}>
      <div className='col-1-3'>
        <div className='box preset-box'>
          <div className='preset-title'> PRESETS: </div>
          <div className='preset' onClick={() => {setCurrentPreset(defaultPreset)}}>Default</div>
          <div className='preset' onClick={() => {setCurrentPreset(randomPreset)}}>Random</div>
          {Object.keys(presetList).map((preset, index) => (
            <div className='preset' key={index} onClick={(e) => {if (e.target.className !== 'delete') {setCurrentPreset(presetList[preset])}}}>
              {preset}
              <button className='delete' onClick={(e)=>{deletePreset(preset, e)}}>x</button>
            </div>
            ))}
        </div>
        <div className='preset-buttons'>
          <button onClick={() => setSaveModal(modal => !modal)}>save</button>
          <button onClick={() => setSearchOn(search => !search)}>search</button>
          <button onClick={() => setPublishModal(modal => !modal)}>publish</button>
        </div>
      </div>
      <Search searchOn={searchOn} setCurrentPreset={setCurrentPreset} presetList={presetList} setPresetList={setPresetList}/>
      {children}
      {saveModal ? <SaveModal currentSetting={currentSetting} setSaveModal={setSaveModal} presetList={presetList} setPresetList={setPresetList}/> : null}
      {publishModal ? <PublishModal currentSetting={currentSetting} setPublishModal={setPublishModal}/> : null}
    </PresetContext.Provider>
  )

}