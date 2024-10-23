import './App.scss'
import { Stopwatch } from './Stopwatch'

export const App = () => {
    return <div>
        <div style={{display: 'flex', alignItems:'center', gap: '20px'}}>
            <img src="/stopwatch.svg" alt="" height={70}/>
            <h1>Stopwatch App</h1>
        </div>
        <Stopwatch/>
    </div>
}