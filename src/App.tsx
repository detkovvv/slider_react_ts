import './App.css'
import {Slider} from "./components/slider/slider";
import {Items} from './utils'

function App() {
    return (
        <div className="App">
            <Slider reviews={Items}/>
        </div>
    )
}

export default App
