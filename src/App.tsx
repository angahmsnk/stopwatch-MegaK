import './App.scss'
import { Stopwatch } from './Stopwatch'

export const App = () => {
    return <main>
        <div className='header'>
            <img src="/stopwatch.svg" alt="" height={70}/>
            <h1>STOPWATCH APP</h1>
        </div>
        <Stopwatch/>
    </main>
}