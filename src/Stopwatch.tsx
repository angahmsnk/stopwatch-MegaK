import { useEffect, useState } from "react"
import './Stopwatch.scss'

export const Stopwatch = () => {
    const [mainStopwatch, setMainStopwatch] = useState(0);
    const [count, setCount] = useState(false);
    const [lapStopwatch, setLapStopwatch] = useState(0);
    const [lapTimeTable, setLapTimeTable] = useState<number[]>([]);
    const [slowestLap, setSlowestLap] = useState(0);
    const [fastestLap, setFastestLap] = useState(0);

    const handleStart = () => {
        setCount(true)
    }
    
    const handleStop = () => {
        setCount(false);
        if(!lapTimeTable[0]) {
            setLapTimeTable([]);
            return;
        }
        setSlowestLap(findSlowestLap());
        setFastestLap(findFastestLap());
    }

    const handleReset = () => {
        setMainStopwatch(0);
        setLapStopwatch(0);
        setLapTimeTable([]);
        setSlowestLap(0.00);
        setFastestLap(0.00);
    }

    const handleLap = () => {
        if(lapStopwatch === 0) return;
        setLapTimeTable(prev => [...prev, lapStopwatch])
        setLapStopwatch(0);
    }

    const findFastestLap = () => {
        const fastest = lapTimeTable.sort((a,b) => b-a)
        return fastest[0];
    }

    const findSlowestLap = () => {
        const slowest = lapTimeTable.sort((a,b) => a-b)
        return slowest[0];
    }

    useEffect(() => {
    
        if (count === false) return;

        const interval = setInterval(() => {
            setMainStopwatch(prev => prev + 0.01);
            setLapStopwatch(prev => prev + 0.01)
        }, 10)

        return () => {
            clearInterval(interval);
        }
        
    }, [count])

    return <div>
        <p>Czas główny: {mainStopwatch.toFixed(2)}</p>
        <p>Czas okrążenia: {lapStopwatch.toFixed(2)}</p>
        <button className={'button button--start'} onClick={handleStart}>Start</button>
        <button className={'button button--stop'} onClick={handleStop}>Stop</button>
        <button className={'button button--reset'} onClick={handleReset}>Reset</button>
        <button className={'button button--lap'} onClick={handleLap}>Lap</button>
        {count === false ? <p>Najszybsze okrążenie: {fastestLap.toFixed(2)}</p> : <p></p>}
        {count === false ? <p>Najwolniejsze okrążenie: {slowestLap.toFixed(2)}</p> : <p></p>}
        <ul>
            {lapTimeTable.map((el, index) => <li key={index}>{el.toFixed(2)}</li>)}
        </ul>
    </div>
}