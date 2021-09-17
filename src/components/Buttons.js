import PreviousSong from './PreviousSong';
import PlayPause from './PlayPause';
import NextSong from './NextSong';
import '../styles/Buttons.css';

const Buttons = () => {
    return (
        <div className='buttons'>
            <PreviousSong />
            <PlayPause />
            <NextSong />
        </div>
    )
}

export default Buttons;