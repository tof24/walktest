import '../App.css'
import '../bootstrap.min.css'
import React, {useState, useEffect} from 'react';


const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
    }, [props.refresh]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => (prevSeconds + 1) % 60);
            setMinutes(prevMinutes => (prevMinutes + (seconds === 59 ? 1 : 0)) % 60);
            setHours(prevHours => prevHours + (minutes === 59 && seconds === 59 ? 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds, minutes, hours]);

    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');

    return <span>{formattedHours}:{formattedMinutes}:{formattedSeconds}</span>;
};

export default Timer;