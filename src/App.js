import './App.css'
import { useState } from 'react'
import Akshat from './assets/Akshat.png'
import Jheel from './assets/Jheel.png'
import Reet from './assets/Reet.png'
import Preet from './assets/Preet.png'
import Dice from './Dice'

function App() {
    const images = [Akshat, Jheel, Reet, Preet]
    const [winner, setWinner] = useState(0)
    const [looser, setLooser] = useState(0)

    return (
        <>
            <h1>Lakshya Game v1.0</h1>
            <Dice winner={winner} looser={looser} setWinner={setWinner} setLooser={setLooser}/>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <h1>Winner</h1>
                <h1>Looser</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <img
                    src={images[winner]}
                    style={{ width: '80px', height: '80px' }}
                    alt=''
                />
                <img
                    src={images[looser]}
                    style={{ width: '80px', height: '80px' }}
                    alt=''
                />
            </div>
        </>
    )
}

export default App
