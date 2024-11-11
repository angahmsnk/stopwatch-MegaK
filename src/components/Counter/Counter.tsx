interface CounterProps {
    displayedTime: string;
    counterName: string
}

export const Counter = ({displayedTime, counterName}: CounterProps) => {
    return <div>
        <p>{counterName}: {displayedTime}</p>
    </div>
}