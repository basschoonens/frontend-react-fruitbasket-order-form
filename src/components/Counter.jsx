import Button from './Button.jsx';

// refactor the fruitcounters to a reusable component

function Counter({ setFruitCount, fruitCount }) {
    return (
        <>
            <Button type="button" disabled={fruitCount === 0} clickHandler={() => setFruitCount(fruitCount - 1)}>
                -
            </Button>
            <p>{fruitCount}</p>
            <Button type="button" clickHandler={() => setFruitCount(fruitCount + 1)}>
                +
            </Button>
        </>
    );
}

export default Counter;