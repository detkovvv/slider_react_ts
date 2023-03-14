import {useState} from 'react'
import './App.css'
import image from './foto.jpg'
import {Slider} from "./components/slider/slider";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App"
             style={{
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '100vh',
             }}
        >
            <Slider reviews={[
                {
                    id: 1,
                    name: "Дана Валеева",
                    jobPosition: 'Продавец Wildberries',
                    text: 'Просто потрясающе, я заговорил на английском так, как сама не предполагала',
                    image,
                },
                {
                    id: 2,
                    name: "Алена Александрова",
                    jobPosition: 'Художница',
                    text: 'Моя жизнь изменилась, я проснулась',
                    image,
                }
            ]}/>
        </div>
    )
}

export default App
