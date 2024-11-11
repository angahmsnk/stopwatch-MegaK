import { LapTable } from "./components/LapTable/LapTable";
import { useStopwatch } from "./hooks/useStopwatch";
import { ControlButtons } from "./components/ControlButtons";
import { Counter } from "./components/Counter/Counter";
import turtle from '../public/turtle-50x50.png';
import rabbit from '../public/rabbit-50x50.png';
import './Stopwatch.scss'

export const Stopwatch = () => {
    
    const {
        mainStopwatch, 
        lapTimeTable, 
        lapStopwatch, 
        handleStart, 
        handleStop, 
        handleReset, 
        handleLap, 
        fastestLap, 
        slowestLap,
        count,
        averageLapTime
    } = useStopwatch();

    return <div>
        <ControlButtons
            handleStart={handleStart}
            handleStop={handleStop}
            handleReset={handleReset}
            handleLap={handleLap}
        />
        {
            count === true ? <>
                <Counter counterName="Licznik główny" displayedTime={mainStopwatch}/>
                <Counter counterName="Czas okrążenia" displayedTime={lapStopwatch}/>
                <LapTable array={lapTimeTable}/>
            </>
            : <>
                <Counter counterName="Łączny czas" displayedTime={mainStopwatch}/>
                <Counter counterName="Średni czas okrążenia" displayedTime={averageLapTime}/>
                <p>Liczba okrążeń: {lapTimeTable.length}</p>
                <div className="timeContainer">
                    <img src={rabbit}/> 
                    <p>{fastestLap}</p>
                </div>
                <div className="timeContainer">
                    <img src={turtle}/> 
                    <p>{slowestLap}</p>
                </div>
            </>
        }     
    </div>
}