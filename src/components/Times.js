import Current from './Current';
import Duration from './Duration';
import '../styles/Times.css';

const Times = (props) => {
    return (
        <div className='timescontainer'>
            <Current currentTime={props.current}/>
            <Duration duration={props.duration}/>
        </div>
    )
}

export default Times;