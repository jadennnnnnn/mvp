export default function Keys ({noteOn, noteOff}) {

  const NOTES = {
    'A-0' : 27.50000,
    'A#0' : 29.13524,
    'B-0' : 30.86771,
    'C-1' : 32.70320,
    'C#1' : 34.64783,
    'D-1' : 36.70810,
    'D#1' : 38.89087,
    'E-1' : 41.20344,
    'F-1' : 43.65353,
    'F#1' : 46.24930,
    'G-1' : 48.99943,
    'G#1' : 51.91309,
    'A-1' : 55.00000,
    'A#1' : 58.27047,
    'B-1' : 61.73541,
    'C-2' : 65.40639,
    'C#2' : 69.29566,
    'D-2' : 73.41619,
    'D#2' : 77.78175,
    'E-2' : 82.40689,
    'F-2' : 87.30706,
    'F#2' : 92.49861,
    'G-2' : 97.99886,
    'G#2' : 103.8262,
    'A-2' : 110.0000,
    'A#2' : 116.5409,
    'B-2' : 123.4708,
    'C-3' : 130.8128,
    'C#3' : 138.5913,
    'D-3' : 146.8324,
    'D#3' : 155.5635,
    'E-3' : 164.8138,
    'F-3' : 174.6141,
    'F#3' : 184.9972,
    'G-3' : 195.9977,
    'G#3' : 207.6523,
    'A-3' : 220.0000,
    'A#3' : 233.0819,
    'B-3' : 246.9417,
    'C-4' : 261.6256,
    'C#4' : 277.1826,
    'D-4' : 293.6648,
    'D#4' : 311.1270,
    'E-4' : 329.6276,
    'F-4' : 349.2282,
    'F#4' : 369.9944,
    'G-4' : 391.9954,
    'G#4' : 415.3047,
    'A-4' : 440.0000,
    'A#4' : 466.1638,
    'B-4' : 493.8833,
    'C-5' : 523.2511,
    'C#5' : 554.3653,
    'D-5' : 587.3295,
    'D#5' : 622.2540,
    'E-5' : 659.2551,
    'F-5' : 698.4565,
    'F#5' : 739.9888,
    'G-5' : 783.9909,
    'G#5' : 830.6094,
    'A-5' : 880.0000,
    'A#5' : 932.3275,
    'B-5' : 987.7666,
    'C-6' : 1046.502,
    'C#6' : 1108.731,
    'D-6' : 1174.659,
    'D#6' : 1244.508,
    'E-6' : 1318.510,
    'F-6' : 1396.913,
    'F#6' : 1479.978,
    'G-6' : 1567.982,
    'G#6' : 1661.219,
    'A-6' : 1760.000,
    'A#6' : 1864.655,
    'B-6' : 1975.533,
    'C-7' : 2093.005,
    'C#7' : 2217.461,
    'D-7' : 2349.318,
    'D#7' : 2489.016,
    'E-7' : 2637.020,
    'F-7' : 2793.826,
    'F#7' : 2959.955,
    'G-7' : 3135.963,
    'G#7' : 3322.438,
    'A-7' : 3520.000,
    'A#7' : 3729.310,
    'B-7' : 3951.066,
    'C-8' : 4186.009
  }

  const activeNotes = {}

  function handleEvent (e) {
    if (e.type === 'mousedown') {
      activeNotes[e.target.dataset.note] = noteOn(NOTES[e.target.dataset.note]);
      console.log('click')
    }
    if (e.type === 'mouseup' || e.type === 'mouseleave') {
      if (activeNotes[e.target.dataset.note]) {
        noteOff(activeNotes[e.target.dataset.note]);
        delete activeNotes[e.target.dataset.note];
      }
    }
  }

  return (
    <div className='keys'>

      <button className='key white' data-note='A-0' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-0</button>
      <button className='key black' data-note='A#0' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#0</button>
      <button className='key white' data-note='B-0' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-0</button>

      <button className='key white' data-note='C-1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-1</button>
      <button className='key black' data-note='C#1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C#1</button>
      <button className='key white' data-note='D-1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D-1</button>
      <button className='key black' data-note='D#1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D#1</button>
      <button className='key white' data-note='E-1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>E-1</button>
      <button className='key white' data-note='F-1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F-1</button>
      <button className='key black' data-note='F#1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F#1</button>
      <button className='key white' data-note='G-1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G-1</button>
      <button className='key black' data-note='G#1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G#1</button>
      <button className='key white' data-note='A-1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-1</button>
      <button className='key black' data-note='A#1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#1</button>
      <button className='key white' data-note='B-1' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-1</button>

      <button className='key white' data-note='C-2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-2</button>
      <button className='key black' data-note='C#2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C#2</button>
      <button className='key white' data-note='D-2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D-2</button>
      <button className='key black' data-note='D#2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D#2</button>
      <button className='key white' data-note='E-2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>E-2</button>
      <button className='key white' data-note='F-2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F-2</button>
      <button className='key black' data-note='F#2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F#2</button>
      <button className='key white' data-note='G-2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G-2</button>
      <button className='key black' data-note='G#2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G#2</button>
      <button className='key white' data-note='A-2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-2</button>
      <button className='key black' data-note='A#2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#2</button>
      <button className='key white' data-note='B-2' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-2</button>

      <button className='key white' data-note='C-3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-3</button>
      <button className='key black' data-note='C#3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C#3</button>
      <button className='key white' data-note='D-3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D-3</button>
      <button className='key black' data-note='D#3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D#3</button>
      <button className='key white' data-note='E-3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>E-3</button>
      <button className='key white' data-note='F-3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F-3</button>
      <button className='key black' data-note='F#3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F#3</button>
      <button className='key white' data-note='G-3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G-3</button>
      <button className='key black' data-note='G#3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G#3</button>
      <button className='key white' data-note='A-3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-3</button>
      <button className='key black' data-note='A#3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#3</button>
      <button className='key white' data-note='B-3' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-3</button>

      <button className='key white' data-note='C-4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-4</button>
      <button className='key black' data-note='C#4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C#4</button>
      <button className='key white' data-note='D-4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D-4</button>
      <button className='key black' data-note='D#4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D#4</button>
      <button className='key white' data-note='E-4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>E-4</button>
      <button className='key white' data-note='F-4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F-4</button>
      <button className='key black' data-note='F#4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F#4</button>
      <button className='key white' data-note='G-4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G-4</button>
      <button className='key black' data-note='G#4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G#4</button>
      <button className='key white' data-note='A-4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-4</button>
      <button className='key black' data-note='A#4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#4</button>
      <button className='key white' data-note='B-4' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-4</button>

      <button className='key white' data-note='C-5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-5</button>
      <button className='key black' data-note='C#5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C#5</button>
      <button className='key white' data-note='D-5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D-5</button>
      <button className='key black' data-note='D#5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D#5</button>
      <button className='key white' data-note='E-5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>E-5</button>
      <button className='key white' data-note='F-5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F-5</button>
      <button className='key black' data-note='F#5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F#5</button>
      <button className='key white' data-note='G-5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G-5</button>
      <button className='key black' data-note='G#5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G#5</button>
      <button className='key white' data-note='A-5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-5</button>
      <button className='key black' data-note='A#5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#5</button>
      <button className='key white' data-note='B-5' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-5</button>

      <button className='key white' data-note='C-6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-6</button>
      <button className='key black' data-note='C#6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C#6</button>
      <button className='key white' data-note='D-6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D-6</button>
      <button className='key black' data-note='D#6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D#6</button>
      <button className='key white' data-note='E-6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>E-6</button>
      <button className='key white' data-note='F-6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F-6</button>
      <button className='key black' data-note='F#6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F#6</button>
      <button className='key white' data-note='G-6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G-6</button>
      <button className='key black' data-note='G#6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G#6</button>
      <button className='key white' data-note='A-6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-6</button>
      <button className='key black' data-note='A#6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#6</button>
      <button className='key white' data-note='B-6' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-6</button>

      <button className='key white' data-note='C-7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-7</button>
      <button className='key black' data-note='C#7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C#7</button>
      <button className='key white' data-note='D-7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D-7</button>
      <button className='key black' data-note='D#7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>D#7</button>
      <button className='key white' data-note='E-7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>E-7</button>
      <button className='key white' data-note='F-7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F-7</button>
      <button className='key black' data-note='F#7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>F#7</button>
      <button className='key white' data-note='G-7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G-7</button>
      <button className='key black' data-note='G#7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>G#7</button>
      <button className='key white' data-note='A-7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A-7</button>
      <button className='key black' data-note='A#7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>A#7</button>
      <button className='key white' data-note='B-7' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>B-7</button>

      <button className='key white' data-note='C-8' onMouseDown={(e)=>{handleEvent(e)}} onMouseUp={(e)=>{handleEvent(e)}} onMouseLeave={(e)=>{handleEvent(e)}}>C-8</button>

    </div>
  )
}