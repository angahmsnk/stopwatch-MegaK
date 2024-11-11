import { Button } from "./Button/Button"

interface ControlButtonsProps {
    handleStart: () => void;
    handleStop: () => void;
    handleReset: () => void;
    handleLap: () => void;
}

export const ControlButtons = ({handleStart, handleStop, handleReset, handleLap}: ControlButtonsProps) => {

    return <div>
        <Button btnFn={handleStart} btnName="start"/>
        <Button btnFn={handleStop} btnName="stop"/>
        <Button btnFn={handleReset} btnName="reset"/>
        <Button btnFn={handleLap} btnName="lap"/>
    </div>
}