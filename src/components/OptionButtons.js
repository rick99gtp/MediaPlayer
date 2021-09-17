import { BsArrowRepeat } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { useState } from 'react';

import '../styles/OptionButtons.css';
import { useEffect } from 'react/cjs/react.development';

const OptionButtons = () => {
    const [repeatActive, setRepeatActive] = useState(false);
    const [randomActive, setRandomActive] = useState(false);
    const [repeatBounce, setRepeatBounce] = useState(false);
    const [randomBounce, setRandomBounce] = useState(false);

    // functions
    const toggleRepeat = () => {
        setRepeatActive(!repeatActive);
        setRepeatBounce(!repeatBounce);
    };

    const toggleRandom = () => {
        setRandomActive(!randomActive);
        setRandomBounce(!randomBounce);
    };

    return (
        <div className='optionbuttons'>
            <BsArrowRepeat id='repeat'
                className={`${repeatActive ? 'active' : null} ${repeatBounce ? 'bounce' : null} optionspacing`}
                onClick={toggleRepeat}
                onAnimationEnd={() => { setRepeatBounce(false) }} />
            <FaRandom id='random' 
            className={`${randomActive ? 'active' : null} ${randomBounce ? 'bounce' : null} optionspacing`} 
            onClick={toggleRandom}
            onAnimationEnd={() => { setRandomBounce(false) }} />
        </div>
    )
}

export default OptionButtons;