import './App.css'
import { useEffect, useState } from 'react'
import Akshat from './assets/Akshat.png'
import Jheel from './assets/Jheel.png'
import Preet from './assets/Preet.png'
import Reet from './assets/Reet.png'

function App() {
    const images = [Akshat, Jheel, Preet, Reet]

    const [attacker, setAttacker] = useState(0)
    const [defender, setDefender] = useState(0)

    useEffect(() => {
        if (attacker === defender) shuffleIndex()
    }, [])

    const shuffleIndex = () => {
        console.log('Fired')
        const idx1 = Math.floor(Math.random() * 4)
        const idx2 = Math.floor(Math.random() * 4)
        setDefender(idx1)
        setAttacker(idx2)
    }

    return (
        <>
            <div className='App'>
                <img
                    src={images[attacker]}
                    style={{ width: '200px', height: '200px' }}
                    alt=''
                />
                <img
                    src={images[defender]}
                    style={{ width: '200px', height: '200px' }}
                    alt=''
                />
            </div>
            <div className='button-box'>
                <button className='button-50' onClick={shuffleIndex}>
                    Shuffle
                </button>
            </div>
        </>
    )
}

export default App
