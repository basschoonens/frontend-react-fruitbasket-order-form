import './App.css';
import {useState} from "react";
import logo from './assets/screenshot-logo.png';


function App() {
    const [bananen, setBananen] = useState(0);
    const [aardbeien, setAardbeien] = useState(0)
    const [appels, setAppels] = useState(0)
    const [kiwis, setKiwis] = useState(0)


    const resetCounters = () => {
        setAardbeien(0)
        setBananen(0)
        setAppels(0)
        setKiwis(0)
    }

    return (
        <>
            <main className="page-container">
                <span>
                <img className="logo-image" src={logo} alt="logo"/>
                </span>
                <h1>Fruitmand bezorgservice</h1>
                <article className="fruit-container">
                    <h2>Aardbeien </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={aardbeien === 0}
                                onClick={() => setAardbeien(previous => previous - 1)}>-
                        </button>
                        <p>{aardbeien}</p>
                        <button className="plusButton, button" onClick={() => setAardbeien(previous => previous + 1)}>+</button>
                    </div>
                </article>
                <article className="fruit-container">
                    <h2>Bananen </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={bananen === 0}
                                onClick={() => setBananen(previous => previous - 1)}>-
                        </button>
                        <p>{bananen}</p>
                        <button className="plusButton, button" onClick={() => setBananen(previous => previous + 1)}>+</button>
                    </div>
                </article>
                <article className="fruit-container">
                    <h2>Appels </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={appels === 0}
                                onClick={() => setAppels(previous => previous - 1)}>-
                        </button>
                        <p>{appels}</p>
                        <button className="plusButton, button" onClick={() => setAppels(previous => previous + 1)}>+</button>
                    </div>
                </article>
                <article className="fruit-container">
                    <h2>Kiwis </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={kiwis === 0}
                                onClick={() => setKiwis(previous => previous - 1)}>-
                        </button>
                        <p>{kiwis}</p>
                        <button className="plusButton, button" onClick={() => setKiwis(previous => previous + 1)}>+</button>
                    </div>
                </article>

                <button className="resetCounters" type="button" onClick={() => resetCounters()}>Reset</button>
            </main>
        </>
    )
}

export default App
