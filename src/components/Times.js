import Current from './Current';
import Duration from './Duration';
import '../styles/Times.css';

const Times = () => {
    return (
        <div className='timescontainer'>
            <Current />
            <Duration />
        </div>
    )
}

export default Times;