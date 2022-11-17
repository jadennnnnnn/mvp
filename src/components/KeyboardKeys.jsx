import { useState, useEffect } from 'react';

export default function KeyboardKeys ({noteOn, noteOff, NOTES}) {

  const [octave, setOctave] = useState(5);

  useEffect(() => {
    const onKeydown = (e) => {
      const keyName = e.key;
      if (!e.repeat) {
        if (keyName === 'z') {noteOn(NOTES[`C-${octave}`], keyName)}
        if (keyName === 's') {noteOn(NOTES[`C#${octave}`], keyName)}
        if (keyName === 'x') {noteOn(NOTES[`D-${octave}`], keyName)}
        if (keyName === 'd') {noteOn(NOTES[`D#${octave}`], keyName)}
        if (keyName === 'c') {noteOn(NOTES[`E-${octave}`], keyName)}
        if (keyName === 'v') {noteOn(NOTES[`F-${octave}`], keyName)}
        if (keyName === 'g') {noteOn(NOTES[`F#${octave}`], keyName)}
        if (keyName === 'b') {noteOn(NOTES[`G-${octave}`], keyName)}
        if (keyName === 'h') {noteOn(NOTES[`G#${octave}`], keyName)}
        if (keyName === 'n') {noteOn(NOTES[`A-${octave}`], keyName)}
        if (keyName === 'j') {noteOn(NOTES[`A#${octave}`], keyName)}
        if (keyName === 'm') {noteOn(NOTES[`B-${octave}`], keyName)}
        if (keyName === ',') {noteOn(NOTES[`C-${octave+1}`], keyName)}
        if (keyName === 'l') {noteOn(NOTES[`C#${octave+1}`], keyName)}
        if (keyName === '.') {noteOn(NOTES[`D-${octave+1}`], keyName)}
        if (keyName === ';') {noteOn(NOTES[`D#${octave+1}`], keyName)}
        if (keyName === '/') {noteOn(NOTES[`E-${octave+1}`], keyName)}

        if (keyName === '[') {if (octave > 1) {setOctave(octave => octave - 1)}}
        if (keyName === ']') {if (octave < 7) {setOctave(octave => octave + 1)}}
      }
    }
    const onKeyup = (e) => {
      const keyName = e.key;
      if (keyName === 'z') {noteOff(keyName)}
      if (keyName === 's') {noteOff(keyName)}
      if (keyName === 'x') {noteOff(keyName)}
      if (keyName === 'd') {noteOff(keyName)}
      if (keyName === 'c') {noteOff(keyName)}
      if (keyName === 'v') {noteOff(keyName)}
      if (keyName === 'g') {noteOff(keyName)}
      if (keyName === 'b') {noteOff(keyName)}
      if (keyName === 'h') {noteOff(keyName)}
      if (keyName === 'n') {noteOff(keyName)}
      if (keyName === 'j') {noteOff(keyName)}
      if (keyName === 'm') {noteOff(keyName)}
      if (keyName === ',') {noteOff(keyName)}
      if (keyName === 'l') {noteOff(keyName)}
      if (keyName === '.') {noteOff(keyName)}
      if (keyName === ';') {noteOff(keyName)}
      if (keyName === '/') {noteOff(keyName)}
    }
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);
    return () => {
      window.removeEventListener('keydown', onKeydown);
      window.removeEventListener('keyup', onKeyup);

    }
  }, [octave, noteOn, noteOff, NOTES])


  return (

    <div className='keyboard-keys'>
        <div className='keyboard-key keyboard-white'><span>Z</span></div>
        <div className='keyboard-key keyboard-black'><span>S</span></div>
        <div className='keyboard-key keyboard-white'><span>X</span></div>
        <div className='keyboard-key keyboard-black'><span>D</span></div>
        <div className='keyboard-key keyboard-white'><span>C</span></div>
        <div className='keyboard-key keyboard-white'><span>V</span></div>
        <div className='keyboard-key keyboard-black'><span>G</span></div>
        <div className='keyboard-key keyboard-white'><span>B</span></div>
        <div className='keyboard-key keyboard-black'><span>H</span></div>
        <div className='keyboard-key keyboard-white'><span>N</span></div>
        <div className='keyboard-key keyboard-black'><span>J</span></div>
        <div className='keyboard-key keyboard-white'><span>M</span></div>
        <div className='keyboard-key keyboard-white'><span>,</span></div>
        <div className='keyboard-key keyboard-black'><span>L</span></div>
        <div className='keyboard-key keyboard-white'><span>,</span></div>
        <div className='keyboard-key keyboard-black'><span>;</span></div>
        <div className='keyboard-key keyboard-white'><span>/</span></div>

        <div className='keyboard-key keyboard-octave'><span>{'['}</span></div>
        <div className='keyboard-key keyboard-octave'><span>{']'}</span></div>
        <div className='octave'>range: {octave}</div>
    </div>
  )
}