import { IoMdPlayCircle, IoMdPause } from 'react-icons/io';
import '../styles/PlayPause.css';
import { useState } from 'react';

const PlayPause = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='btn playpause' onClick={togglePlayPause}>
            {isPlaying ? <IoMdPlayCircle /> : <IoMdPause />}
        </div>
    )
}

export default PlayPause;