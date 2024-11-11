import { useEffect, useState } from "react";


export const useStopwatch = () => {
    const [count, setCount] = useState(false);
    const [mainStopwatch, setMainStopwatch] = useState(0);
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
        const fastest = [...lapTimeTable].sort((a,b) => a-b)
        return fastest[0];
    }

    const findSlowestLap = () => {
        const slowest = [...lapTimeTable].sort((a,b) => b-a)
        return slowest[0];
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const milliseconds = Math.floor((time * 100) % 100);
        
        const mm = String(minutes).padStart(2, '0');
        const ss = String(seconds).padStart(2, '0');
        const ms = String(milliseconds).padStart(2, '0');

        return `${mm}:${ss}:${ms}`;
    };

    const averageLapTime = lapTimeTable.length > 0 
    ? lapTimeTable.reduce((acc, curr) => acc + curr, 0) / lapTimeTable.length 
    : 0;

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

    return {
        mainStopwatch: formatTime(mainStopwatch),
        lapStopwatch: formatTime(lapStopwatch),
        lapTimeTable: lapTimeTable.map(formatTime), // Formatujemy czasy okrążeń
        averageLapTime: formatTime(averageLapTime),
        slowestLap: formatTime(slowestLap),
        fastestLap: formatTime(fastestLap),
        count,
        handleStart,
        handleStop,
        handleReset,
        handleLap,
    }
}