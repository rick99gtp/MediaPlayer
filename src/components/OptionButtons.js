import {BsArrowRepeat} from 'react-icons/bs';
import {FaRandom} from 'react-icons/fa';

import '../styles/OptionButtons.css';

const OptionButtons = () => {
    return (
        <div className='optionbuttons'>
            <BsArrowRepeat id='repeat' className='optionspacing repeat' />
            <FaRandom id='random' className='optionspacing' />
        </div>
    )
}

export default OptionButtons;