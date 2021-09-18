import OptionButtons from './OptionButtons';
import Times from './Times';
import Buttons from './Buttons';
import '../styles/AudioPlayer.css';
import { useState } from 'react';

const AudioPlayer = () => {
    // state
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    
    return (
        <div className='audioplayer'>
            <OptionButtons />
            <input className='progressbar' type="range" defaultValue="0"/>
            <Times current={currentTime} duration={duration} />
            <Buttons />
        </div>
    )
}

export default AudioPlayer;