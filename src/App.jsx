import './App.css';
import {useState} from "react";
import logo from './assets/screenshot-logo.png';


function App() {
    const [bananen, setBananen] = useState(0);
    const [aardbeien, setAardbeien] = useState(0)
    const [appels, setAppels] = useState(0)
    const [kiwis, setKiwis] = useState(0)

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('');
    const [comment, setComment] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    Voornaam: ${firstname},
    Achternaam: ${lastname},
    Leeftijd: ${age},
    Postcode: ${zipcode},
    Bezorgfrequentie: ${deliveryFrequency},
    Opmerkingen: ${comment},
    Algemene voorwaarden: ${agreeTerms}
    `);
        console.log(`Fruitmand bestelling - aardbeiden: ${aardbeien}, bananen: ${bananen}, appels: ${appels}, kiwi's: ${kiwis}`);
    }

    const resetCounters = () => {
        setAardbeien(0)
        setBananen(0)
        setAppels(0)
        setKiwis(0)
    }

    return (
        <>
            <main className="page-container">
                <span><img className="logo-image" src={logo} alt="logo"/></span>
                <h1>Fruitmand bezorgservice</h1>
                <article className="fruit-container">
                    <h2>Aardbeien </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={aardbeien === 0}
                                onClick={() => setAardbeien(previous => previous - 1)}>-
                        </button>
                        <p>{aardbeien}</p>
                        <button className="plusButton, button"
                                onClick={() => setAardbeien(previous => previous + 1)}>+
                        </button>
                    </div>
                </article>
                <article className="fruit-container">
                    <h2>Bananen </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={bananen === 0}
                                onClick={() => setBananen(previous => previous - 1)}>-
                        </button>
                        <p>{bananen}</p>
                        <button className="plusButton, button" onClick={() => setBananen(previous => previous + 1)}>+
                        </button>
                    </div>
                </article>
                <article className="fruit-container">
                    <h2>Appels </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={appels === 0}
                                onClick={() => setAppels(previous => previous - 1)}>-
                        </button>
                        <p>{appels}</p>
                        <button className="plusButton, button" onClick={() => setAppels(previous => previous + 1)}>+
                        </button>
                    </div>
                </article>
                <article className="fruit-container">
                    <h2>Kiwis </h2>
                    <div className="buttons-container">
                        <button className="minusButton, button" disabled={kiwis === 0}
                                onClick={() => setKiwis(previous => previous - 1)}>-
                        </button>
                        <p>{kiwis}</p>
                        <button className="plusButton, button" onClick={() => setKiwis(previous => previous + 1)}>+
                        </button>
                    </div>
                </article>
                <button className="btn-reset-counters" type="button" onClick={() => resetCounters()}>Reset</button>
                <form className="order-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Voornaam :
                        <input
                            type="text"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </label>
                    <label htmlFor="lastname">Achternaam :
                        <input type="text" onChange={(e) => setLastname(e.target.value)}
                        />
                    </label>
                    <label htmlFor="age">Leeftijd :
                        <input type="number" onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <label htmlFor="postal-code">Postcode :
                        <input type="text" onChange={(e) => setZipcode(e.target.value)}
                        />
                    </label>
                    <label htmlFor="delivery-frequency">Bezorgfrequentie :</label>
                    <select onChange={(e) => toggleDeliveryFrequency(e.target.value)}>
                        <option>iedere week</option>
                        <option>om de week</option>
                        <option>iedere maand</option>
                    </select>
                    <label htmlFor="comments">Opmerkingen</label>
                    <textarea rows={5} cols={30} onChange={(e) => setComment(e.target.value)}/>
                    <label htmlFor="terms">
                        <input type="checkbox" onChange={(e) => toggleAgreeTerms(e.target.value)}/>
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button className="btn-submit-form" type="submit">Verstuur</button>
                </form>
            </main>
        </>
    )
}

export default App
