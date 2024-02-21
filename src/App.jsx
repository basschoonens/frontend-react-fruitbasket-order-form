import './App.css';
import {useState} from "react";
import logo from './assets/screenshot-logo.png';
import './components/Button.jsx';
import './components/Counter.jsx';
import Counter from "./components/Counter.jsx";


function App() {
    const [bananen, setBananen] = useState(0);
    const [aardbeien, setAardbeien] = useState(0)
    const [appels, setAppels] = useState(0)
    const [kiwis, setKiwis] = useState(0)


    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        zipcode: '',
        deliveryFrequency: '',
        comment: '',
        agreeTerms: false
    })

    function handleChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [inputName]: inputValue,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        console.log(`Fruitmand bestelling - aardbeien: ${aardbeien}, bananen: ${bananen}, appels: ${appels}, kiwi's: ${kiwis}`);
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
                    <h2>🍓Aardbeien </h2>
                    <Counter
                        setFruitCount={setAardbeien}
                        fruitCount={aardbeien}
                    />
                </article>
                <article className="fruit-container">
                    <h2>🍌 Bananen </h2>
                    <Counter
                        setFruitCount={setBananen}
                        fruitCount={bananen}
                    />
                </article>
                <article className="fruit-container">
                    <h2>🍏 Appels </h2>
                    <Counter
                        setFruitCount={setAppels}
                        fruitCount={appels}
                    />
                </article>
                <article className="fruit-container">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2>🥝 Kiwi's </h2>
                    <Counter
                        setFruitCount={setKiwis}
                        fruitCount={kiwis}
                    />
                </article>
                <button className="btn-reset-counters" type="button" onClick={() => resetCounters()}>Reset</button>
                <form className="order-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Voornaam :
                        <input
                            name="firstname"
                            type="text"
                            value={formState.firstname}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="lastname">Achternaam :
                        <input
                        name="lastname"
                        type="text"
                        value={formState.lastname}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="age">Leeftijd :
                        <input
                            name="age"
                            type="number"
                            value={formState.age}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="postal-code">Postcode :
                        <input
                            name="zipcode"
                            type="text"
                            value={formState.zipcode}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="delivery-frequency">Bezorgfrequentie :</label>
                    <select
                        name="deliveryFrequency"
                        value={formState.deliveryFrequency}
                        onChange={handleChange}>
                        <option value="week">iedere week</option>
                        <option value="two-week">om de week</option>
                        <option value="month">iedere maand</option>
                    </select>
                    <label htmlFor="comments">Opmerkingen</label>
                    <textarea
                        name="comment"
                        value={formState.comment}
                        onChange={handleChange}
                        rows={5}
                        cols={30}
                    />
                    <label htmlFor="terms">
                        <input
                            name="agreeTerms"
                            type="checkbox"
                            value={formState.agreeTerms}
                            onChange={handleChange}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button className="btn-submit-form" type="submit">Verstuur</button>
                </form>
            </main>
        </>
    )
}

export default App
