import {useState} from 'react'
import './App.css'
import image from './image.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
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
                    name: "Виктор КОмаров",
                    jobPosition: 'Продавец Wildberries',
                    text: 'Просто потрясающе, я заговорил на английском так, как сама не предполагал',
                    image: image,
                },
                {
                    id: 2,
                    name: "Матс Хуммельс",
                    jobPosition: 'Футболист Дортмундской Боруссии',
                    text: 'Моя жизнь изменилась, я проснулся',
                    image: image2,
                },
                {
                    id: 3,
                    name: "Томас Тухель",
                    jobPosition: 'Домохозяин',
                    text: 'Жаль, что не вступил в Local English Speaking Club пока работал тренером в Челси',
                    image: image3,
                }
            ]}/>
        </div>
    )
}

export default App
