import OptionButtons from './OptionButtons';
import Times from './Times';
import Buttons from './Buttons';
import '../styles/AudioPlayer.css';

const AudioPlayer = () => {
    return (
        <div className='audioplayer'>
            <OptionButtons />
            <input className='progressbar' type="range" defaultValue="0"/>
            <Times />
            <Buttons />
        </div>
    )
}

export default AudioPlayer;