import { createContext, useContext, useState } from 'react';

const PresetContext = createContext();

export function usePreset() {
  return useContext(PresetContext);
}

export function PresetProvider({children}) {

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

  const [currentPreset, setCurrentPreset] = useState(defaultPreset)

  return (
    <PresetContext.Provider value={currentPreset}>
      {children}
    </PresetContext.Provider>
  )

}