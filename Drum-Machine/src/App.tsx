import './App.css'
import { AudioClip } from './types';
import Drum from './Drum';
import Power from './Power';

const audioClips: AudioClip[] = [
  {
    keytrigger: "Q",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'Open-HH',
  },
  {
    keytrigger: "W",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'Closed-HH',
  },
  {
    keytrigger: "E",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: 'Kick-and-Hat',
  },
  {
    keytrigger: "A",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    description: 'Punchy-Kick',
  },
  {
    keytrigger: "S",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'Kick',
  },
  {
    keytrigger: "D",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    description: 'Snare',
  },
  { 
    keytrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    description: 'Side-Stick',
  },
  { 
    keytrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'Clap',
  },
  { 
    keytrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    description: 'Shaker',
  },
]


function App() {

  return (
    <>
      <Power/>

        <div className='container' id="drum-machine">
          <h1>Drum Machine</h1>
          <div className="whole-drum">
            {audioClips.map((item) => (
              <Drum audioClip={item} key={item.keytrigger} />
            ))}
          </div>
          <div id="display"></div>
        </div>
    </>
  )
}

export default App
